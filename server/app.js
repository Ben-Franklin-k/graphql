const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema')
const Mongoose=require('mongoose');
const dbURI='mongodb+srv://ben:ben12345@cluster0-o79ou.mongodb.net/test?retryWrites=true&w=majority';
Mongoose.connect(dbURI,{ useNewUrlParser: true ,useUnifiedTopology: true } ,function(err){    
    if(err){
    console.log('Some problem with the connection ' +err)   
    } 
    else {
    console.log('The Mongoose connection is ready')  
    }
})

app.use('/graphql', graphqlHTTP({
    schema
}))
app.listen(4000, () => {
    console.log("now listening on port 4000")
})
