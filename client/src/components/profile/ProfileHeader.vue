<template>
    <div class="Header">
        <!--头像-->
                <div>
                <img class="TouXiang"
                    src="../../assets/TouXiang.jpg" alt=""/>
                </div>
                <div class="Center">
                  <h1 v-if='profile.user' class="Name">{{profile.user.name}}</h1>
                  <p v-if='profile.company' class="Company">{{profile.company}}</p>
                  <p v-if="profile.location">{{profile.location}}</p>
                  <p>
                    <a v-if="profile.website" class="icon" :href="profile.website">
                      <span><img src="../../assets/Website.png" /></span>
                    </a>
                    <a v-if="profile.social && profile.social.wechat" class="icon" :title="profile.social.wechat">
                      <span><img src="../../assets/Wechat.png" /></span>
                    </a>
                    <a v-if='profile.social && profile.social.QQ' class="icon" :title="profile.social.QQ">
                      <span><img src="../../assets/QQ.png" /></span>
                    </a>
                  </p>
                    <!--<a v-if="profile.social && profile.social.tengxunkt" class="text-white p-2" :href="profile.social.tengxunkt">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                    <a v-if='profile.social && profile.social.wangyikt' class="text-white p-2" :href="profile.social.wangyikt">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                  </p> -->
                </div>
        </div>
</template>

<script>
export default {
    name:'profileHeader',
    data(){
        return{}
    },
    props:{
        profile:Object,
    }
}
</script>

<style scoped>
.Header{
    background:#fff;
    color:black;
    opacity: 0.7;
    padding:10px;
    text-align: center;
    padding-top:30px;
    margin-bottom:5px;
}
.TouXiang{
    width:100px;
    height:100px;
    border-radius: 50%;
}
.Center{
    font-size:13px;
    font-weight: bold;
}
.Name{
    font-size:40px;
    font-weight: bold;
}
.icon{
    margin-right: 10px;
}
</style>