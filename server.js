//引入express
const express=require("express");
//引入mongoose
const mongoose=require("mongoose");
//引入body-parser
const bodyParser = require('body-parser');
//引入passport
const passport = require("passport");

const app = express();

//引入user.js
const users = require("./routes/api/users");
//引入profile.js
const profile = require("./routes/api/profile");
//引入posts.js
const posts = require("./routes/api/posts");

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 使用中间件实现允许跨域
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
})

//配置DB  -- keys.js的链接
const db=require("./config/keys").mongoURI;



//连接mongodb
mongoose.connect(db,{ useNewUrlParser:true }).then(()=>console.log("MongoDB Connected")).catch(err => console.log(err));

//passport 初始化
app.use(passport.initialize());
require("./config/passport")(passport);

//设置个路由
//res.send() 传递路由
// app.get("/",(req,res) =>{
// 	res.send("Hello World!");
// })

//使用routes
app.use("/api/users",users);
app.use("/api/profile",profile);
app.use("/api/posts",posts);

const port=process.env.PORT || 5000;
app.listen(port,() => {
	console.log(`Server running on port ${port}`);
})