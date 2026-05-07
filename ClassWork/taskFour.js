const product  = {
    price: 1200,
    inStock: true,

}

if(product.inStock == false){
    console.log("Out of stock");
}
else if(product.price > 100){
console.log("Expensive");
}

else{
console.log("Affordable");
}
