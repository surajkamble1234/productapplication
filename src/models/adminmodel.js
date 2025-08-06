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

exports.deletecategory=((cid)=>{
    return new Promise((resolve,reject)=>{
    conn.query("delete from category where cid=? ",[cid],(err,result)=>{
        if(err)
        {
            console.log(err);
            reject(err);
        }else{
            resolve(result);
        }
    })
    });
})

exports.updatecategory=((cid)=>{
 return new Promise((resolve,reject)=>{
    conn.query("select * from category where cid=?",[cid],(err,result)=>{
        if(err)
        {
            reject(err)
        }else{
            resolve(result);
        }
    })
 })
})

exports.saveupdatecategory=((...savecate)=>{
    return new Promise((resolve,reject)=>{
        conn.query("update category set name=? where cid=?",[...savecate],(err,result)=>{
        if(err)
        {
            reject(err);
        }else{
            resolve(result);
        }
        });
    })
})

exports.searchcategory=((name)=>{
    return new Promise((resolve,reject)=>{
       conn.query("select * from category where name like ?",`%${name}%`,(err,result)=>{
         if(err)
        {
            reject(err);
        }else{
            resolve(result);
        }
       })
    })
})