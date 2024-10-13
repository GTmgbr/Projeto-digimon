# Projeto Digimon

Teste prático para estágio na empresa GF Software Financeiro

Link de acesso ➔ https://projeto-digimon-gustavo-totti.netlify.app

Tecnologias usadas: 
<p align="left">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase" />
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
</p>

## Desenvolvimento

📌 Primeiramente, um arquivo inicial JSON foi disponibilizado a partir da API: https://digimon-api.vercel.app/

📌 O conteúdo deste arquivo contendo os dados dos Digimons foi copiado e colocado em um novo arquivo data.json

📌 Um banco de dados foi criado no Firebase utilizando o Firestore Database

📌 A partir do arquivo .json, o banco foi populado de forma automática utilizando um programa chamado Firefoo

📌 A API para consumir este banco foi construída em um arquivo api.js utilizando JavaScript puro 

📌 As credenciais do banco, bem como os métodos de acesso aos dados, estão contidos neste arquivo api.js

📌 A estilização da página foi feita com HTML + CSS 

📌 Por fim, o deploy do projeto foi realizado utilizando a ferramenta de hospedagem gratuita e online chamada Netlify

🌐 databaseURL ➔ https://projeto-digimon-default-rtdb.firebaseio.com

💻 Desenvolvedor: Gustavo Totti Custódio dos Santos

## Como funciona

1) O user digita o nome de um Digimon no campo de busca e clica em consultar
2) Se o Digimon digitado estiver no banco, sua imagem é exibida, bem como seu level e a quantidade total de outros Digimons do banco com o mesmo level
3) Se o Digimon digitado não estiver no banco, uma mensagem de erro é exibida 



