const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const {bCard}=require('./db')
const {createCard}=require('./types')
const PORT=3000
dotenv.config({path:'./config.env'})
const app=express()
app.use(express.json())
app.post('/bCard',async(req,res)=>{
  console.log("hiiii")
  const createpayload=req.body;
  const parsedpayload=createCard.safeParse(createpayload)
  console.log(parsedpayload)
  if(!parsedpayload.success){
    console.log(parsedpayload.error.errors)
    return res.status(400).json({
      message:"Improper data entry"
    })
  }
  const Card=await bCard.create(parsedpayload.data);
  res.status(200).json({
    status:'success',
    data:{
      Card
    }
    
  })  
  
})

app.get('/bCards',async(req,res)=>{
  const bCards=await bCard.find();
  res.status(201).json({
    status:'success',
    data:{
      bCards
    }
  
  })
})
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(()=>{
  console.log('DB connection successful')
})

app.listen(PORT,()=>{
  console.log(`App running on port ${PORT}`)
})