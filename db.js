let mysql=require("mysql2");
    let dotenv=require("dotenv");
        dotenv.config();
let conn=mysql.createConnection({
    host:process.env.DB_host,
    user:process.env.DB_user,
    password:process.env.DB_pass,
    database:process.env.DB_database

})

conn.connect((err)=>{
    if(err)
    {
        console.log("database is not connected....");
    }else{
        console.log("database is connected....");
    }
})

module.exports=conn;