import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {

  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = `<html>
    <!DOCTYPE html>
    <html>
<head>
    <title>自我介紹網頁</title>
    <style>
        body{
            background-color: #fffcf4;
        }
        h1{
            color: rgb(189, 158, 112);
            text-align: center;
            font-size: 40px;
        }
        li{
            color: rgb(143, 120, 85);
            padding: 10px 15px;
            
            font-size: 20px;
        }

    </style>
</head>
<body>
<h1>自我介紹網頁</h1>
<ul>
<li><a href="/name">姓名</a></li>
<li><a href="/age">年齡</a></li>
<li><a href="/gender">性別</a></li>
<h2></h2>
<li>作品：<a href="https://github.com/Luo051227/">github</a></li>
</ul>

<table>
</table>
</body>
</html>
`
  } else if (pathname == '/name') {
    ctx.response.body = '羅詩喬'
  } else if(pathname == '/age'){
    ctx.response.body = '19歲'
  }else if(pathname == '/gender'){
    ctx.response.body = '女'
  }

});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
