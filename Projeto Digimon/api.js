//Credenciais do Firestore
const firebaseConfig = {
    apiKey: "AIzaSyA8Qq4YcuI70Gp6YwG-Klz-LRbml7enhpo",
    authDomain: "projeto-digimon.firebaseapp.com",
    projectId: "projeto-digimon",
    storageBucket: "projeto-digimon.appspot.com",
    messagingSenderId: "304070364454",
    appId: "1:304070364454:web:737e25c36eda4f8c8905e7"
};

//Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Capturas
const imgDigi = document.querySelector('#img-digi'); //Captura a propriedade da imagem do objeto digimon
const resultado = document.getElementById('resultado'); //Captura o elemento HTML onde o resultado será exibido

//Função assíncrona que será chamada quando o usuário clicar no botão de consulta
async function consultarDigimon() {
    const digimonNome = document.getElementById("digimonNome").value.toLowerCase(); //Pega o nome do Digimon digitado pelo usuário no campo de input e também o converte para minúsculas

    try {
        //Consulta a coleção 'digimons' no Firestore
        const querySnapshot = await db.collection("digimons").get(); //Consulta a coleção 'digimons' no Firestore e armazena os documentos retornados
        let found = false; //Flag para verificar se o digimon foi encontrado
        let digimonData; //Variável para armazenar os dados do digimon encontrado

        //Procura sobre cada documento do banco retornado na consulta
        querySnapshot.forEach((doc) => {
            const data = doc.data(); //Obtém os dados do digimon do documento
            const nome = data.name.toLowerCase(); //Converte o nome do digimon para minúsculas
            //Compara o nome do digimon com o que foi digitado
            if (nome === digimonNome) {
                found = true; //Marca como encontrado
                digimonData = data; //Armazena os dados do digimon encontrado
                resultado.innerHTML = `Digimon encontrado: ${data.name}<br>O level dele é: ${data.level}`; //Atualiza o conteúdo do elemento resultado com informações do digimon
                imgDigi.src = data.img; //Atualiza a fonte da imagem do digimon
            }
        });

        //Se nenhum digimon foi encontrado, exibe uma imagem e mensagem de erro
        if (!found) {
            resultado.textContent = "Digimon não encontrado!";
            imgDigi.src = "./img/images2.png";
        } else {
            //Consulta para contar quantos Digimons têm o mesmo nível
            const levelQuerySnapshot = await db.collection("digimons").where("level", "==", digimonData.level).get(); //Consulta a coleção, filtrando pelo mesmo nível do digimon encontrado, e armazena na variável
            const count = levelQuerySnapshot.size; //Número de Digimons com o mesmo level
            resultado.innerHTML += `<br>Total de Digimons com o mesmo level: ${count}`;
        }
    } catch (error) {
        //Em caso de erro durante a consulta, atualiza o elemento resultado com uma mensagem de erro
        resultado.textContent = "Erro ao consultar o banco de dados.";
    }
}

//Adiciona evento ao clicar no botão de consulta
document.getElementById("consultaButton").addEventListener("click", consultarDigimon);
