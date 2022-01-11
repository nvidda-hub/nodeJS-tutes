const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();    // making express app

//EXPRESS STUFF
app.use('/static', express.static("static"));   // here express.static("folder_name")
app.use(express.urlencoded());  // using middleware to get form data from post request
// above middleware helps us to take form data to express


// PUG STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// ENDPOINTS
app.get('/', (request, response)=>{
    const content = "Making pub dynamic using pug varialbe inside raw HTML.";
    const params = {'title':'pug tutorial', 'content':content};
    response.status(200).render('demo.pug', params);
})

app.post('/', (request, response)=>{
    // getting form data : values comes by name NOT BY id
    // console.log(request.body);
    /* request.body =  {
        name: 'test',
        age: '45',
        gender: 'Male',
        address: 'address 1',
        more: 'test is a good boy.'
      } */

    form = request.body;
    name = form.name;
    age = form.age;
    gender = form.gender;
    address = form.address;
    more = form.more;
    
    let outputToWrite = `The name of the client is ${name}, ${age} year, ${age}.lives at ${address} and more about him/her ${more}.`
    fs.writeFileSync('gym_client_data.txt', outputToWrite) 
    const params = {'message':'Your form haas been submitted successfully!!'};
    response.status(200).render('demo.pug', params);

})

// START SERVER
const port = 3000;
const hostname = '127.0.0.1';

app.listen((hostname, port), ()=>{
    console.log(`The app is running at http://${hostname}:${port}`);
})