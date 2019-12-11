<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <h1 class="Title">Information</h1>
                <p v-if="user !== null" class="title">Welcome : 
                    <router-link v-if="profile == null" to="/prfiles" class="Link">{{user.name}}</router-link>
                    <router-link v-else :to="`/profile/${profile.handle}`" class="Link">{{user.name}}</router-link>
                    </p>
                <div v-if="profile != null">
                    <!--编辑个人信息，添加个人经历，添加教育经历-->
                    <ProfileActived />
                    <!--展示个人经历-->
                    <Experience @deleteExperience="deleteExperience" :experience="profile.experience"/>
                    <!--展示教育经历-->
                    <Education @deleteEducation="deleteEducation" :education="profile.education"/>
                    <div>
                        <button class='del-btn' @click="deleteClick">删除当前账号</button>
                    </div>
                </div>
                <div v-else>
                    <p class="tip">没有任何相关的个人信息，请添加个人信息</p>
                    <router-link to="/createProfile" class="add-btn"><span class='left'>ADD</span><span class='right'>→</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileActived from './common/ProfileActived';
import Experience from './common/Experience';
import Education from './common/Education';
export default {
    name:"Dashboard",
    data() {
        return {
            profile:null
        };
    },
    components:{
        ProfileActived,
        Experience,
        Education
    },
    computed: {
        user(){
            return this.$store.getters.user;
        }
    },
    methods:{
        //看是否有个人信息 有则显示
        getProfileData(){
            this.$axios.get("http://localhost:5000/api/profile")
            .then((res) => {
                // console.log(res.data);
                this.profile = res.data;
                //分发action 更新store
                this.$store.dispatch("setProfile",this.profile);
            }).catch(err => {
                console.log(err.response);
                //分发action 清空store
                this.$store.dispatch("setProfile",null);
            });
        },
        deleteClick(){
            this.$axios.delete("http://localhost:5000/api/profile")
            .then((res) => {
                this.profile = null;
                //更新store
                this.$store.dispatch("clearCurrentState");
                this.$router.push("/login");
            }).catch((err) => {
                console.log(err);
            });
        },
        deleteExperience(id){
                this.$axios.delete(`http://localhost:5000/api/profile/experience/${id}`)
                .then(res => {
                      console.log(res.data);
                      this.profile = res.data;
                })
                .catch(error => {
                    console.log(err);
                });
        },
        deleteEducation(id){
                this.$axios.delete(`http://localhost:5000/api/profile/education/${id}`)
                .then(res => {
                      console.log(res.data);
                      this.profile = res.data;
                })
                .catch(error => {
                    console.log(err);
                });
        }
    },
    created(){
        // this.getProfileData();
    },
    //导航守卫
    beforeRouteEnter(to,from,next){
        next(vm => {
            vm.getProfileData();
        });
    }
}
</script>

<style scoped>
.dashboard{
    display: block;
    position: relative;
    background:url("../assets/landing.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height:auto;
    min-height: 660px;
    padding-bottom:50px;
}
.container{
    display: block;
    position:absolute;
    width:1000px;
    height:350px;
    top:30px;
    left:10%;
    color:#fff;
    animation:mymove 2s 1;
    -moz-animation:mymove 2s 1; /* Firefox */
    -webkit-animation:mymove 2s 1; /* Safari and Chrome */
    -o-animation:mymove 2s 1; /* Opera */
    text-align: left;
}
@keyframes mymove
{
from {left:-60px;}
to {left:10%;}
}
@-moz-keyframes mymove /* Firefox */
{
from {left:-60px;}
to {left:10%;}
}
@-webkit-keyframes mymove /* Safari and Chrome */
{
from {left:-60px;}
to {left:10%;}
}
@-o-keyframes mymove /* Opera */
{
from {left:-60px;}
to {left:10%;}
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
.tip{
    width:400px;
    padding:10px 20px 10px 20px;
    border-top:1px solid #fff;
    border-bottom:1px solid #fff;
    border-radius: 3px;
    margin-bottom:40px;
}

/*-----------------------------------------------------------------------------------*/
.add-btn{
    display: block;
    position: relative;
    padding-right:0px;
    border:1px solid #fff;
    background:transparent;
    border-radius: 3px;
    color:#fff;
    width:150px;
    height:30px;
    line-height: 30px;
    text-decoration: none;
}
.left{
    margin-left:10px;
}
.right{
    margin-left:70px;
}
.add-btn:hover{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    transition:0.4s ease;
}
.add-btn:hover .right{
    transition:0.4s ease;
    margin-left:80px;
}

/*-----------------------------------------------------------------------------------*/
.del-btn{
    margin-top:20px;
    border:1px solid rgb(240, 65, 65);
    background:rgb(240, 65, 65);
    border-radius: 3px;
    color:#fff;
    font-size:12px;
    padding:5px 20px 5px 20px;
    cursor: pointer;
}
.del-btn:hover{
    background:rgb(145, 42, 42);
    border:1px solid rgb(145,42,42);
    transition:0.4s ease;
}

/*----------------------------------------------------------*/
.Link{
    color:#fff;
    text-decoration:none;
    font-size:17px;
}
.Link:hover{
    color:rgb(32, 141, 90);
    transition:0.4s ease;
}
</style>
