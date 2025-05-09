import { Gym } from '@prisma/client'
import { GymsRepository } from '@/repositories/gyms-repository'

interface SeachGymsUseCaseRequest {
  query: string
  page: number
}

interface SeachGymsUseCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SeachGymsUseCaseRequest): Promise<SeachGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.seachMany(query, page)

    return { gyms }
  }
}
