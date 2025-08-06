function ajaxsearch(str)
{
 let xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange=function()
     {
        if(this.readyState==4 && this.status==200)
        {
            let responsedata=this.responseText;
            let jsonob=JSON.parse(responsedata);

            jsonob.forEach((item,index)=>{
            let tblbody=document.getElementById("tblbody");
                tblbody.innerHTML="";
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
        }
     }
 xhttp.open("GET",`/searchcate?name=${str}`,true);
 xhttp.send();
}