import * as jwt from "jsonwebtoken";

export const signJwt = (userDetails:any,secretkey:string,expirationTime:number):string=>{ 
    const token:string = jwt.sign({id:userDetails.id,email:userDetails.email},secretkey,{expiresIn:expirationTime});
    return token;
}