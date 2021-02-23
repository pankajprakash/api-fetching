var div1= document.querySelector('.display');

function getData()
{
    url="	https://jsonplaceholder.typicode.com/posts/1";
    fetch (url).then((response)=>{
        return response.json()
    })
.then((data)=>{
  let apiData = data.map((e) => {
  
      return `<table >
    
      <tr>
     
      <td>${e.userId}</td>
        
      <td>${e.id}</td>
      <td>${e.title}</td>
    <td>${e.body}</td>
    </tr>
   
      </table>`

     
      

  })
  div1.innerHtml=apiData;



})
}
getData()


let apiData = data.map((e) => {
  return `<table border>
  <tr>
 
  <td>${e.id}</td>
 
  <td>${e.userId}</td>
  <td>${e.title}</td>
<td>${e.body}</td>
</tr>

  </table>`
}).join('')
alldiv.innerHTML = apiData;
})

}

getData()
