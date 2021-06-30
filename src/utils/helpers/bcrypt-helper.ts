import bcrypt from "bcrypt";
const BCRYPT_HASH_ROUND = process.env.BCRYPT_HASH_ROUND || 8;
export const hashPassword = async (password:string)=>{
   return await bcrypt.hash(password, BCRYPT_HASH_ROUND);
}