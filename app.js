const express = require('express');

const { sequelize,Student,Address} = require('./models');

const app = express();
app.use(express.json())
app.post('/students',async(req,res)=>{
    const {name,images,depart} = req.body

    try{
        const student = await Student.create({name,images,depart})
        return res.json(student)
    }catch(error){
            console.log(error);
            return res.json(error);

    }
})


/*async function main(){
    await sequelize.sync({alter: true})
}
main()*/
app.get('/students',async(req,res)=>{
    try {
        const users = await User.findAll()
        return res.json(users)
    }catch(e){
        return res.json(e);

    }



})
app.get('/students/:uuid',async(req,res)=>{
    const uuid = req.params.uuid
    try {
        const student = await Student.findOne({
            where: {uuid},
           include:'address'
        })
        return res.json(student)
    }catch(e){
        return res.json(e);

    }
})
app.post('/address',async(req,res) =>{
  const { studentUuid,address} = req.body
 
    try{
     const student = await Student.findOne({where: {uuid:studentUuid}})
        const addresse = await Address.create({address,userId:user.id})
        return res.json(addresse)

    }catch(e){
        return res.json(e);

    }
})

app.get('/posts',async(req,res) =>{
    
    try{
        const address = await Address.findAll({include:['student']})
        return res.json(address)

    }catch(e){
        return res.json(e);

    }
})

app.listen(5000,async()=>{
    console.log("server running port 5000")
    await sequelize.authenticate()
    console.log('database connected');
})