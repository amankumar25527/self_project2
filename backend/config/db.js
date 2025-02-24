import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect(`${process.env.MONGODB_URI}`,{
        dbName:"self-project"
    }).then(()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log(`some error occured with connecting to database  ${err}`)
    })
};