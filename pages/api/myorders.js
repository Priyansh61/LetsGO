import Order from "@/schema/Order";
import connectDb from "@/middleware/mongoose";
import jsonwebtoken from 'jsonwebtoken';

const handler = async (req,res)=>{
    try{const token = req.body.token;
    const data = jsonwebtoken.verify(token,process.env.NEXT_PUBLIC_JSONWEBTOKEN);
    
    let order = await Order.find({email:data.email})
    

    res.status(200).json({success: true ,order})}catch(err){res.status(200).json({success: false, error: err.message})}
  }
export default connectDb(handler)
