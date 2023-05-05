document.getElementById("identite").addEventListener("click", function(){
    document.getElementById("q1").style.display = "block";
    document.getElementById("q2").style.display = "block";
  });
document.getElementById("identite").addEventListener("dblclick", function(){
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "none";
  });

document.getElementById("work").addEventListener("click", function(){
    document.getElementById("q3").style.display = "block";
    document.getElementById("q4").style.display = "block";
  });
document.getElementById("work").addEventListener("dblclick", function(){
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
  });