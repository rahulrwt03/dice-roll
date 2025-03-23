function diceRoll(){
    var player1Random = Math.floor(Math.random() * 6)+1;
    var player2Random = Math.floor(Math.random() * 6)+1;

    document.querySelector(".player1 p").innerText = player1Random.toString();
    document.querySelector(".player2 p").innerText = player2Random.toString();

    if(player1Random === player2Random){
        alert("Match Draw");
        document.querySelector("h1").innerText = "Match Draw ❌";
        
    }else if(player1Random < player2Random){
        // alert("Player 2 win");
        document.querySelector("h1").innerText = " Player 2 win 🚩";
        document.querySelector(".player2 h2").innerText = "Player 2 😎";
        document.querySelector(".player1 h2").innerText = "😭 Player 1 ";

    }else{
        // alert("Player 1 win");
        document.querySelector("h1").innerText = "🚩 Player 1 win ";
        document.querySelector(".player2 h2").innerText = "Player 2 😭";
        document.querySelector(".player1 h2").innerText = "😎 Player 1 ";
    }

    // alert(player1Random);
    // alert(player2Random);

    
}
