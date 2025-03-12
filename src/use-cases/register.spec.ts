import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlredyExistsError } from './errors/user-alredy-exists-error'

describe('Register Use Case', () => {
  it('should be able to register', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const resgisterUseCase = new RegisterUseCase(usersRepository)

    const { user } = await resgisterUseCase.execute({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const resgisterUseCase = new RegisterUseCase(usersRepository)

    const { user } = await resgisterUseCase.execute({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
    })

    const isPasswordConrrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordConrrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const resgisterUseCase = new RegisterUseCase(usersRepository)

    const email = 'john.doe@example.com'

    await resgisterUseCase.execute({
      name: 'John Doe',
      email,
      password: '123456',
    })

    await expect(() =>
      resgisterUseCase.execute({
        name: 'John Doe',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlredyExistsError)
  })
})
