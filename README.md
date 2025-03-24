# App

Gympass-style-app

# RFs (requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar; 
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-íns realizado pelo usuário logado;
- [  ] Deve ser possível o usuário obter o histórico de check-íns;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-ín em uma academia;
- [ ] Deve ser possível validade o check-ín de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

# RNs (regras de negócio)

- [x]  O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-íns no mesmo dia;
- [x] O usuário não pode fazer check-ín se não estiver perto (100m) da academia;
- [ ] O check-ín só pode ser validado até 20 minutos após ser criado;
- [ ] O check-ín só poder ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

# RNFs (requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (json web token);