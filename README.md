Mercado JB 🛒
Bem-vindo ao repositório do Mercado JB! Este projeto foi desenvolvido para fornecer aos clientes uma experiência simples e prática de consulta às ofertas do Mercado JB, além de informações sobre localização, contato e sobre a nossa história.

🚀 Acesse o Projeto
O projeto está disponível online e pode ser acessado pelo link: https://mercadojb.netlify.app/.

📋 Funcionalidades
Página de Ofertas: Consulta das promoções e produtos em destaque.
Página de Localização: Exibição da localização do mercado com integração ao Google Maps para fácil navegação.
Página de Contato: Informações de contato com ícones de e-mail e WhatsApp para comunicação direta.
Página Sobre Nós: História e valores do Mercado JB.
Design Responsivo: Layout otimizado para todos os dispositivos, garantindo uma boa experiência em celulares, tablets e desktops.

📦 Tecnologias Utilizadas
Next.js - Framework React para renderização do lado do servidor e geração de sites estáticos.
React - Biblioteca JavaScript para criação de interfaces de usuário.
Tailwind CSS - Framework para estilização rápida e responsiva.
Netlify - Plataforma para deploy e gerenciamento de projetos web.

📂 Estrutura do Projeto
Abaixo está uma visão geral da estrutura de diretórios e arquivos principais:

plaintext
Copiar código
📦mercado-jb
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜JB.png                 # Logotipo
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📜page.tsx               # Página inicial com ofertas
 ┃ ┃ ┣ 📜contato/page.tsx       # Página de Contato
 ┃ ┃ ┣ 📜localizacao/page.tsx   # Página de Localização
 ┃ ┃ ┗ 📜sobre/page.tsx         # Página Sobre Nós
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Header.tsx             # Cabeçalho e menu de navegação
 ┃ ┃ ┣ 📜Footer.tsx             # Rodapé
 ┃ ┃ ┗ 📜ProductCard.tsx        # Componente de exibição de produtos em promoção
 ┃ ┃ ┗ 📜ProductGrid.tsx  
 ┃ ┗ 📂styles
 ┃ ┃ ┗ 📜globals.css            # Estilos globais
 ┣ 📜.eslintrc.json             # Configuração do ESLint
 ┣ 📜.gitignore                 # Arquivos e pastas ignoradas pelo Git
 ┣ 📜README.md                  # Documentação do projeto
 ┗ 📜package.json               # Dependências e scripts do projeto
 
🖥️ Rodando o Projeto Localmente
Para rodar o projeto em seu ambiente local, siga as instruções abaixo:

Pré-requisitos
Node.js e npm instalados.
Passo a Passo
Clone o repositório:

bash
Copiar código
git clone https://github.com/ThiagoCamponez/MercadoJB.git
Navegue até o diretório do projeto:

bash
Copiar código
cd MercadoJB
Instale as dependências:

bash
Copiar código
npm install
Rode o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse o projeto em http://localhost:3000.

🌍 Deploy
Este projeto foi hospedado no Netlify, o que facilita o deploy contínuo e o gerenciamento do site. Qualquer commit enviado ao branch principal no GitHub é automaticamente publicado no Netlify, tornando as atualizações instantâneas.

🤝 Contribuição
Contribuições são bem-vindas! Se você tiver sugestões para melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou um pull request.

📜 Licença
Este projeto é licenciado sob a Licença MIT.
