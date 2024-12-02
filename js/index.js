const products = [
    {id:1,
        productName: "Basket",
        price:100,
        desc : "A pair of basket",
        totalNumber:0,
        isFavourite:false,
        imageUrl:"assets/baskets.png",
    }
,
    { id:2,
        productName: "socks",
        price:20,
        desc : "A pair of socks",
        totalNumber:0,
        isFavourite:true,
        imageUrl:"assets/socks.png",

    }
,
    { id:3,
        productName: "bag",
        price:50,
        desc : "A pair of bag",
        totalNumber:0,
        isFavourite:false,
        imageUrl:"assets/bag.png",

    },
];


const productsDiv = document.querySelector(".list-products");
const total = document.querySelector(".total");

// render products to the DOM

function renderProducts(){
   // total price of all products in the cart
let totalprice = 0;
productsDiv.innerHTML=""
    for(let product of products) {"
        // calulate total number of price for all products in the cart
        totalprice+= product.price * product.totalNumber;
        const cardBodydiv = document.createElement("div");
        cardBodydiv.classList.add("card-body");
    
        cardBodydiv.innerHTML = `<div class="card" style="width: 18rem">
                  <img
                    src= ${product.imageUrl}
                    class="card-img-top"
                    alt="baskets"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">${product.desc}</p>
                    <h4 class="unit-price"> ${product.price} </h4>
                    <div>
                      <i class="fas fa-plus-circle" value= ${product.id}></i>
                      <span class="quantity"> ${product.totalNumber} </span>
                      <i class="fas fa-minus-circle" value = ${product.id}></i>
                    </div>
                    <div>
                      <i class=fas fa-trash-alt" value= ${product.id}></i>
                       ${product.isFavourite ? `<i class="fas fa-heart favorite" value=${product.id}></i>` : `<i class="fas fa-heart" value = ${product.id}></i>`}
                    </div>
                  </div>
                </div>`;
    
            productsDiv.appendChild(cardBodydiv);
    }

    // show total price on the DOM
    total.textContent = `${totalprice}$`;
   
    const plusIcons = document.getElementsByClassName("fas fa-plus-circle");
    const minusIcons = document.getElementsByClassName("fas fa-minus-circle");
    const heartIcons = document.getElementsByClassName("fas fa-heart")
    const deleteIcons = document.getElementsByClassName("class=fas fa-trash-alt")
// 
    for (let plusIcon of plusIcons) {
        plusIcon.addEventListener("click", function(event){
            const productId = event.target.getAttribute("value");
            incrementProductQuantity(productId);
        }
    )
    } 

    for (let minusIcon of minusIcons) {
        minusIcon.addEventListener("click", function(event){
            const productId = event.target.getAttribute("value");
            decrementProductQuantity(productId);
        }
    )
    } 

    for (let heartIcon of heartIcons) {
        heartIcon.addEventListener("click", function(event){
            const productId = event.target.getAttribute("value");
            changeProductColor(heartIconId);
        }
    )
    } 

    for (let deleteIcon of deleteIcons) {
        heartIcon.addEventListener("click", function(event){
            const productId = event.target.getAttribute("value");
            changeProductColor(heartIconId);
        }
    )
    } 

}

renderProducts();

// 
function incrementProductQuantity(productId) {
//    
const productIndex = products.findIndex(
    (product)=> product.id === Number(productId)
);

    (products[productIndex].totalNumber += 1);
    return renderProducts()
}


function decrementProductQuantity(productId) {
    //    
    const productIndex = products.findIndex(
        (product)=> product.id === Number(productId)
    );
        if (products[productIndex].totalNumber <= 0){
            return
        }
        (products[productIndex].totalNumber -= 1);
        return renderProducts()
    }


    function changeProductColor(heartIconId) {
        const productIndex = products.findIndex(
            (product)=> product.id === Number(heartIconId)
        );
            if (products[productIndex].totalNumber <= 0){
                return
            }
            (products[productIndex].totalNumber -= 1);
            return renderProducts()
        }
    
    
    
    
    function deleteProduct(deleteIconId) {
        const productIndex = products.findIndex(
            (product)=> product.id === Number(heartIconId)
        );
            if (products[productIndex].totalNumber <= 0){
                return
            }
            (products[productIndex].totalNumber -= 1);
            return renderProducts()
        }
    
    