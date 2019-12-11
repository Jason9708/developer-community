<template>
  <nav class="navbar">
      <div class="navBar-left">
          <router-link class="navbar-brand" to="/">Your Career</router-link>
          <router-link class="navbar-link" to="/profiles">Developers</router-link>
      </div>
      <div class="navBar-right">
          <ul>
            <li><router-link v-show="isLogin" to='/feed' class="nav-link">Mess</router-link></li>
            <li><router-link v-show="isLogin" to='/dashboard' class="nav-link">inform</router-link></li>
            <li v-show="!isLogin"><router-link to='/register' class="nav-link">Reg</router-link></li>
            <li v-show="!isLogin"><router-link to='/login' class="nav-link">Log</router-link></li>
            <li v-if="user !== null" v-show="isLogin">
                <a class="nav-link" @click.prevent="logout">
                {{user.name}}
                </a>
             </li>
          </ul>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
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
  methods: {
      //设置注销操作 ->  清除store里的内容
      logout(){
          //删除localStorage
          localStorage.removeItem("jwtToken");
        //   //干掉请求头
        //   this.$store.dispatch("setIsAuthenticated",false);
        //   //干掉user
        //   this.$store.dispatch("setUser",{});
          //清除所有state
          this.$store.dispatch('clearCurrentState');
          //登出跳转
          this.$router.push('/');
      }
  },
}
</script>

<style scpoed>
.navbar{
    position: relative;
    width:100%;
    height:60px;
    background:black;
}
.navBar-left{
    width:400px;
    line-height: 60px;
    margin-left: 60px;
}
.navbar-brand{
    text-decoration: none;
    font-size:25px;
    color:rgb(87, 196, 159);
}
.navbar-link{
    text-decoration: none;
    font-size:15px;
    color:rgb(87, 196, 159);
    margin-left:30px;
    transition:0.5s ease;
}
.navbar-link:hover{
    /* font-size:20px; */
    color:rgb(32, 141, 90);
}
.navBar-right{
    position:absolute;
    top:6px;
    right:10px;
    width:350px;
}
.navBar-right ul{
    padding:0px;
}
.navBar-right li{
    float:left;
    list-style: none;
    margin-left:20px;
    cursor:pointer;
    color:rgb(87, 196, 159);
    font-family:Arial, Helvetica, sans-serif;
}
.navBar-right li:hover{
    /* font-size:18px; */
    color:rgb(32, 141, 90);
    transition:0.4s ease;
}
.navBar-right a {
    text-decoration: none;
    color:rgb(87, 196, 159);
}
.navBar-right a:hover {
    color:rgb(32, 141, 90);
}
</style>
