var PDF = require('pdfkit');            //including the pdfkit module
var fs = require('fs');                 //including the file system module

var text = 'ANY_TEXT_YOU_WANT_TO_WRITE_IN_PDF_DOC';        //define a dummy text to be written in the file
var request = require('request');

doc = new PDF();                        //creating a new PDF object

//creating a write stream to write the content on the file system


doc.pipe(fs.createWriteStream('./source/testing_file.pdf'));  
 

//Now this is the code snippet to get the image using the url

 fs.readFile("./source/testing_file.jpg", (err, data)=>{
 	doc.image(data,260, 50,{height:100,width:100});
 	doc.end();
 });

//             request({
//                 url: 'http://localhost:8590/1464935924521.jpg',
//                 encoding: null // Prevents Request from converting response to string
//               }, function(err, response, body) {
//               if (err) throw err;

 

// // Inject the image with the required attributes
 

//               doc.image(body,260, 50,{height:100,width:100});
//               doc.text('HOLIDAYS - 125 Fortime',80,165,{align:'center'})
//               doc.text('Hello this is a demo file',100,200)
             

// // Close document and, by extension, response

//               doc.end(); 
//               return;
//     });