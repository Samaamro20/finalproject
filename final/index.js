var express = require("express");
var app     = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0599050371",
  database: "final"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM `landmarks`", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
	
  });
});


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})  


app.get('/',function(req,res){
	res.send('Sama Amro');
});


app.get('/landmarks',function(req,res){


  con.query("SELECT landmarks.id, landmarks.name, landmarks.visitors, country.country,country.continent FROM landmarks INNER JOIN country ON landmarks.country_id=country.id",function(err, result)      
{                                                      
  if(!err)
    res.send(result);
  else
    console.log("Error",err);
});
});

app.get('/landmarks/:id',function(req,res){

  var id=req.params.id;

  con.query("SELECT landmarks.id, landmarks.name, landmarks.visitors, country.country,country.continent FROM landmarks INNER JOIN country ON landmarks.country_id=country.id where landmarks.id=?",id,function(err, result)      
{                                                      
  if(!err)
    res.send(result);
  else
    console.log("Error",err);
});
});

app.get('/countrys',function(req,res){


  con.query("SELECT * FROM country ",function(err, result)      
{                                                      
  if(!err)
    res.send(result);
  else
    console.log("Error",err);
});
});


app.post('/landmarks',function(req,res){
	var name=req.body.name;
	var visitors=req.body.visitors;
   var country_id=req.body.country_id;

	var sql="Insert into landmarks (name,visitors,country_id) VALUES ('"+name+"','"+country_id+"','"+visitors+"')";
	con.query(sql,function(err, result)      
{                                                      
  if(!err)
    res.send("Done Add landmark");
  else
    console.log("Error",err);
});
});

app.post('/countrys',function(req,res){
  var country=req.body.country;
  var continent=req.body.continent;


  var sql="Insert into country (country,continent) VALUES ('"+country+"','"+continent+"')";
  con.query(sql,function(err, result)      
{                                                      
  if(!err)
    res.send("Done Add country");
  else
    console.log("Error",err);
});
});

app.delete('/countrys/:id',function(req, res){ 
  var id=req.params.id;
  con.query('DELETE landmarks.*, country.* FROM landmarks LEFT JOIN country ON landmarks.country_id = country.id WHERE country.id =?',id,function(err,result){

if(!err)
    res.send('Done delete');
  else
    console.log("Error",err);
  });
});

// app.delete('/countrys/:id',function(req, res){ 
//   var id=req.params.id;
//   con.query('DELETE FROM `country` WHERE  id =?',id,function(err,result){

// if(!err)
//     res.send('Done delete');
//   else
//     console.log("Error",err);
//   });
// });


app.get('/landmarks/continent/:continent',function(req, res){ 
  var continent=req.params.continent;
  con.query('select * from landmarks where continent = ?',continent,function(err,result){

if(!err)
    res.send(result);
  else
    console.log("Error",err);
  });
});

app.delete('/landmarks/:id',function(req, res){ 
  var id=req.params.id;
  con.query('DELETE FROM `landmarks` WHERE  id =?',id,function(err,result){

if(!err)
    res.send('Done delete');
  else
    console.log("Error",err);
  });
});


app.get('/landmarks/country/:country',function(req, res){ 
  var country=req.params.country;
  con.query('select * from landmarks where country = ?',country,function(err,result){

if(!err)
    res.send(result);
  else
    console.log("Error",err);
  });
});



app.get('/landmarks/sum',function(req,res){
  var sql = "SELECT sum(visitors)FROM landmarks";
  con.query(sql,function(err, result)      
{                                                      
  if(!err)
    res.send(result);
  else
    console.log("Error",err);
});
});



app.put('/update/:id',function(req, res){ 
  var id=req.params.id;
  var name=req.body.name;
  var visitors=req.body.visitors;
  con.query('UPDATE `landmarks` SET `name` = "'+name+'", `visitors` = "'+visitors+'" WHERE id =?',id,function(err, result)      
{                                                      
  if(!err)
    res.send("Done update landmark");
  else
    console.log("Error",err);
});
});


app.get('/countrys/:id',function(req, res){ 
  var id=req.params.id;
  con.query('SELECT landmarks.id, landmarks.name, landmarks.visitors, country.country,country.continent FROM landmarks INNER JOIN country ON landmarks.country_id=country.id where country.id = ?',id,function(err, result)      
{                                                      
  if(!err)
    res.send(result);
      else
    console.log("Error",err);
});
});



app.use(express.static('public'));
app.listen(3000, () => console.log('Example app listening on port 3000!'))