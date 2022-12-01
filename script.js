function vclose(){

    let li=document.getElementsByTagName("LI");
    let list=document.getElementById("list");
    for (let i=0 ; i<li.length; i++){
        let span=document.createElement("SPAN");
        let clos=document.createTextNode("x");
        span.className='close';
        span.appendChild(clos);
        li[i].appendChild(span);
    
    }
    let fermer = document.getElementsByClassName("close");
    for (let i = 0; i < fermer.length; i++) {
        fermer[i].onclick = function (){
            let pa=this.parentElement;
            pa.style.display = "none";
            // window.localStorage.removeItem(u);
        }       
        
        
    }
}
let nTache=window.localStorage.getItem("nTache")
if (nTache){
}else{
    window.localStorage.setItem("nTache",0);
    
}
vclose();
let listens=document.getElementById("uls");
let k=0;
for (let i=0; i< Number.parseInt(nTache); i++){
     k=k+1;
    let Liss=document.createElement("li");
    let objts=window.localStorage.getItem(k);
    let objt=JSON.parse(objts);
    let tach=document.createTextNode('le '+objt.da+' :'+objt.ta)
    Liss.appendChild(tach);
    listens.appendChild(Liss);
    
    vclose();
    
}
alert(objt);


var liste = document.querySelector('ul');
liste.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);
function newelement(){
    let Lis=document.createElement("li");
    let tache=document.getElementById("tache").value;
    let date=document.getElementById('date').value;
    let taches=document.createTextNode('le '+date+' :'+tache)
    let listen=document.getElementById("uls");
  
  if (tache===''){
    alert('saisissez une tache');
  } else{
  
    
 
     
  }
  Lis.appendChild(taches);
  listen.appendChild(Lis);
  let talk={
      da:date,
      ta:tache
 }
 let kache=Number.parseInt(window.localStorage.getItem("nTache"),10);
 kache=kache+1;
 window.localStorage.setItem(kache,JSON.stringify(talk));
 window.localStorage.setItem("nTache",kache);
  
  vclose(); 
   }
