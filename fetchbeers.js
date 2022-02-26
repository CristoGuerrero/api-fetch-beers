const url = 'https://api.punkapi.com/v2/beers'

fetch('https://api.punkapi.com/v2/beers/')
.then(response => response.json())
.then (beers => {

    const element = document.getElementById('beer');

    beers.forEach(beer => {
     
        console.log(beer)
    
        element.innerHTML = `
            ${beer.name}
            ${beer.tagline}
            ${beer.abv}
            ${beer.description}
            <img src = '${beer.image_url}'>
        `;

    });

   


    console.log(beer)
})
.catch (err=>console.log(err))




