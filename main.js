const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokesBtn');

getJoke()

// function getJoke(){
//     const config = {
//         headers:{

//         'Accept': 'application/json'

//     }
// }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// }

async function getJoke(){
    const config = {
        headers:{

        'Accept': 'application/json'

    }
}

    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()
    jokeEl.innerHTML = data.joke
}

btn.addEventListener('click', getJoke)