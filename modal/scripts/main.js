
function Modal(element, callbackAccept, callbackCancel){
    this.element = document.querySelector(element);
    this.elementClose = this.element.querySelector('.js_close');
    this.elementAccept = this.element.querySelector('.js_accept');
    this.elementCancel = this.element.querySelector('.js_cancel');
    this.addEvents(callbackAccept,callbackCancel);
}

Modal.prototype.open = function(){
    this.element.classList.add('is-active')
}

Modal.prototype.close = function(){
    this.element.classList.remove('is-active');
}
Modal.prototype.addEvents= function(callbackAccept,callbackCancel){
    this.elementClose.onclick= ()=>{
        this.close();
    }
    this.elementAccept.onclick= ()=>{
       this.close();
       callbackAccept();
   }
   this.elementCancel.onclick= ()=>{
       this.close();
       callbackCancel();
   }


}


let modal1 = new Modal('.js_modal1',function(){
    console.log('Aceptar!!');
},function () {
    console.log('Cancelar!!')
});

document.querySelector('.openModal').addEventListener('click', function(){
   modal1.open();
})

