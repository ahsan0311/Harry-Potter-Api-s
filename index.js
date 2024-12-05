import express from 'express';
import dotenv from "dotenv";
import { harryPotterBooks } from './utils/harrybooks.js';
import { harryPotterCharacters } from './utils/character.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000

app.get('/', (req,res)=>{
   res.send("Welcome to the Harry Potter API'S")
})
app.get('/harrybooks', (req,res)=>{
   res.send({status: 200 , massage : 'Welcome to the Harry Potter Book API' , books:harryPotterBooks})
})
app.get('/harrycharacter', (req,res)=>{
   res.send({status: 200 , massage : 'Welcome to the Harry Potter Book API' , books:harryPotterCharacters})
})


app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)  
 
})