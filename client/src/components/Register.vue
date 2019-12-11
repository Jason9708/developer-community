<template>
    <div class="register">
        <div class="container">
            <div class="row">
                <h1 class="Title">- REGISTER -</h1>
                <p class="title">create a new account</p>
                <form @submit.prevent='submit' autocomplete="off" method="post">
                    <p><input class="Input"
                        type='text'
                        name='name'
                        placeholder="用户名"
                        v-model="newUser.name"
                        :error='errors.name'
                        /></p>
                    <p><input class="Input"
                        type='email'
                        name='email'
                        placeholder="邮箱地址"
                        v-model="newUser.email"
                        :error='errors.email'
                        info='我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱'
                        /></p>
                    <p><input class="Input"
                        type='password'
                        name='password'
                        placeholder="密码"
                        v-model="newUser.password"
                        :error='errors.password'
                        /></p>
                    <p><input class="Input"
                        type='password'
                        name='password2'
                        placeholder="确认密码"
                        v-model="newUser.password2"
                        :error='errors.password2'
                        /></p>
                    <p><input type="submit" class="btn" value="Submit"/></p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Register',
    data(){
        return{
            newUser:{
                name:"",
                email:"",
                password:"",
                password2:""
            },
            errors:{}
        };
    },
    methods: {
        submit(){
            //console.log(this.newUser.name);
            // console.log(this.$store.getters.isAuthenticated);
            //获取后端注册接口
            this.$axios.post("http://localhost:5000/api/users/register",this.newUser)
            .then((res) => {
                console.log(res.data);
                console.log("Login success!!!");
                //执行mutation操作
                //this.$store.commit("setUser",res.data);//把用户注册的信息传递过去setUser
                //执行actions异步操作
                this.$store.dispatch("setUser",res.data);
                //清除错误
                this.errors = {};
                //注册成功 -> 页面跳转
                this.$router.push('/login');
            }).catch((err) => {
                if (err.response) {
                    // 注册成功防止报错
                    this.errors = err.response.data;
                    alert("Register fail  👉  注册信息有误");
                }
            });
        }
    },
}
</script>

<style scoped>
.register{
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