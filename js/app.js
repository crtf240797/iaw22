import {Game} from './game.js'

let juegoFifa22 = new Game (1, "Fifa22","Ea Sports", "17/02/2022");
let fornite = new Game (2,"Fornite", "Epic Games", "19/02/2016");
let granTurismo = new Game (3,"GranTurism Sport","Sony","24/04/2018");

//console.log(juegoFifa22.render());
//console.log(fornite.render());
//console.log(granTurismo.render());

let gameList = [juegoFifa22,fornite,granTurismo];

populateGames();
gameList.forEach(e =>{
    
    e.lanzamiento = "20/09/2021";
});

//console.log(juegoFifa22.render());
//console.log(fornite.render());
//console.log(granTurismo.render());


const button = document.querySelector('#add-game');

button.addEventListener("click", () => {
    let game = new Game(
        
        document.querySelector('#id-game').value,
        document.querySelector('#nombre-game').value,
        document.querySelector('#desenvolupador-game').value,
        document.querySelector('#lanzamiento-game').value,
        
    );
    gameList.push(game);
    populateGames();
});

function populateGames(){
    const listTag = document.querySelector("#list table tbody");
    listTag.innerHTML= "";

    gameList.forEach(e =>{

        listTag.innerHTML+= 
       
        `

    <tr>
      <th scope="row">${e.id}</th>
      <td>${e.nombre}</td>
      <td>${e.desenvolupador}</td>
      <td>${e.lanzamiento}</td>
    </tr>
  

  
  
 








          
          `;
        


    });

};








