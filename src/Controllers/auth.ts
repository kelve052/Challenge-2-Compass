import { Request, Response } from "express"
import jwt from "jsonwebtoken"

const auth = (req: Request, res: Response)=>{
  const {email, password} = req.body
  const token = jwt.sign({email, password}, process.env.JWT_SECRET!, {expiresIn: "30d"})
  res.send(token)
}

export default {auth}