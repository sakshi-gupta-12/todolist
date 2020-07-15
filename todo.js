let a= document.getElementById('btnadd');
let b=document.getElementById("txt");
let c=0;


a.addEventListener("click",function(e){
	c = c+1;

let j=document.createElement('li');
j.innerHTML=`<i class='fas fa-trash'  id = '${c}'></i> ${b.value}`;

ul.appendChild(j);

 let r = document.getElementById(c);
 r.addEventListener("click", (e)=>{
	r.parentElement.remove();


});





});

//<i ></i>