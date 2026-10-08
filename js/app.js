const wrapper = document.querySelector('#wrapper');

const nameInput=document.getElementById("name");
const itemInput=document.getElementById("item");
const thanksBox=document.getElementById("thanks")
const quantityInput=document.getElementById("quantity")
const submitButton=document.getElementById("submit")

submitButton.addEventListener("click", function(){
      const customerName=nameInput.value;
      const price=itemInput.value;
      const quantity=quantityInput.value;

      const totalPrice=price*quantity;
})