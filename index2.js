
const fs = require('node:fs')
fs.readFile('t1.txt','utf8',(err,contain1)=>{
    if(err){
        console.log('error!!!!!!!!!!!!!!!!')
    }
    else{
         console.log('is word name appear in text 1:',contain1.includes('name'));
    }  
});
fs.readFile('t2.txt','utf8',(err,contain2)=>{
     if(err){
        console.log('error!!!!!!!!!!!!!!!!')
    }
    else{
        console.log('count of words in text 2:',contain2.length);
    }
});
fs.readFile('t3.txt','utf8',(err,contain3)=>{
     if(err){
        console.log('error!!!!!!!!!!!!!!!!')
    }
    else{
         console.log('is word yes appear in text 3:',contain3.includes('yes'));
    }
});
 fs.readFile('t4.txt','utf8',(err,contain4)=>{
     if(err){
        console.log('error!!!!!!!!!!!!!!!!')
    }
    else{
         console.log('is word car appear in text 4:',contain4.includes('car'));
    }
});
