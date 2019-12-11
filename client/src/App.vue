<template>
   <div id="app">
     <NavBar />
     <!-- <landing /> -->
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
     <Footer />
     <Loading v-show="loading" />
   </div>
</template>

<script>
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Loading from './components/common/loading';
import jwt_decode from 'jwt-decode';
export default {
  name: 'App',
  components:{
    NavBar,
    Landing,
    Footer,
    Loading
  },
  computed: {
    loading(){
      return this.$store.getters.loading;
    }
  },
  created() {
    if(localStorage.jwtToken){
      const decoded = jwt_decode(localStorage.jwtToken);
      //获取当前时间
      const currentTime = Date.now()/1000;
      //检测token是否过期 过期即清除掉localStorage
      if(decoded.exp < currentTime){
        // this.$store.dispatch("setIsAuthenticated",false);
        // this.$store.dispatch("setUser",{});
        this.$store.dispatch('clearCurrentState');
        this.$router.push('/login');
      }else{
        //此处用处：让setUser在页面刷新后仍存在
        //token没过期 解析token
        //解析成功后 分发action 更改store的state
        //异步操作形式 1.修改是否授权
        this.$store.dispatch("setIsAuthenticated",!this.isEmpty(decoded));
        this.$store.dispatch("setUser",decoded);
      }
    }
  },
  methods:{
    isEmpty(value) {
            return(
                value === undefined || value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
        }
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
</style>
