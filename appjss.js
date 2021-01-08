function mostrar(){
   
    
    document.getElementById("princ").style.display="block";
    document.getElementById("princ2").style.display="block";
    document.getElementById("inicio").style.background="linear-gradient(to right, rgba(242, 112, 156, 0.6), rgba(255, 148, 114, 0.6)), url('tenor.gif')"; 
    document.getElementById("corazon").style.display="none";
    document.getElementById('player').play();
anim();
certif();
}

function anim(){
    
    document.getElementById('fotop').className="animate__animated animate__pulse animate__infinite infinite imgN";
   
   
}
function certif(){
    
    document.getElementById('certi').className="mt-5 animate__animated animate__swing animate__slow animate__infinite infinite";
   
   
}