let conn=require("../../db.js");

exports.savecate=((name)=>{
    return new Promise((resolve,reject)=>{
        conn.query("insert into category values('0',?)",[name],(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
})

exports.displaycate=(()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from category",(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
})