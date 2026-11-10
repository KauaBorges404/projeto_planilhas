# Projeto Planilhas 📊

Este projeto é um formulário web simples, responsivo e funcional que envia os dados preenchidos diretamente para uma planilha do **Google Sheets** utilizando o **Google Apps Script** como backend.

## 🚀 Funcionalidades

* **Envio Assíncrono:** Utiliza a API `fetch` com JavaScript puro para enviar os dados sem recarregar a página.
* **Feedback em Tempo Real:** Exibe mensagens de status ("Enviando...", "Enviado com sucesso!" ou mensagens de erro) direto na interface.
* **Design Responsivo e Limpo:** Interface agradável centralizada na tela, desenvolvida com HTML e CSS modernos.
* **Integração com Google Sheets:** Os dados de Nome, E-mail, Telefone e Mensagem vão direto para uma planilha em nuvem, sem necessidade de banco de dados tradicional.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do formulário.
* **CSS3:** Estilização (Flexbox, cores e espaçamentos).
* **JavaScript (Vanilla):** Lógica de interceptação do formulário (`preventDefault`), coleta de dados (`FormData`) e requisição HTTP (`fetch`).
* **Google Apps Script:** Script configurado na nuvem do Google para receber requisições `POST` e salvar na planilha.

## 📂 Estrutura dos Arquivos

* `index.html`: Contém a estrutura da página e os campos de entrada.
* `style.css`: Responsável pela aparência visual do formulário.
* `script.js`: O motor do projeto, responsável por capturar o clique, conectar com a URL do Google e dar o retorno ao usuário.

## 🔧 Como Executar o Projeto

Como é um projeto puramente Front-end (lado do cliente), não é necessário instalar dependências como Node.js ou Python.

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/KauaBorges404/projeto_planilhas.git](https://github.com/KauaBorges404/projeto_planilhas.git)
