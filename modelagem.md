# 🏗️ Relatório de Arquitetura e Modelagem do Sistema

> **Projeto:** AgroReserva CPCE
> **Fase:** Etapa 2 — Planejamento Operacional e Modelagem
> **Status:** 🟢 Concluído

---

## 📐 1. Fluxograma do Processo

O fluxograma abaixo ilustra o processo completo, desde o acesso do usuário até a confirmação (ou recusa) da reserva de uma área experimental.

```mermaid
flowchart TD
    A([Início: Usuário Acessa o Sistema]) --> B{Autenticado com @ufpi.edu.br?}
    B -- Não --> C[Tela de Login/Cadastro]
    C --> D[Insere Credenciais Institucionais]
    D --> B
    B -- Sim --> E[Painel Principal / Calendário Interativo]
    E --> F[Seleciona Setor: Talhão, Estufa ou Laboratório]
    F --> G[Verifica Disponibilidade de Datas]
    G --> H{Área Disponível no Período?}
    H -- Não --> I[Exibe Alerta de Ocupação/Conflito]
    I --> F
    H -- Sim --> J[Preenche Formulário de Solicitação]
    J --> K[Informa: Projeto, Orientador, Cultura e Período]
    K --> L[Submete Solicitação]
    L --> M[Status do Agendamento: PENDENTE]
    M --> N[Notifica Responsável Técnico por E-mail]
    N --> O{Análise do Responsável Técnico}
    O -- Recusado --> P[Status: RECUSADO]
    P --> Q[Notifica Aluno/Pesquisador com Motivo]
    Q --> End1([Fim])
    O -- Aprovado --> R[Status: CONFIRMADO]
    R --> S[Bloqueia Agenda do Setor no Período]
    S --> T[Gera Histórico de Ocupação do Solo]
    T --> End2([Fim: Reserva Concluída])
```

---

## 🗄️ 2. Modelagem de Dados

### Diagrama Entidade-Relacionamento

```mermaid
erDiagram
    USUARIOS ||--o{ RESERVAS : "solicita"
    AREAS_EXPERIMENTAIS ||--o{ RESERVAS : "e reservada em"

    USUARIOS {
        uuid id PK
        string nome
        string email
        string senha_hash
        string perfil
        timestamp criado_em
    }
    AREAS_EXPERIMENTAIS {
        uuid id PK
        string nome_setor
        string tipo
        decimal dimensao_m2
        string status
    }
    RESERVAS {
        uuid id PK
        uuid usuario_id FK
        uuid area_id FK
        string docente_orientador
        string projeto_pesquisa
        string cultura_especie
        date data_inicio
        date data_fim
        string status
        timestamp criado_em
    }
```

### Esquema Relacional (PostgreSQL)

```sql
-- Tabela de Usuários
CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    perfil VARCHAR(20) NOT NULL CHECK (perfil IN ('discente', 'docente', 'tecnico')),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Áreas Experimentais
CREATE TABLE areas_experimentais (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome_setor VARCHAR(100) NOT NULL,
    tipo VARCHAR(30) NOT NULL CHECK (tipo IN ('talhao', 'estufa', 'laboratorio')),
    dimensao_m2 DECIMAL(10,2),
    status VARCHAR(20) DEFAULT 'ativo' CHECK (status IN ('ativo', 'manutencao'))
);

-- Tabela de Reservas
CREATE TABLE reservas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id),
    area_id UUID REFERENCES areas_experimentais(id),
    docente_orientador VARCHAR(100) NOT NULL,
    projeto_pesquisa VARCHAR(200) NOT NULL,
    cultura_especie VARCHAR(100) NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'pendente' CHECK (status IN ('pendente', 'confirmado', 'recusado')),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🖥️ 3. Protótipo de Telas (Sugestão — Figma)

1. **Login/Cadastro** — autenticação com e-mail institucional.
2. **Calendário Interativo** — visão geral de disponibilidade por setor.
3. **Formulário de Solicitação** — período, projeto, orientador, cultura.
4. **Painel do Responsável Técnico** — aprovar, recusar ou ajustar solicitações.
5. **Relatórios de Ocupação** — exportação em PDF do histórico de uso do solo.

---
