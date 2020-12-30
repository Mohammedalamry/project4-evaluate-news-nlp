const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
const bodyparser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.static('dist'))
// use url of meaingcloud.comsenttiment
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key='
const projecdata = {}
const API_KEY = process.env.API_KEY
console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    console.log(mockAPIResponse.message)
    res.send(mockAPIResponse)
})
 


// method to get data of client after get  data of meaing cloud url
 function getdata (req,res)  {
// if (projecdata!=undefined){

    fetch(baseUrl+`${process.env.API_KEY}&of=json&txt=${projecdata.formText}&lang=en`).
    then(res=>{
  return  res.json();
    
    }).then(result=>{ 

     projecdata['data']= result
    //  const r=5;
    //  getdata(r,result)
    // console.log(result)
     }).then(rt=>{

        res.send(projecdata)

     }).catch(error=>{

        console.log('error',error)   
        });
        

    

     



// res.send(projecdata)

 

// }

    console.log(projecdata.data)
    } 
// post  data that  come of clinet server 
app.post('/add',addnewdata) 
 function addnewdata(req ,res,next){

    projecdata['formText']= req.body.formtext
    console.log(req.body.formtext)
//     fetch(baseUrl+`${process.env.API_KEY}&of=json&txt=${projecdata.formText}&lang=en`).
//     then(res=>{
//   return  res.json();
    
//     }).then(result=>{ 

//      projecdata['data']= result
//     //  const r=5;
//     //  getdata(r,result)
//     // console.log(result)
//      }).catch(error=>{

//         console.log('error',error)   
//         });
        

    

     
} 
//route to get data of client after get  data of meaing cloud url
app.get('/data',getdata)



    // console.log(projecdata)

// fetch(baseUrl+`${process.env.API_KEY}&of=json&txt=${projecdata.formText}&lang=en`).
//     then(res=>{
//   return  res.json();
    
//     }).then(result=>{ 
//      projecdata['data']= result
//     console.log(result)
//      });

console.log(projecdata)