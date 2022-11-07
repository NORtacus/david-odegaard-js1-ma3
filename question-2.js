const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b701b727e5a544419c0f3c40a7c3132f";

const resultContainer = document.querySelector(".gameList");

function createHTML(results) {
    const games = results.all;

    gameListContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            gameListContainer.innerHTML += `<div class="result">${games[i].text}</div>`;
        }
}


async function getGames() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const facts = data.all;

        createHTML(facts);

    } catch (error) {
        gameListContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

getGames();

//displayErro.js//
function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}
