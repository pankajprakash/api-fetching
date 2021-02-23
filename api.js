
//div which we make to print in browser
var alldiv = document.querySelector('.all-body')
function getData()
{
  
    //url of jason file
   url="https://jsonplaceholder.typicode.com/posts";
   fetch (url).then((response)=>{

       return response.json()


}).then((data)=>{
    let apiData = data.map((e) => {
        return `<div class="card">
    
        <div class="card-body">
          <h5 class="card-title">id</h5>
          <p class="card-text">${e.id}</p>
          <h5 class="card-title">user id </h5>
          <p class="card-text">${e.userId}</p>
          <h5 class="card-title">body ${e.id}</h5>
          <p class="card-text">${e.body}</p>
          <h5 class="card-title">Title</h5>
          <p class="card-text">${e.title}</p>
  
        </div>
      </div>`
    }).join('')
    alldiv.innerHTML = apiData;
 })

}

getData()









function PostData()
{
 
   url="http://dummy.restapiexample.com/api/v1/create";
   data='{"name":"pop","salary":"123","age":"23"}'
   params ={
       method :'post',
       headers:
       {
           'content-type':'application/json'
       },
    
  
   body:data
}
   
   fetch (url,params).then(response => response.json())
   .then (data=>console.log(data)
   )

}

PostData()


