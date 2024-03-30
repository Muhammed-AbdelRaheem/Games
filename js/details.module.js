import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {
        this.loading=document.querySelector('.loading')
        document.getElementById('btnClose').addEventListener('click', () => {
            document.getElementById('details').classList.add('d-none')
            document.getElementById('games').classList.remove('d-none')
                })

                this.getDetails(id )
            }
            


    async getDetails(id ) {
        this.loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cc39e5c6bemsh10d947125390953p162a5bjsn846f53bda747',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response=await data.json();
        this.loading.classList.add('d-none')

    // console.log(response);
    const ui =new Ui()
    ui.displayDetails(response)
    }
};

