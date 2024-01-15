const Profile = require('../models/profile'); 
const User = require('../models/user');
const database = require('../config/database');

//when user clicks star button, the favorite property of 
//that object is set to 'true', a copy of that product object
//is then appended to the favoriteProducts array
//this copy should have a storepage link that links to its /:id page 
//on the website

if(propduct.favorite === true){
    addproduct()
}else if(product.favorite === false){
    deleteProduct()
}else{
    console.log("value returned is neither true nor false, check database")
}

async function addproduct(){
    const products = await database.getData();
    const productId = products._id;
    const product.favorite = false;

    Profile.favoriteProducts.push("new product");
}

async function deleteProduct(){

    const productId = Profile.favoriteProducts.indexOf("_Id(num)");
    Profile.favoriteProducts.splice();
}


