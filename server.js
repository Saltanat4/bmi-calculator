const express = require('express'); 
const server=express();

server.set('view engine','ejs');
server.use(express.urlencoded({extended:true}));
server.use(express.static('public'));

server.get('/',(req,res)=>{
    res.render('page');
});
server.post('/result',(req,res)=>{
    const height=req.body.height;
    const weight=req.body.weight;
    const bmi=(weight/(height*height / 10000));

    if(bmi<18.5){
        res.render('result',{bmi:bmi, color:'orange', message:'You are underweight'});
    }
    else if(bmi>=18.5 && bmi<24.9){
         res.render('result',{bmi:bmi, color:'green', message:'You have a normal weight'});
    }
    else if(bmi>=25 && bmi<29.9){
        res.render('result',{bmi:bmi, color:'yellow', message:'You are overweight'});
    }
    else{
        res.render('result',{bmi:bmi, color:'red', message:'You are obese'});
    }
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});