const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b701b727e5a544419c0f3c40a7c3132f";

const resultsContainer = document.querySelector(".results");

function createHTML(results) {
    const games = results.all;

    resultsContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {

            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">${games[i].text}</div>`;
        }
}
