const mysql = require('mysql');
const express = require('express')
const app = express()
const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname))

app.get('/',function(req,res){

  res.sendFile(__dirname + "/form.html")

});

function getConnection(){
     return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'RAF#666666',
      database: 'Covid'
    })
 }

app.get('/search_authors',(req,res)=> {
  console.log("Try to find top 10 authors..")
  const D='%'+req.query.drug +'%'

  const queryString="SELECT authors,MIN(publish_time) as mintime,MAX(publish_time) as maxtime, COUNT(authors) AS number_of_articles FROM Mydata WHERE title LIKE ? or abstract LIKE ? GROUP BY authors ORDER BY  number_of_articles DESC LIMIT 11;"
  getConnection().query(queryString,[D,D],(err,rows,fields)=>{
  console.log(rows);
  res.json(rows)
})

})

app.listen(3000, () => {
	console.log("Server is up and listening on 3000...")
})

