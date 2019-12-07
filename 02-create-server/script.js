const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer((req , res)=>{

    const pathName = req.url;
    console.log(pathName);
    if(pathName === '/'){
        res.end('Main Page');
    }
    else if(pathName === '/overview'){
        res.end('We are in overviw page');
    }
    else if(pathName === '/product'){
        res.end('We are in product page');
    }
    else if(pathName === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json` , 'utf-8' , (err , data) =>{
            const parsedData = JSON.parse(data);
            res.writeHead(200 , {'Content-type' : 'application/json'});
            res.end(data);
        });
        
    }
    else{
        res.writeHead(404 , {
            'Content-type' : 'text/html',
            'my-own-head' : 'Yes'
        });
        res.end('<h1>Not Found This page</h1>')
    }
    
    
    
});

server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('Listening on port 8000');
})