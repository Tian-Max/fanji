let http = require("http");
let url = require("url");
let fs = require("fs");
let mime = require("mime");
let path = require("path");
http.createServer((req,res)=>{
    //req 客户端向服务器发送请求时携带的信息
    //res 服务器端响应数据时携带信息
    //req.url 获取到请求的地址
    // url.parse()解析请求的地址

    //            'Set-Cookie':'user=15659575071;expires=Thu'  设置cookie



    let {pathname,query} = url.parse(req.url,true);
    console.log(pathname,req.method);
    console.log(req.headers.cookie);
    if(pathname ==="/favicon.ico") return;
    if(pathname === "/fnjiHomeBanner"&&req.method==="GET"){
        let data = fs.readFileSync(path.join(__dirname,"fnjihome/Banner.json"),"utf-8");
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"http://localhost:3000",
            'Access-Control-Allow-Credentials':"true",
        });
        res.end(data);
        return;
    }
    if((pathname === "/fnjiHomeAtHome"||pathname === "/fnjiHomeDrop")&&req.method==="GET"){
        let data = fs.readFileSync(path.join(__dirname,"fnjihome/AtHome.json"),"utf-8");
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"http://localhost:3000",
            'Access-Control-Allow-Credentials':"true",
        });
        res.end(data);
        return;
    }
    if(pathname === "/login"&&req.method==="POST"){
        let str = "";
        let strBack = null;
        let data = "";
        req.on("data",data=>{str+=data});
        req.on("end",()=>{
            data = fs.readFileSync(path.join(__dirname,"my/login.json"),"utf-8");
            data = JSON.parse(data);
            str = JSON.parse(str);
            strBack = data.some(
                item=>item.name===str.name&&item.psw===str.psw
            );

            if(strBack){
                res.writeHead(200,{
                    "Content-Type":"application/json;charset=utf-8",
                    "Access-Control-Allow-Origin":"http://localhost:3000",
                    'Access-Control-Allow-Credentials':"true",
                    'Set-Cookie':'user='+str.name
                });
            }else{
                res.writeHead(200,{
                    "Content-Type":"application/json;charset=utf-8",
                    "Access-Control-Allow-Origin":"http://localhost:3000",
                    'Access-Control-Allow-Credentials':"true",
                });
            }

            res.end(strBack+"");
            return;
        });

    };
    if(pathname === "/add"&&req.method==="POST"){
        let str = "";
        let data= "";
        req.on("data",data=>{str+=data});
        req.on("end",()=>{
            data = fs.readFileSync(path.join(__dirname,"my/login.json"),"utf-8");
            data = JSON.parse(data);
            str = JSON.parse(str);
            data.push(str);
            fs.writeFile(path.join(__dirname,"my/login.json"),JSON.stringify(data),err=>{
                if(err){
                    res.end(err);
                }
                res.end("true");
                return;
            });
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"http://localhost:3000",
                'Access-Control-Allow-Credentials':"true",
            });
        });

    };
}).listen(9090,()=>{
    console.log("9090的服务启动成功")
})