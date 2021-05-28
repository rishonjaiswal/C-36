class Game{
    constructor(){}

    //read the values of game State from DB
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    //update the game state into DB
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            form=new Form();
            form.display();
            player=new Player();
            player.getCount();

        }
    }
}