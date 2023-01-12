const http= require('http');
const { runInNewContext } = require('vm');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node! </h1>');
    res.end('<p>Hello Server!</p>');
})
  .listen(80, ()=> {
  console.log('80포트에서 서버 대기중입니다.');
  });

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node! </h1>');
    res.end('<p>Hello Server!</p>');
})
  .listen(8001, ()=> {
  console.log('80포트에서 서버 대기중입니다.');
  });