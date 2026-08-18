## Requisitos do Sistema

### Requisitos Funcionais (RF)
* **RF-01:** O sistema deve permitir o cadastro de usuários divididos por perfis (Administrador/Técnico, Docente e Discente).
* **RF-02:** O sistema deve permitir o cadastro e mapeamento das áreas experimentais (talhões, estufas e instalações) com suas respectivas dimensões e especificações técnicas.
* **RF-03:** O usuário deve conseguir visualizar a disponibilidade das áreas em um calendário interativo de reservas.
* **RF-04:** O aluno deve conseguir solicitar a reserva de um espaço informando orientador, período de uso, objetivo do experimento e cultura/espécie estudada.
* **RF-05:** O responsável técnico pelo setor deve receber notificações para aprovar, recusar ou solicitar ajustes nas solicitações de reserva.
* **RF-06:** O sistema deve emitir alertas quando houver tentativa de agendamento duplicado no mesmo espaço e período.
* **RF-07:** O sistema deve gerar relatórios em PDF do histórico de uso das áreas para fins de prestação de contas acadêmica.

### Requisitos Não Funcionais (RNF)
* **RNF-01 (Acessibilidade):** A interface web deve ser responsiva, permitindo acesso via computador e navegadores mobile.
* **RNF-02 (Segurança):** A autenticação de alunos e professores deve exigir validação de e-mail institucional (`@ufpi.edu.br`).
* **RNF-03 (Desempenho):** O tempo de carregamento do calendário de ocupação não deve ultrapassar 2 segundos sob conexão padrão.
* **RNF-04 (Disponibilidade):** O sistema deve estar disponível 99% do tempo para consulta de horários e envio de solicitações.
