function Dropdown(element){
    console.log(element)
    this.element = document.querySelector(element);
    this.element.onclick= ()=>{
        this.toggle();
    } 
}
Dropdown.prototype.toggle= function(){
    this.element.classList.toggle("is-active")
}


let dropdown1= new Dropdown(".js_dropdown1") 