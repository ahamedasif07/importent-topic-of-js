const addLocalStorage =()=>{
   const productName = document.getElementById('product-name')
   const product = productName.value;
   productName.value=''
//    console.log(product)
   const productQuantity = document.getElementById('product-quantity')
   const quantity = productQuantity.value;
   productQuantity.value=''
//    console.log(quantity)
   displayProduct(product,quantity)
   saveProductLocalStorage(product,quantity)
   
}

const displayProduct = (product,quantity) =>{
const prodactContainer = document.getElementById("prodact-container")
const li = document.createElement('li')
li.innerText=`
${product} : ${quantity}

`
prodactContainer.appendChild(li)

}


const getLocalStoredShoppingCart = () => {
   let cart = {};
   const storedCart = localStorage.getItem('cart');
   if (storedCart) {
       cart = JSON.parse(storedCart);
   }
   return cart;
}




const saveProductLocalStorage = (prodact,quantity) =>{

   const cart = getLocalStoredShoppingCart()
   cart[prodact]=quantity;
   const cardStingyfy = JSON.stringify(cart)
   localStorage.setItem('cart',cardStingyfy)

}


