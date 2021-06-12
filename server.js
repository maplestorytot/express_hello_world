const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// TODO: figure out DNT compliance.
app.use((_, res, next) => {

  res.set({ Tk: '!' })
  next()
})


const helloWorldName = ""

app.get(`/api/hello_world_name`, async (req,res)=>{
   
    return res.status(200).json({
        success:true,
        message:`Hello World ${helloWorldName}`
    })
})
app.post('/api/hello_world_name', async (req, res)=>{
    helloWorldName = req.body.name
    return res.status(200).json({
        success:true,
        message:`Successfully changed name to ${helloWorldName}`
    })
})


// listen for requests
app.listen(3001, () => {
  console.log('Server is listening on port 3001')
})


