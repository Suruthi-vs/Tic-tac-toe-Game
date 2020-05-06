function game(){
    document.turn="x";
    document.a=null;
    document.count=0;
  
  }
  function text(square){
  if (document.a!=null){
     player(document.turn+ "  is Winner!, restart the game :)")
  }
  else if (square.innerText==''){
  square.innerText=document.turn;
  change();
  }
  else{
     alert("select other box please")
  }
  }
  
  function change(){
  document.count++;
  if(winner(document.turn))
  {
       player("congrats  " +document.turn+ "  won the game")
  }
  
       else if(document.count==9){
             player("DRAW")
  
       }
       else if (document.turn=="x"){
          document.turn="o";
          player("It's "+document.turn+" 's turn")
    }
    else{
       document.turn="x";
       player("It's "+document.turn+" 's turn")
    }
  
  
    }
  
  function player(message)
  {
        var b=document.getElementById("turn");
        b.innerText=message;
  }
  
  function winner(a){
  var result=false;
  if (row(1,2,3,a)||
       row(4,5,6,a)||
       row(7,8,9,a)||
       row(1,4,7,a)||
       row(2,5,8,a)||
       row(3,6,9,a)||
       row(1,5,9,a)||
       row(3,5,7,a)
  ){
     result=true;
     document.a=1;
  
  }
       return result;
  }
  
  
  function row(a,b,c,move){
    var rowCheck=false;
    if (data(a)==move && data(b)==move && data(c)==move)
        rowCheck=true
    return rowCheck
  }
  
  function data(a){
   return document.getElementById("s"+a).innerText;
  
  }
  
  
  function restart(){
    var i;
    for(i=1;i<10;i++){
         document.getElementById("s"+i).innerText='';
    }
    document.a=null;
    document.count=0;
    player("The game starts with X")
  
  }