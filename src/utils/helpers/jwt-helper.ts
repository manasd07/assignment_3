import jwt from "jsonwebtoken";

export const signJwt = (id:number,secretkey:string,expirationTime:number):string=>{   
    let jwtToken:string;
    jwt.sign({id},secretkey,{expiresIn:expirationTime},(err,token)=>{
        if(err) throw err;
        jwtToken=token;
    });
    return jwtToken;
}