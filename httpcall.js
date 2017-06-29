var https = require('https');

var optionsget = {
  host : 'YOUR_URL',
  port : 443,
  path : '/REST OF URL',
  method : 'GET'
};

console.info('Options prepared: ');
console.info(optionsget);
console.info('Do the GET call');

var reqGet = https.request(optionsget,function(res){
  console.log("statusCode: ", res.statusCode);


  res.on('data', function(d){
    console.log('GET result: \n');
    process.stdout.write(d);
    console.info('\n\nCall completed');
  });
});

reqGet.end();
reqGet.on('error', function(e){
  console.error(e);
});


//POST

  jsonObject = JSON.stringify({
    "message" : "THe web of things is approaching,
    let do some tests to be ready!",
    "name" : "Test message posted with node.js",
    "caption" : "Some tests with node.js",
    "link" : "YOUR_LINK",
    "description" : "this is a description",
    "picture" : "YOUR_PIC",
    "actions" : [ {
        "name" : "NAME",
        "link" : "LINK"
      }]
  });
  var postheaders = {
    'Content-Type' : 'application/json',
    'Content-Length' : Buffer.byteLength(jsonObject, 'utf8')
  };

  var optionspost = {
    host: 'YOUR_URL',
    port : 443,
    path: 'REST_URL?access_token=API_KEY',
    method : 'POST',
    headers : postheaders
  };

  console.info('Options prepared: ');
  console.info(optionspost);
  console.info('Do the POST call');

  var reqPost = https.request(optionspost, function(res){
    console.log("statusCode: ", res.statusCode);

    res.on('data', function(d){
      console.info('POST result: \n');
      porcess.stdout.write(d);
      console.info('\n\nPOST completed');
    });
  });

  reqPost.write(jsonObject);
  reqPost.end();
  reqPost.on('error', function(e){
    console.error(e);
  });

  //GET message

  var optionsgetmsg = {
    host : 'YOUR_URL',
    post : 443,
    path : 'REST_URL?access_token=API_KEY',
    method : 'GET'
  };

  console.info('Options prepared: ');
  console.info(optionsgetmsg);
  console.info('Do the GET call');

  //do the get request
  var reqGet = https.request(optionsgetmsg, function(res){
    console.log('statusCode: ', res,statusCode);

    res.on('data', function(d){
      console.info('GET result after POST: \n');
      process.stdout.write(d);
      console.info('\n\nCall completed');
    });
  });

  reqGet.end();
  reqGet.on('error', function(e){
    console.error(e);
  });
