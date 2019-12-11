<template>
    <div class="proflieWindow">
        <div class="container">
            <div class='window'>
                <a class="back-btn" @click.prevent="$router.go(-1)">←</a>
                <ProfileHeader v-if='profile' :profile="profile" />
                <ProfileAbout v-if='profile' :profile="profile" />
                <ProfileCreds v-if='profile && (profile.education || profile.experience)' :experience="profile.experience" :education="profile.education" />
                <ProfileGithub v-if='profile && profile.githubusername' :username="profile.githubusername" />
            </div>
        </div>
    </div>
</template>

<script>
import ProfileAbout from './ProfileAbout';
import ProfileHeader from './ProfileHeader';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';

export default {
    name:'profile',
    data(){
        return{
            profile:null
        }
    },
    components:{
        ProfileAbout,
        ProfileHeader,
        ProfileCreds,
        ProfileGithub
    },
    //---导航守卫---
    beforeRouteEnter(to,from,next){
        //请求数据 api/profile/handle/:handle --> 通过handle获取个人信息
        next(vm => {
            //to.params.handle获取handle
            vm.getProfileByHandle(to.params.handle);
        });
    },
    methods:{
        getProfileByHandle(handle){
            // console.log(handle);
            this.$axios.get(`http://localhost:5000/api/profile/handle/${handle}`)
            .then((res) => {
                // console.log(res.data);
                //把data赋给profile
                this.profile=res.data;
            }).catch((err) => {
                this.profile=null;
                // console.log(err.response.data);
            });
        }
    }
}
</script>

<style scoped>
.proflieWindow{
    background:url("../../assets/landing.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height:100%;
    min-height: 1200px;
    color:#fff;
    padding-bottom:50px;
}
.container{
    width:800px;
    margin-left:25%;
    padding-top:30px;
    animation:mymove 2s 1;
    -moz-animation:mymove 2s 1; /* Firefox */
    -webkit-animation:mymove 2s 1; /* Safari and Chrome */
    -o-animation:mymove 2s 1; /* Opera */
}
@keyframes mymove
{
from {margin-left:-25%;}
to {margin-left:25%}
}
@-moz-keyframes mymove /* Firefox */
{
from {margin-left:-25%;}
to {margin-left:25%}
}
@-webkit-keyframes mymove /* Safari and Chrome */
{
from {margin-left:-25%;}
to {margin-left:25%}
}
@-o-keyframes mymove /* Opera */
{
from {margin-left:-25%;}
to {margin-left:25%}
}
.window{
    padding:20px;
    /* background:#fff;
    color:black; */
}
.back-btn{
    cursor:pointer;
    font-size:30px;
}
.back-btn:hover{
    transition:0.5s ease;
    color:rgb(247, 68, 68);
}
</style>

