// Clé API OpenAI
const apiKey = 'API_KEY';

// Question 1
function sendMessage() {
    var userResponse = document.getElementById('userResponse');
    var chatGPTResponse = document.getElementById('chatGPTResponse');

    if (!userResponse.value) {
        // Handle empty user response
        userResponse.style.border = '1px solid red';
        return;
    }

    userResponse.style.border = 'none';
    // Call ChatGPT API
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },  
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Corrige cette question sur la définiton de l'apprentissage supervisé. Si la réponse n'est pas centrée sur le sujet de l'apprentissage supervisé, affiche le message 'Cette réponse est incorrecte'. Sinon, attribue une note sur 5. La réponse attendue est : " + "'" +userResponse.value+"'",
            max_tokens: 2048,
            temperature: 0.5
        })
    })
        .then((response) => response.json())
        .then((response) => {
            // Get ChatGPT response
            let chatGPTResponseText = response.choices[0]['text'];

            // Display ChatGPT response
            chatGPTResponse.innerText = chatGPTResponseText;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
            chatGPTResponse.innerText = 'Error, please try again later.';
        })
}
// Question 2
function sendMessage2() {
    var userResponse2 = document.getElementById('userResponse2');
    var chatGPTResponse2 = document.getElementById('chatGPTResponse2');

    if (!userResponse2.value) {
        // Handle empty user response
        userResponse2.style.border = '1px solid red';
        return;
    }

    userResponse2.style.border = 'none';
    // Call ChatGPT API
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Corrige cette question sur le fonctionnement de l'ensemble d'entraînement. Si la réponse ne concerne pas le sujet de l'ensemble d'entraînement en apprentissage supervisé, affiche le message 'Cette réponse est incorrecte'. Sinon, attribue une note sur 5. La réponse attendue est :" + "'" +userResponse2.value+"'",
            max_tokens: 2048,
            temperature: 0.5
        })
    })
        .then((response) => response.json())
        .then((response) => {
            // Get ChatGPT response
            let chatGPTResponse2Text = response.choices[0]['text'];

            // Display ChatGPT response
            chatGPTResponse2.innerText = chatGPTResponse2Text;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
            chatGPTResponse2.innerText = 'Error, please try again later.';
        })
}

// Question 3
function sendMessage3() {
    var userResponse3 = document.getElementById('userResponse3');
    var chatGPTResponse3 = document.getElementById('chatGPTResponse3');

    if (!userResponse3.value) {
        // Handle empty user response
        userResponse3.style.border = '1px solid red';
        return;
    }

    userResponse3.style.border = 'none';
    // Call ChatGPT API
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Corrige cette question sur un exemple d'algorithme supervisé. Si la réponse ne propose pas un exemple d'algorithme en apprentissage supervisé, affiche le message 'Cette réponse est incorrecte'. Sinon, attribue une note sur 5. La réponse attendue est : " + "'" +userResponse3.value+"'",
            max_tokens: 2048,
            temperature: 0.5
        })
    })
        .then((response) => response.json())
        .then((response) => {
            // Get ChatGPT response
            let chatGPTResponse3Text = response.choices[0]['text'];

            // Display ChatGPT response
            chatGPTResponse3.innerText = chatGPTResponse3Text;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
            chatGPTResponse3.innerText = 'Error, please try again later.';
        })
}
// Q4
function sendMessage4() {
    var userResponse4 = document.getElementById('userResponse4');
    var chatGPTResponse4 = document.getElementById('chatGPTResponse4');

    if (!userResponse4.value) {
        // Handle empty user response
        userResponse4.style.border = '1px solid red';
        return;
    }

    userResponse4.style.border = 'none';
    // Call ChatGPT API
    fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "Corrige cette question sur la définiton d'étiquette en apprentissage supervisé. Si la réponse ne traite pas du rôle des étiquettes dans le contexte du ML supervisé, affiche le message 'Cette réponse est incorrecte'. Sinon, attribue une note sur 5. La réponse attendue est : " + "'" +userResponse4.value+"'",
            max_tokens: 2048,
            temperature: 0.5
        })
    })
        .then((response) => response.json())
        .then((response) => {
            // Get ChatGPT response
            let chatGPTResponse4Text = response.choices[0]['text'];

            // Display ChatGPT response
            chatGPTResponse4.innerText = chatGPTResponse4Text;
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
            chatGPTResponse4.innerText = 'Error, please try again later.';
        })
}