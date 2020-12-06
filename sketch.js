var jake,tree

function setup() {
  createCanvas(800,400);
  jake=createSprite(200,300,50,50)
  jake.shapeColor="white"
  jake.debug=true
  tree=createSprite(300,200,50,50)
  tree.shapeColor="brown"
  tree.debug=true 
}

function draw() {
  background(88);  
  jake.x=mouseX
  jake.y=mouseY
  
  //distance between jake and tree
  console.log(tree.x-jake.x)
  console.log(jake.width/2 + tree.width/2 )
  
  //algorithm to detect two sprite touching or overlapping eachother
  if(tree.x-jake.x < jake.width/2 + tree.width/2 
    && jake.x-tree.x < jake.width/2 + tree.width/2 
    && tree.y-jake.y< jake.height/2 + tree.height/2 
    && jake.y-tree.y < jake.height/2 + tree.height/2  ) {
    tree.shapeColor="pink"
    jake.shapeColor="pink"
  }
  else{
    tree.shapeColor="white"
    jake.shapeColor="white"
  }

  drawSprites();
}