class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton("Reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }



  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

     this.reset.position(displayWidth-100,displayHeight/8,)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
         this.reset.mousePressed(()=>{
           game.update(0)
            Player.updateCarsAtEnd(0)
           player.updateCount(0)
           database.ref("players").remove()
           
         })
  }

  DisplayRank(){
   background(endImg)
   this.title.html("Car Racing game")
   this.title.position(displayWidth/2 - 50,displayHeight/2)
   var message = createElement("h1")
   message.html("Congratulations "+player.name+"!Your rank is:"+player.rank)
   message.position(250,displayHeight/2 -80)
  }

}

 
