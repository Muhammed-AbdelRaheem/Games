import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor() {
        this.ui = new Ui()
        this.loading=document.querySelector('.loading')
        this.details=document.querySelector('.details')
        this.games=document.querySelector('.games')
        this.navlink=document.getElementById('navbarSupportedContent')



        document.querySelectorAll('.nav-link').forEach((item) => {
            item.addEventListener('click', () => {
                this.changeLinkActive(item)
                this.navlink.classList.remove('show')
                let customCategory = item.getAttribute('data-category')
                this.getGames(customCategory)

            })
        })


        this.getGames('MMORPG')
    }

    async changeLinkActive(item) {
        document.querySelector('.navbar-nav .active').classList.remove('active');
        item.classList.add('active');
    }

    async getGames(category) {
        this.loading.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cc39e5c6bemsh10d947125390953p162a5bjsn846f53bda747',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
                        };
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await data.json();
        this.loading.classList.add('d-none')
        
        // console.log(response);
        
        this.ui.displayData(response)
        
        document.querySelectorAll('.card').forEach((card)=>{
            card.addEventListener('click', ()=> {
                this.details.classList.remove('d-none')
                this.games.classList.add('d-none')
               let cardID =card.getAttribute('data-id')
                new Details(cardID)
            })
        })

 
        

    }


}