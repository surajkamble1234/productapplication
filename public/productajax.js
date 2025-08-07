function ajaxsearch(str)
{
    let xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function()
        {
            if(this.readyState==4 && this.status==200)
            {
                let tblbody=document.getElementById("tblbody");
                tblbody.innerHTML="";
                let responsedata=this.responseText;
                let responseob=JSON.parse(responsedata);
                if(responseob.length>0)
                {    
                    responseob.forEach((item,index)=>{
                   
                      let row=document.createElement("tr");
                       let col=document.createElement("td");
                       col.innerHTML=""+(index+1);
                       row.appendChild(col);
                      
                       col=document.createElement("td");
                       col.innerHTML=""+item.pname;
                       row.appendChild(col);

                       col=document.createElement("td");
                       col.innerHTML=""+item.name;
                       row.appendChild(col);

                       col=document.createElement("td");
                       col.innerHTML=""+`<a href="/updateprod?pid=${item.pid}">update</a>`;
                       row.appendChild(col);
                       
                       col=document.createElement("td");
                       col.innerHTML=""+`<a href="/deleteprod?pid=${item.pid}">delete</a>`;
                       row.appendChild(col);
                       tblbody.appendChild(row);
                    })
            
               }else{
                    let row=document.createElement("tr");
                    let col=document.createElement("td");
                        col.innerHTML="record not found";
                        col.style.textAlign="center";
                        col.style.color="red";
                        col.colSpan=5;
                        row.appendChild(col);
                        tblbody.appendChild(row);
               }
            }
        }
    xhttp.open("GET",`/productsearch?name=${str}`,true);
    xhttp.send();
}