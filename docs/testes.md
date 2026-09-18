# Relatório de Validação e Testes - AgroReserva CPCE

## 1. Introdução
Este documento detalha os procedimentos, ambientes e resultados dos testes funcionais, de usabilidade, de responsividade e de publicação do sistema **AgroReserva CPCE**, cumprindo os requisitos da Etapa 3 da disciplina de Projeto Integrador II.

## 2. Ambientes de Teste
* **Desenvolvimento Local:** VS Code (Live Server)
* **Produção / Hospedagem:** GitHub Pages
* **Navegadores:** Google Chrome, Microsoft Edge e Safari Mobile
* **Dispositivos:** Computador Desktop (Full HD) e Dispositivo Móvel (Android/iOS)

## 3. Matriz de Execução de Testes

| ID | Categoria | Descrição do Teste | Procedimento de Verificação | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC01** | Funcional | Cadastro Silencioso | Preencher o formulário e clicar em "Confirmar Agendamento" | Inserção direta na tabela sem alertas pop-up | **Aprovado** |
| **TC02** | Validação | Período Inválido | Inserir Data de Início posterior à Data de Término | Bloqueio imediato do envio do formulário | **Aprovado** |
| **TC03** | Funcional | Edição de Registro | Clicar em "Editar" na tabela, alterar um campo e salvar | Atualização do registro correspondente na tabela | **Aprovado** |
| **TC04** | Funcional | Exclusão Silenciosa | Clicar no botão "Cancelar" na linha da reserva | Remoção instantânea da tabela sem pop-ups | **Aprovado** |
| **TC05** | Persistência | Persistência Local | Cadastrar um item e atualizar a página (F5) | Recuperação automática dos dados do `localStorage` | **Aprovado** |
| **TC06** | Usabilidade | Layout Computador | Abrir a página em tela cheia | Menu fixo, formulário em colunas e leitura limpa | **Aprovado** |
| **TC07** | Usabilidade | Layout Celular | Abrir a página em tela mobile | Formulário em 1 coluna e rolagem lateral na tabela | **Aprovado** |
| **TC08** | Implantação | GitHub Pages | Acessar o link gerado pelo GitHub Pages | Carregamento completo do CSS, JS e persistência online | **Aprovado** |

## 4. Conclusão
Todos os 8 testes planejados foram executados e aprovados com 100% de conformidade técnica, atestando a estabilidade e usabilidade da aplicação para entrega final.
