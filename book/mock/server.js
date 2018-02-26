let url =require('url');
let fs=require('fs');
let http=require('http');
let sliders= require('./sliders');
function read(cb) {
  fs.readFile('./book.json','utf8',function (err,data) {
    if(err||data.length===0){
      cb({})
    }else {
      cb(JSON.parse(data))
    }
  })
}
function write(data,cb) {
  return fs.writeFile('./book.json',JSON.stringify(data),cb)
}

http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") return res.end();

  let {pathname,query}=url.parse(req.url,true);
  if(pathname==='/sliders'){
    res.setHeader('Content-Type','application/json;charset=utf8');
    return res.end(JSON.stringify(sliders))
  };
  if(pathname==='/hot'){
    read(function (books) {
      let hot=books.reverse().slice(0,6);
      res.end(JSON.stringify(hot))
    });
    return
  }
  if(pathname==='/book'){
    let id=parseInt(query.id);
    switch (req.method){
      case 'GET':
        if(id){
          read(function (books) {
            let book=books.find(function (item,index) {
              return item.bookId=id;
            });
            res.end(JSON.stringify(book))
          })
        }else {
          read(function (books) {
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break;
      case 'POST':
        let str1='';
        req.on('data',function (chunk) {
          str1+=chunk;
        });
        req.on('end',function () {
          let book=JSON.parse(str1);
          read(function (books) {
            book.bookId=books.length?books[books.length-1].bookId+1:1;
            books.push(book);
            write(books,function () {
              res.end(JSON.stringify(book))
            })
          })
        });
        break;

      case 'PUT':
        let str='';
        req.on('data',function (chunk) {
          str+=chunk;
        });
        req.on('end',function () {
          let book = JSON.parse(str);
          read(function (books) {
            books = books.map(item => {
              if (item.bookId === id) {
                return book
              } else {
                return item
              }
            });
            write(books, function () {
              res.end(JSON.stringify(book))
            })
          })
        });
        break;


      case 'DELETE':
        read(function (books) {
          books=books.filter(item=>item.bookId!==id);
          write(books,function () {
            res.end(JSON.stringify({}))
          })
        });
        break;
    }
  }
}).listen(3000);
