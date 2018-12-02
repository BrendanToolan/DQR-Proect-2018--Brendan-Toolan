var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoose2 = require('mongoose');
var mongoDB = 'mongodb://User:rumham1@ds125331.mlab.com:25331/project';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    name: String,
    content: String,
    album: String,
    stars: String
})
var PostModel = mongoose.model('post', postSchema);

var Schema2 = mongoose2.Schema2;
var postSchema2 = new Schema({
    email: String,
    subject: String,
    comment: String
})
var PostModel2 = mongoose2.model('post2', postSchema2);



//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
/*app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})*/

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.name);
    console.log(req.body.album)
    console.log(req.body.content);
    console.log(req.body.stars)

    PostModel.create({
        name: req.body.name,
        album: req.body.album,
        content: req.body.content,
        stars: req.body.stars
       
        });

    res.send('Item added');


})


app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.email);
    console.log(req.body.subject);
    console.log(req.body.comment);


    PostModel2.create({
        email: req.body.email,
        subject: req.body.subject,
        comment: req.body.comment
       
        });

    res.send('Item added');


})

app.get('/api/posts', function(req, res){
    PostModel.find(function(err, data){
        res.json(data);
    });
   
})

app.get('/api/posts', function(req, res){
    PostModel.find(function(err, data){
        res.json(data);
    });
   
})

app.get('/api/posts/:id', function(req, res){
    console.log("Read post " +req.params.id);

    //PostModel.find({_id : req.params.id}, 
    PostModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });

})

app.get('/api/posts/:id', function(req, res){
    console.log("Read post " +req.params.id);

    //PostModel.find({_id : req.params.id}, 
    PostModel.findById(req.params.id,
        function (err, data) {
            res.json(data);
        });

})

app.put('/api/posts/:id', function(req, res){
    console.log("Update Post" +req.params.id);
    console.log(req.body.name);
    console.log(req.body.album);
    console.log(req.body.content);
    console.log(req.body.stars);


    PostModel.findByIdAndUpdate(req.params.id, req.body, 
        function(err, data){
            res.send(data);
        })
})


app.delete('/api/posts/:id', function(req, res){
    console.log(req.params.id);

    PostModel.deleteOne({_id:req.params.id},
    function(err, data)
    {
        if(err)
            res.send(err);
        res.send(data);
    })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
