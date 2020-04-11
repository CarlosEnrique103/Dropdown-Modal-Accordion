
function Accordion(element){
    this.element= document.querySelector(element);
    this.element.addEventListener('click', ()=>{
        this.open();
    })
}

Accordion.prototype.open = function(){
    this.element.nextElementSibling.classList.toggle('is-active');
        this.element.classList.toggle('is-active')
} 

let accordion1= new Accordion('.open_1');
let accordion2= new Accordion('.open_2');
let accordion3= new Accordion('.open_3');
