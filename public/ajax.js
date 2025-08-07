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
            let jsonob=JSON.parse(responsedata);
            if(jsonob.length>0){
                jsonob.forEach((item,index)=>{
                let row=document.createElement("tr");
                let col=document.createElement("td");
                col.innerHTML=""+(index+1);
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML=""+item.name;
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML=""+`<a href="/updatecate?id=${item.cid}">update</a>`
                row.appendChild(col);

                col=document.createElement("td");
                 col.innerHTML=""+`<a href="/deletecate?id=${item.cid}">delete</a>`
                row.appendChild(col);

                tblbody.appendChild(row);
               })
            }else{
                let row=document.createElement("tr");
                let col=document.createElement("td")
                    col.innerHTML="rocord not found";
                    col.style.textAlign="center";
                    col.style.color="red";
                    col.colSpan=4;

                    row.appendChild(col);
                    tblbody.appendChild(row);
            }
        }
     }
 xhttp.open("GET",`/searchcate?name=${str}`,true);
 xhttp.send();
}