fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
        .then(resp => {
            return resp.json()
        })
        .then(all => {
            console.log(all[45].images.md)
            const bane = all[45]
            console.log(bane)
            const randomHero = all[Math.round(Math.random()*all.length)]
            console.log(randomHero)
            console.log(randomHero.images.md)
            const baneImage = all[45].images.md
            console.log(baneImage)
        
            const imageBane = document.getElementById('display')
            imageBane.setAttribute("src",all[45].images.md)
            console.log(all[45].images.md)
            
        })

        

            //afficher les images

            // for (let hero of all) {
            //     console.log(hero.images.md)
            // }
        

        // fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/70.json')
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(batman => {
        //  console.log(batman)
        //  }),

        //  fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/450.json')
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(michaelangelo => {
        //  console.log(michaelangelo)
        //  }),

        //   fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/152.json')
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(captaincold => {
        //  console.log(captaincold)
        //  })
        //  fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/499.json')
        // .then(resp => {
        //     return resp.json() 
        //     console.log(499-offspring.images.md)
        // })
        // .then (offspring => {
        //     console.log(offspring)
        // })
        
