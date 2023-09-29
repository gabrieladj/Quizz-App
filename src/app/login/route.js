import { Router, request } from "express";

export async function handler(req,res){

    

    if(req.method !== POST){
        res.status(405).send({message:'ONly Post request'})
        return
    }

    let data =  await req.formData();
    let login = Object.assign({},{
        username : data.get('username'),
        password: data.get("password")
    });
    console.log(login.username);
    console.log(login.password)
}