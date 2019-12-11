<template>
  <div class="landing">
      <div class="container">
          <div class="Title">Developers</div>
          <p class="title">show your career and make everyone know you</p>
          <p v-if="user !== null" v-show="isLogin" class="title">- Hello! Developer : {{user.name}} -</p>
          <router-link v-show="!isLogin" to='/register' class="landing-btn">
            <span class="line line-top"></span>
            <span class="line line-left"></span>
            <span class="line line-right"></span>
            <span class="line line-bottom"></span>Register
          </router-link>
          <router-link v-show="!isLogin" to='/login' class="landing-btn">
            <span class="line line-top"></span>
            <span class="line line-left"></span>
            <span class="line line-right"></span>
            <span class="line line-bottom"></span>Login
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data(){
      return {};
  },
  computed: {
    isLogin(){
          if(this.$store.getters.isAuthenticated){
              return true;
          }else{
              return false;
          }
    },
    user(){
        return this.$store.getters.user;
    } 
  },
}
</script>

<style scoped>
.landing{
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
    position:absolute;
    width:500px;
    height:350px;
    top:60px;
    left:33%;
    text-align: center;
}
.Title{
    margin-top:50px;
    color:#fff;
    font-size:40px;
}
.title{
    color:#fff;
    font-size:20px;
    padding-bottom: 20px;
    /* border-bottom:1px solid #fff; */
}
.landing-btn{
    display: block;
    width:200px;
    padding:10px 20px 10px 20px;
    border:1px solid #fff;
    border-radius: 3px;
    color:#fff;
    margin-top:20px;
    margin-left:130px;
    cursor:pointer;
}
.landing-btn:hover{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    transition:0.4s ease;
}

.landing-btn .line{
    position: absolute;
    background:none;
    transition:0.4s ease;
    -webkit-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -o-transition: 0.4s ease;
}
.landing-btn:hover .line{
    background:#fff;
}
.landing-btn .line-top{
    height:2px;
    width:0px;
    left:-110px;
    top:-2px;
}
.landing-btn:hover .line-top{
    width:100%;
    left:-2px;
}
.landing-btn .line-bottom{
    height:2px;
    width:0px;
    right:-110px;
    bottom:2px;
    transition:0.4s ease;
    -webkit-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -o-transition: 0.4s ease;
}
.landing-btn:hover .line-bottom{
    width:100%;
    right:2px;
}
.landing-btn .line-left{
    height:0px;
    width:2px;
    left:-2px;
    bottom:-110px;
    transition:0.4s ease;
    -webkit-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -o-transition: 0.4s ease;
}
.landing-btn:hover .line-left{
    height:100%;
    bottom:2px;
}
.landing-btn .line-right{
    height:0px;
    width:2px;
    right:0px;
    top:-110px;
    transition:0.4s ease;
    -webkit-transition: 0.4s ease;
    -ms-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    -o-transition: 0.4s ease;
}
.landing-btn:hover .line-right{
    height:100%;
    top:-2px;
}
a{
    text-decoration: none;
}
</style>