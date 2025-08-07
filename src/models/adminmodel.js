let conn=require("../../db.js");

//category
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

//product
exports.getcategory=(()=>{
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

exports.saveproduct=((...saveprod)=>{
    return new Promise((resolve,reject)=>{
        conn.query("insert into product values('0',?,?)",[...saveprod],(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
})

exports.viewprod=(()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select p.pid,p.pname,c.name from product p join category c on p.cid=c.cid",(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
})

exports.getupcateprod=(()=>{
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

exports.getproduct=((pid)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from product where pid=?",[pid],(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
})

exports.finalupdateproduct=((...saveupdateproduct)=>{
    return new Promise((resolve,reject)=>{
        conn.query("update product set pname=?,cid=? where pid=?",[...saveupdateproduct],(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
})

exports.deleteproduct=((pid)=>{
    return new Promise((resolve,reject)=>{
        conn.query("delete from product where pid=?",[pid],(err,result)=>{
            if(err)
            {
                reject(err)
            }else{
                resolve(result);
            }
        })
    })
})

exports.searchpro=((name)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from product p join category c on p.cid=c.cid where p.pname like ?",`%${name}%`,(err,result)=>{
            if(err)
            {
                reject(err);
            }else{
                resolve(result)
            }
        })
    })
})