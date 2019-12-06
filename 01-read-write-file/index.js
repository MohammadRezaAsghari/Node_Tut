//first file getting with node js
const fs = require('fs');

// const text = fs.readFileSync('./text/note.txt' , 'utf-8');
// console.log(text);
// const newText = `Something Added ${text}`;

// fs.writeFileSync('./text/note.txt' , newText);

const firstFile = fs.readFile('./text/file-1.txt' , 'utf-8' , (err , data) => {
    
    const secondFile = fs.readFile(`./text/${data}.txt` , 'utf-8', (err , data1) =>{
        console.log(data1);
    })
    console.log('after second reading file');

});
console.log('Second Read This');

