const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL).then(()=>{
    console.log("________MongoDb Atlas Connected Successfully________");
}).catch((err)=>{
console.log(`______MongoDb Not Connected Due To Reason : ${err}________`);
})