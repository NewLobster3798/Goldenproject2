class  island {
constructor(x,y){
  
  var option = {
      isStatic:true
  }
  this.body = Bodies.rectangle(x,y,30,30,option)
  World.add(world,this.body)
   this.image=loadImage("island.jpg");


}
display(){
    imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y,100,100)
}
}