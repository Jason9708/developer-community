<template>
    <div class="login">
        <div class="container">
            <div class="row">
                <h1 class="Title">- LOGIN -</h1>
                <p class="title">Login your account</p>
                <form @submit.prevent="submit" autocomplete="off" method="post">
                    <p><input class="Input"
                        type='email'
                        name='email'
                        placeholder="邮箱地址"
                        v-model="user.email"
                        :error='errors.email'
                    /></p>
                    <p><input class="Input"
                        type='password'
                        name='password'
                        placeholder="密码"
                        v-model="user.password"
                        :error='errors.password'
                    /></p>
                    <p><input type="submit" class="btn" value="Login"/></p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
    name:'Login',
    data(){
        return{
            user: {
                email: "",
                password: ""
            },
            errors: {}
        };
    },
    methods: {
        submit(){
            // console.log(this.user.email);
            //获取后端登录接口
            this.$axios.post("http://localhost:5000/api/users/login",this.user)
            .then((res) => {
                // console.log(res.data);
                //存储token到localStorage
                const {token} = res.data; // 相当于 const token = res.data.token
                window.localStorage.setItem('jwtToken',token); //这里之后需要去设置请求头 ( utils/http.js )

                //解析token
                const decoded = jwt_decode(token);
                console.log(decoded);

                //解析成功后 分发action 更改store的state
                //异步操作形式 1.修改是否授权
                this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decoded));
                this.$store.dispatch("setUser",decoded); 
                console.log(this.$store.getters.user);   
                //清除错误
                this.errors = {};
                //页面跳转
                this.$router.push('/dashboard');
            }).catch(err => {
                if(err.response){
                    this.errors = err.response.data;
                    alert("Login fail  👉  登录信息有误")
                }
            });
        },
        //此处判断decoded是否为空
        isEmpty(value) {
            return(
                value === undefined || value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
        }
    }
};
</script>

<style scoped>
.login{
    display: block;
    position: relative;
    background:url("../assets/landing.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height:auto;
    min-height: 660px;
}
.container{
    display: block;
    position: absolute;
    width:600px;
    height:450px;
    top:30px;
    left:30%;
    /*left:30%;*/
    animation:mymove 2s 1;
    -moz-animation:mymove 2s 1; /* Firefox */
    -webkit-animation:mymove 2s 1; /* Safari and Chrome */
    -o-animation:mymove 2s 1; /* Opera */
    text-align: center;
}
@keyframes mymove
{
from {left:-60px;}
to {left:30%;}
}
@-moz-keyframes mymove /* Firefox */
{
from {left:-60px;}
to {left:30%;}
}
@-webkit-keyframes mymove /* Safari and Chrome */
{
from {left:-60px;}
to {left:30%;}
}
@-o-keyframes mymove /* Opera */
{
from {left:-60px;}
to {left:30%;}
}

.Input{
    border:1px solid #fff;
    width:350px;
    height:30px;
    margin-bottom:10px;
    border-radius: 3px;
    text-indent:10px;
    font-size:12px;
    background:transparent;
    color:#fff;  
    font-weight:bold;
}
/*设置placeholder字体*/
::-webkit-input-placeholder { /* WebKit browsers */
  color: #fff;
  font-size: 12px;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: 12px;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #fff;
  font-size: 12px;
}   
.Title{
    margin-top:0px;
    padding-top:70px;
    color:#fff;
}
.title{
    color:#fff;
}
.btn{
    border:1px solid #fff;
    background:transparent;
    border-radius: 3px;
    color:#fff;
    width:120px;
    height:40px;
}
.btn:hover{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    transition:0.4s ease;
}
</style>

