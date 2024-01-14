const mongoose = require('mongoose'); 
const {MongoClient} = require("mongodb");

const connectionString = process.env.DATABASE_URL;

const client = new MongoClient(connectionString);

mongoose.connect(connectionString);

const db = mongoose.connection
db.on('connected', function(){
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})

const dataBase = client.db("product-compare");
const coll = dataBase.collection("products");


// async function sendData(){
//     const url1 = 'https://fakestoreapi.com/products';
//     const url2 = 'https://fakestoreapi.com/products';
//     try{
       
//         await client.connect();
//         const dataBase = client.db("product-compare");
//         const coll = dataBase.collection("products");

//         const fakeStoreData = await fetch(url1);
//         const fakeProducts = await fakeStoreData.json();

//         const dummyData = await fetch(url2);
//         const dumProducts = await dummyData.json();

//         if(coll){
//             const resultF = await coll.insertMany(fakeProducts);
//             const resultD = await coll.insertMany(dumProducts);
                
//             console.log(resultF.insertedIds, resultD.insertedIds);
//         }else{
//             console.log('data alreayd exists, none will be sent from api')
//         }

//     }catch(err){
//         console.log(err);
//     }finally{
//         await client.close();
//     }

// }
// sendData();

async function sendFData(){
    const url = 'https://fakestoreapi.com/products'
    try{
        await client.connect();
        const fakeStoreData = await fetch(url);
        const fakeProducts = await fakeStoreData.json();
        // console.log("FakeStore API Data:", fakeProducts);
        db.collection.count(function (err, count){
            if(!err && count === 0){
                const resultF = coll.insertMany(fakeProducts);
                console.log(resultF.insertedIds);
            }else{
                console.log('data alreayd exists, none will be sent from api')
            }
        });

    }catch(err){
        console.log(err)
    }finally{
        await client.close();
    }
}

async function sendDData(){
    const url = 'https://dummyjson.com/products'
    try{
        await client.connect();
        const dummyData = await fetch(url);
        const dummyProducts = await dummyData.json();
        // console.log("DummyJSON API Data:", dummyProducts);
        db.collection.count( function (err, count){
            if(!err && count === 0){
                const resultD = coll.insertMany(dummyProducts);
                console.log(resultD.insertedIds);
            }else{
                console.log('data alreayd exists, none will be sent from api');
            }
        });
        
    }catch(err){
        console.logl(err)
    }finally{
        await client.close();
    }
}
  
sendFData();
sendDData();