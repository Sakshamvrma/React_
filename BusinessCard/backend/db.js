const mongoose=require('mongoose')

const bCardSchema=new mongoose.Schema({
  name:String,
  description:String,
  instaLink:String,
  TwitterLink:String
})
const bCard=mongoose.model('bCard',bCardSchema)
module.exports={bCard}
