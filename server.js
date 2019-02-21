
var bodyParser = require('body-parser');
var express = require('express');
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var validator = require('email-validator');
var emailCheck = require('email-check');
var app = express();
var fs = require('fs');

  app.use('/', express.static('public'));  
  app.use(express.static(__dirname + '/images'));
 

  app.use(function (req, res, next) {// for giving required access
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
  
	app.use(bodyParser.urlencoded({extended: true}));// data format of get and post method
	app.use(bodyParser.json());
    
  emailCheck('shresthabveeni@gmail.com')
  .then(function (res) {
	  console.log("Email Exist");
    // Returns "true" if the email address exists, "false" if it doesn't. 
  })
  .catch(function (err) {
    if (err.message === 'refuse') {
		console.log("Email Refuse");
      // The MX server is refusing requests from your IP address. 
    } else {
		console.log("other Exist");
      // Decide what to do with other errors. 
    }
  });

  var url = "mongodb://127.0.0.1:27017/cow_db";//url to store data
  
  mongodb.connect(url, function (err, db) {// create connection to mongodb
    if (err) console.log(err);
    else {
        console.log(url);
        console.log('Server Started');
        app.listen(3000, function () {
            console.log('Listening server Started');
        });
    }


    app.get('/', function (req, res, next) {// method to send response to mobile client
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    });

    // app.post('/search/:id', function (req, res, next) {// get method to receive request
        // db.collection('log').find().toArray(function (err, db) {
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    // res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
       // console.log("true");
        // var titleId = req.params.id;
        // console.log(titleId);
        // db.collection('log').find({'titleid': titleId}).toArray(function (err, db) {// search query to select database items of requested cow id
            // res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
            // console.log(db);
        // });     
    // });
	
	
	app.post('/userData/', function (req, res, next) {// get method to receive request
        // db.collection('log').find().toArray(function (err, db) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");
       // console.log("true");
	   console.log(req.body.list);
        var titleId = req.body.list.userId;
        console.log(titleId);
        db.collection('log').find({'s': titleId}).toArray(function (err, db) {// search query to select database items of requested cow id
          console.log(db);
		  // if(err)
		  
			  // console.log('ok');
		  
		  res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
            
        });     
    });
	 app.post('/search', function (req, res, next) {// get method to receive request
        // db.collection('RegisteredUser').find().toArray(function (err, db) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    // Set custom headers for CORS
		res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Custom-Header");   
	    var params = req.body.reguser;// storing requested logs in params variable       
        var titleId = req.body.reguser.emailid;
		var passid = req.body.reguser.passid;       
		// db.collection('LoginUser').insert(titleId, function (err, result) {// query to insert the requested items into mongodb
        db.collection('RegisteredUser').find({'email': titleId,'pass':passid}).toArray(function (err, db) {// search query to select database items of 
		if(err)		  
			  console.log('ok');
		  
		res.send({result: true, 'msg': 'data retrieved', data: db});// sending request as a db
       
        });     
    // });
});
    app.post('/users', function (req, res, next) {//post method to retrieve the requested items	
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('log').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");
            fs.appendFile('logs/logs.dat', JSON.stringify(params), function (err) {// append the requested items in log.dat
                if (err)
                    console.error(err);
                    console.log('Logs added to log.dat file!'+JSON.stringify(params));
            });

        });
        res.send({result: true, 'msg': 'data stored'});
    })
	
	app.post('/register', function (req, res, next) {//post method to retrieve the requested items	
        var params = req.body.logs;// storing requested logs in params variable
        console.log(req.body.logs);
        db.collection('RegisteredUser').insert(params, function (err, result) {// query to insert the requested items into mongodb
            assert.equal(err, null);
            console.log("Inserted a document into the log collection in Mongo.");
            fs.appendFile('logs/logs.dat', JSON.stringify(params), function (err) {// append the requested items in log.dat
                if (err)
                    console.error(err);
                    console.log('Logs added to log.dat file!'+JSON.stringify(params));
            });

        });
        res.send({result: true, 'msg': 'data stored'});
    })
	


});
  // mongodb.connect(url, function (err, db) {// create connection to mongodb
    // if (err) console.log(err);
    // else {
        // console.log('Connected');
    // }
  // });
 // app.get('/', function (req, res, next) {// method to send response to mobile client
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
        // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // res.setHeader('Access-Control-Allow-Credentials', true);
    // });
	
	// app.post('/users', function (req, res, next) {//post method to retrieve the requested items
        // var params = req.body.logs;// storing requested logs in params variable
        // console.log(req.body.logs);
        // db.collection('log').insertMany(params, function (err, result) {// query to insert the requested items into mongodb
            // assert.equal(err, null);
            // console.log("Inserted a document into the log collection in Mongo.");
            // fs.appendFile('logs/logs.dat', JSON.stringify(params), function (err) {// append the requested items in log.dat
                // if (err)
                    // console.error(err);
                    // console.log('Logs added to log.dat file!'+JSON.stringify(params));
            // });

       
        // res.send({result: true, 'msg': 'data stored'});
    // })


  // app.listen(3000, function () {
          // console.log('Example app listening on port 3000!');
  // });