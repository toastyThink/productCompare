import { useState, useEffect } from 'react'
import "./App.css" 


function App() {
  const [fakeData, setFake] = useState([])
  const [dummyData, setDummy] = useState([])

  async function getData(){
    const url = 'https://fakestoreapi.com/products'
    try{
        const fakeStoreData = await fetch(url)
        const products = await fakeStoreData.json()
        console.log("FakeStore API Data:", products)
        return products
    }catch(err){
        console.log(err)
    }
  }
  async function getDummyData(){
    const url = 'https://dummyjson.com/products'
    try{
        const dummyData = await fetch(url)
        const products = await dummyData.json()
        console.log("DummyJSON API Data:", products)
        return products
    }catch(err){
        console.logl(err)
    }
  }
  
getData()
getDummyData()

  return (
    <>
      <h1>
        Hello
      </h1>
     
    </>
  )
}

export default App
