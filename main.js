function addnames(){
    variables1=document.getElementById("nameone").value;
    variables2=document.getElementById("nametwo").value;
    localStorage.setItem("keypair1", variables1);
    localStorage.setItem("keypair2", variables2);
    window.location="gamepage2.html";
}