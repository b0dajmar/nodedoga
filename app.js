import express from "express"
import path from "path"
import bodyParser from "body-parser"

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use('/',(req,res,next) =>{
   
    console.log("Hi,there!")
    res.send('Hi,there!')
    
})
app.use('/express',(req,res,next) =>{
   
    console.log('Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.')
    res.send('Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.')
    
})
app.use('/greeting',(req,res,next) =>{
   
    console.log('Hello Dajka Marcell')
    res.send('Hello Dajka Marcell')
    
})
app.use('/nodejs', (req,res,next) =>{
    
    console.log('A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül')
    res.send('A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül')
})

app.listen(PORT, () => console.log(`fut a szerver${PORT}`))