const mongoose = require('mongoose'); 
const {MongoClient} = require("mongodb");

const connectionString = process.env.DATABASE_URL;

const client = new MongoClient(connectionString);

mongoose.connect(connectionString);

const db = mongoose.connection
db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})

async function sendData(){
    const url1 = 'https://fakestoreapi.com/products';
    const url2 = 'https://dummyjson.com/products';

    try{
        const dataBase = client.db("product-compare");
        const coll = dataBase.collection("products");
        const options = {ordered: true}

        await client.connect();
        const fakeStoreData = await fetch(url1);
        const fakeProducts = await fakeStoreData.json();

        const dummyData = await fetch(url2);
        const dummyProducts = await dummyData.json();
        // console.log("FakeStore API Data:", fakeProducts);

        const result = await coll.find({}).toArray();
        result.length;
        
        if(result.length === 0){
            const resultF = await coll.insertMany(fakeProducts, options);
            console.log(resultF.insertedIds, "FakeStore data uploaded to database");

            const resultD = await coll.insertMany(dummyProducts.products, options);
            console.log(resultD.insertedIds, "Dummy data uploaded to database");
        }else{
            console.log('data alreayd exists, none will be sent from api');
        }

    }catch(err){
        console.log(err)
    }finally{
        await client.close();
    }
}
  
sendData();

