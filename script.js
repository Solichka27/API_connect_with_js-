const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.webp';

const container = document.createElement('div')
container.setAttribute('class', 'container');

app.appendChild(logo)
app.appendChild(container);

let request = new XMLHttpRequest();

request.open('GET', 'https://ghibli.rest/films', true);
request.onload = function() {
    let data = JSON.parse(this.response);

    if(request.status>= 200 && request.status < 300) {
        data.forEach((movie) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        })
    }else{
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It`s not working";
        app.appendChild(errorMessage);
    }
}


request.send();
