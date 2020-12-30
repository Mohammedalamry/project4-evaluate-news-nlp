// import { json } from "body-parser"
// import { application } from "express"
const result = document.getElementById('results') 
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
   if(formText==''){    
     alert('please enter data')
   }else{

    postdata('http://localhost:8081/add',{formtext:formText  })
    updateUI('http://localhost:8081/data')}
}
//method  to post data from clinet to server
const postdata =   (url='',data={})=>{
  console.log(data)
  fetch(url,{
  method: 'POST',
  credentials: 'same-origin',
  headers:{   
  'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),  
  
  });
 
    }
 //method  to update the UI dynamically 
const updateUI =   (url='')=>{    
fetch(url).then(res => res.json())
.then(function(res) {
  console.log(res);
    document.getElementById('results').innerHTML = res.data.sentence_list[0].confidence
})
 

}
  export { handleSubmit }
