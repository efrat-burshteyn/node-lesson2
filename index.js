const fs = require('node:fs')
 const contain1=fs.readFileSync('t1.txt','utf8');
 const contain2=fs.readFileSync('t2.txt','utf8');
 const contain3=fs.readFileSync('t3.txt','utf8');
 const start=new Date;
 console.log('is word name appear in text 1:',contain1.includes('name'));
console.log('count of words in text 2:',contain2.length)
 console.log('is word yes appear in text 3:',contain3.includes('yes'));
 const end=new Date;
 console.log(end-start);

