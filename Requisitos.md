# 📋 Documento de Engenharia de Requisitos

> **Projeto:** AgroReserva CPCE
> **Documento:** Especificação de Escopo e Requisitos

---

## 🎯 1. Visão Geral do Escopo

O **AgroReserva CPCE** visa eliminar o agendamento informal e descentralizado das áreas experimentais do Campus CPCE/UFPI, prevenindo sobreposição de projetos de pesquisa, choques de horários de irrigação/aplicação de insumos e falta de registro histórico sobre a utilização e descanso dos solos.

### 👥 Perfis de Usuário (Atores)
* **🎓 Discente/Pesquisador:** Consulta disponibilidade, solicita reserva de áreas informando projeto, orientador e cultura.
* **🧑‍🏫 Docente:** Atua como orientador vinculado aos projetos de pesquisa.
* **🛡️ Técnico Responsável:** Analisa, aprova ou recusa solicitações; gerencia o cadastro das áreas.

---

## ⚡ 2. Requisitos Funcionais (RF)

| ID | Descrição do Requisito |
| :---: | :--- |
| **RF-01** | O sistema deve permitir o cadastro de usuários divididos por perfis (Discente, Docente e Técnico Responsável). |
| **RF-02** | O sistema deve permitir o cadastro e mapeamento detalhado das áreas experimentais (nome do setor, dimensão em m², tipo de solo/instalação). |
| **RF-03** | O sistema deve disponibilizar um calendário interativo de consulta de disponibilidade dos setores. |
| **RF-04** | O sistema deve permitir que discentes/pesquisadores solicitem a reserva de uma área informando: período (início/fim), projeto de pesquisa, docente orientador e cultura/espécie vegetal. |
| **RF-05** | O sistema deve fornecer uma interface de análise para o responsável técnico aprovar, recusar ou solicitar ajustes nas solicitações. |
| **RF-06** | O sistema deve validar e emitir alertas automáticos de impedimento em caso de choque de datas/agendamentos duplicados para o mesmo setor. |
| **RF-07** | O sistema deve gerar relatórios exportáveis em PDF com o histórico de ocupação e uso de insumos por área. |

---

## 🛡️ 3. Requisitos Não Funcionais (RNF)

| ID | Categoria | Descrição |
| :---: | :--- | :--- |
| **RNF-01** | Usabilidade | A interface deve ser responsiva, garantindo acesso via navegadores web e dispositivos móveis. |
| **RNF-02** | Segurança | A autenticação de novos usuários deve exigir obrigatoriamente um e-mail institucional com domínio `@ufpi.edu.br`. |
| **RNF-03** | Desempenho | O tempo de carregamento e renderização do calendário interativo não deve exceder 2 segundos. |
| **RNF-04** | Disponibilidade | A API do sistema deve manter uma disponibilidade estimada de 99%. |

---

## ⚖️ 4. Regras de Negócio (RN)

* **RN01 - Conflito de Datas:** O sistema não deve permitir sobreposição de reservas para o mesmo setor no mesmo período (base do RF-06).
* **RN02 - Aprovação Obrigatória:** Toda solicitação de reserva nasce com status *Pendente* e só se torna *Confirmado* após validação do responsável técnico (RF-05).
* **RN03 - Acesso Institucional:** Somente usuários com e-mail `@ufpi.edu.br` podem se cadastrar e solicitar reservas (RNF-02).

---

## 🔗 5. Rastreabilidade

Cada RF/RNF está mapeado a um cartão de desenvolvimento no quadro Kanban da Etapa 2 (ver `/docs/modelagem.md`, seção 4), permitindo acompanhar a implementação de cada requisito por commit no GitHub.
