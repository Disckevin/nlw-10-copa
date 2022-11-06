function creatGame(player1, hora, player2){
    return`
        <li>            
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
          <strong>${hora}</strong>                 
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">                            
        </li> 
    `
}

let delay = 0.3;
function creatCard(date, day, games){
  delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">          
      <h2>${date}<span>${day}</span> </h2>                                
      <ul>
        ${games}           
      </ul>                          
    </div>
  `
}

document.querySelector('#cards').innerHTML=
        
  
    creatCard("24/11",
     "quinta", 
     creatGame("switzerland", "07:00", "cameroon") + creatGame("uruguay", "10:00", "korea") + creatGame("portugal", "13:00", "ghana")+creatGame("brazil", "16:00", "serbia")) +
    
     creatCard("28/11", 
    "segunda", 
    creatGame("cameroon", "07:00", "serbia") + creatGame("korea", "10:00", "ghana") + creatGame("brazil", "13:00", "switzerland") + creatGame("portugal", "16:00", "uruguay")) +   
    
    creatCard("02/12", 
    "sexta", 
    creatGame("korea", "12:00", "portugal") + creatGame("ghana", "12:00", "uruguay") + creatGame("serbia", "16:00", "switzerland") + creatGame("brazil", "16:00", "cameroon"))      
  
