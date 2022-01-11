const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');  // is a middleware
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// mongodb connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser:true});
}
// define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

const Contact = mongoose.model('Contact', contactSchema);   // finializing schema 

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response)=>{
    response.status(200).render("index.pug", {'title':'Home'});
})

app.get('/contact', (request, response)=>{ 
    response.status(200).render('contact.pug', {'title':"Contact Us"});
});

app.post('/contact', (request, response)=>{ 
    var myData = new Contact(request.body);
    myData.save().then(()=>{
        response.send("Your Info saved to database");
    }).catch(()=>{
        res.status(400).send("Some error occured while saving data to database");
    })
    
});

app.listen((hostname, port), ()=>{
    console.log(`The app is running at http://${hostname}:${port}`);
})