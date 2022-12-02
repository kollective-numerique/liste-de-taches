//les fonctions doivent avoir des noms qui parlent (vclose : il ne dit pas suffisament le rôle de la fonction)
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
      
        // cette façon de faire appel aux events est actuellement de plus en plus dépracié 
        // https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/Events (je te conseil de lire cet article)
        fermer[i].onclick = function (){
            let pa=this.parentElement;
            let id = pa.dataset.id; //recupère le id de unique de l'elt (attribué lors de sa création)
            pa.style.display = "none";
            window.localStorage.removeItem(id);
        }          
    }
}
let nTache=window.localStorage.getItem("nTache")

/* if (nTache){

}else{
    window.localStorage.setItem("nTache",0);
} */
if (!nTache) window.localStorage.setItem("nTache",0); // c'est plus court je trouve
vclose();

let listens=document.getElementById("uls");
let k=0;

for (let i=0; i< Number.parseInt(nTache); i++){
    k=k+1;
    let Liss=document.createElement("li");
    Liss.setAttribute('data-id',k);
    let objts=window.localStorage.getItem(k);
    let objt=JSON.parse(objts);
    let tach=document.createTextNode('le '+objt.da+' :'+objt.ta)
    Liss.appendChild(tach);
    listens.appendChild(Liss);
    
    vclose();
    
}
//alert(objt);


var liste = document.querySelector('ul');

liste.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


function newelement(){
    let kache=Number.parseInt(window.localStorage.getItem("nTache"),10);
    kache=kache+1;
    let Lis=document.createElement("li");
    
    Lis.setAttribute('data-id',kache); //atribue un identifiant unique à l'élèment crée dans le dom

    let tache=document.getElementById("tache").value;
    let date=document.getElementById('date').value;
    let taches=document.createTextNode('le '+date+' :'+tache)
    let listen=document.getElementById("uls");
  
  // pour mettre en place un controle lors de la saisi le meilleur moyen est de passer par un event
  if (tache===''){
    alert('saisissez une tache');
  } else{
     // pourquoi mettre un else si tu ne comptes rien mettre à l'intérieur
  }
  Lis.appendChild(taches);
  listen.appendChild(Lis);
  let talk={
      da:date,
      ta:tache
 }
 
 window.localStorage.setItem(kache,JSON.stringify(talk));
 window.localStorage.setItem("nTache",kache);
 vclose(); 
}
