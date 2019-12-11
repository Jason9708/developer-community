<template>
    <div class="create-profile">
        <div class="container">
            <div class="row">
                <a class="back-btn" @click.prevent="$router.go(-1)">←</a>
                <h1 class="Title">Edit Information</h1>
                <small class="must-input">* 表示必填项</small>
                <!-- form表单 -->
                <form @submit.prevent="submit">
                    <p><input class="Input"
                        type='text'
                        name='handle'
                        placeholder="* Profile handle"
                        v-model="msgInfo.handle"
                        :error='errors.handle'
                    /></p>
                    <SelectList 
                        name="status"
                        :error="errors.status"
                        v-model="msgInfo.status"
                        :options="options"
                    />
                    <p><input class="Input"
                        type='text'
                        name='company'
                        placeholder="可以是你自己的公司或者是你的在职公司"
                        v-model="msgInfo.company"
                        :error='errors.company'
                    /></p>
                    <p><input class="Input"
                        type='text'
                        name='website'
                        placeholder="你公司网址或者是你在职公司网址"
                        v-model="msgInfo.website"
                        :error='errors.website'
                    /></p>
                    <p><input class="Input"
                        type='text'
                        name='location'
                        placeholder="你所在的城市及所在区 (例如. 北京市昌平区)"
                        v-model="msgInfo.location"
                        :error='errors.location'
                    /></p>
                    <p><input class="Input"
                        type='text'
                        name='skills'
                        placeholder="编程语言技能 (例如: HTML,CSS,JavaScript,PHP)"
                        v-model="msgInfo.skills"
                        :error='errors.skills'
                    /></p>
                    <p><input class="Input"
                        type='text'
                        name='githubusername'
                        placeholder="Github 用户名"
                        v-model="msgInfo.githubusername"
                        :error='errors.githubusername'
                    /></p>
                    <TextArea
                        placeholder="自我介绍"
                        name='bio'
                        v-model="msgInfo.bio"
                        :error='errors.bio'
                    ></TextArea>
                    <div>
                        <button type="button" class="choose-btn" @click="displaySocialInputs = !displaySocialInputs">Add Social Account</button>
                        <!-- <span>选项</span> -->
                    </div>
                    <div v-show="displaySocialInputs">
                        <InputGroup
                          placeholder="WeChat"
                          name="wechat"
                          v-model="msgInfo.wechat"
                          :error='errors.wechat'
                        ></InputGroup>
                        <InputGroup
                          placeholder="QQ"
                          name="QQ"
                          v-model="msgInfo.QQ"
                          :error='errors.QQ'
                        ></InputGroup>
                        <InputGroup
                          placeholder="腾讯课堂"
                          name="tengxunkt"
                          v-model="msgInfo.tengxunkt"
                          :error='errors.tengxunkt'
                        ></InputGroup>
                        <InputGroup
                          placeholder="网易云课堂"
                          name="wangyikt"
                          v-model="msgInfo.wangyikt"
                          :error='errors.wangyikt'
                        ></InputGroup>
                    </div>
                    <input type="submit" class="submit-btn" value="→"/>
                </form>
                <span class="line-top"></span>
                <span class="line line-left"></span>
                <span class="line line-right"></span>
                <span class="line line-bottom"></span>
            </div>
        </div>
    </div>
</template>

<script>
import TextArea from './common/TextAreaGroup';
import SelectList from './common/SelectListGroup';
import InputGroup from './common/InputGroup';
export default {
    name:'CreateProfile',
    data() {
        return {
            msgInfo: {
                handle: "",
                company: "",
                website: "",
                location: "",
                status: "请选择您的职业",
                skills: "",
                githubusername: "",
                bio: "",
                wechat: "",
                QQ: "",
                tengxunkt: "",
                wangyikt: ""
            },
            errors:{},
            displaySocialInputs:false,
            options: [
                { label: "0", value: "请选择您的职业" },
                { label: "Junior Developer", value: "前端初级工程师" },
                { label: "Senior Developer", value: "前端中级工程师" },
                { label: "HighDeveloper", value: "前端高级工程师" },
                { label: "Manager", value: "前端管理" },
                { label: "backend Developer", value: "后端开发" },
                { label: "Python machine learning", value: "Python机器学习" },
                { label: "Other", value: "其他" }
            ],
        }
    },
    components:{
        TextArea,
        SelectList,
        InputGroup
    },
    beforeRouteEnter(to,from,next){
        next(vm =>{
            // let profile = vm.$store.getters.profile;
            // vm.msgInfo = profile;
            vm.getCurrentProfile();
        })
    },
    methods: {
        submit(){
            //axios发送数据到接口
            this.$axios.post("http://localhost:5000/api/profile",this.msgInfo)
            .then((res) => {
                //清空错误
                this.errors = {};
                this.$store.dispatch("setProfile",res.data);
                this.$router.push('/dashboard');
            }).catch((err) =>{
                this.errors = err.response.data;
                alert("add fail  👉  信息填写有误")
            });
        },
        getCurrentProfile(){
                let profile = this.$store.getters.profile;

                profile.company = profile.company ? profile.company : "";
                profile.website = profile.website ? profile.website : "";
                profile.location = profile.location ? profile.company : "";
                profile.githubusername = profile.githubusername
                    ? profile.githubusername
                    : "";
                profile.bio = profile.bio ? profile.bio : "";

                profile.social = profile.social ? profile.social : {};
                profile.wechat = profile.social.wechat ? profile.social.wechat : "";
                profile.QQ = profile.social.QQ ? profile.social.QQ : "";
                profile.tengxunkt = profile.social.tengxunkt
                    ? profile.social.tengxunkt
                    : "";
                profile.wangyikt = profile.social.wangyikt ? profile.social.wangyikt : "";
                profile.skills = profile.skills.length ? profile.skills.join(",") : "";
                
                this.msgInfo = profile;
        }
    },
}
</script>

<style scoped>
.create-profile{
    position: relative;
    background:url("../assets/landing.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height:100%;
    min-height: 1200px;
    color:#fff;
    /* opacity:0.9; */
}
.container{
    position: absolute;
    top:50px;
    left:30%;
    width:600px;
    height:auto;
    text-align: left;
}
.row{
    position: relative;
    padding:10px 20px 50px 20px;
}
.back-btn{
    cursor:pointer;
    font-size:20px;
}
.back-btn:hover{
    transition:0.5s ease;
    color:rgb(247, 68, 68);
}
.Title{
    margin:20px;
}
/*----------------------------------------------------------------------------------*/
.line-top{
    background:#fff;
    position:absolute;
    height:2px;
    width:100%;
    left:0px;
    top:0px;
    animation:topmove 4s 1;
    -moz-animation:topmove 4s 1; /* Firefox */
    -webkit-animation:topmove 4s 1; /* Safari and Chrome */
    -o-animation:topmove 4s 1; /* Opera */
}
@keyframes topmove
{
from {width:0%;}
to {width:100%;}
}
@-moz-keyframes topmove /* Firefox */
{
from {width:0%;}
to {width:100%;}
}
@-webkit-keyframes topmove /* Safari and Chrome */
{
from {width:0%;}
to {width:100%;}
}
@-o-keyframes topmove /* Opera */
{
from {width:0%;}
to {width:100%;}
}
.line-bottom{
    background:#fff;
    position:absolute;
    height:2px;
    width:100%;
    right:0px;
    bottom:0px;
    animation:bottommove 4s 1;
    -moz-animation:bottommove 4s 1; /* Firefox */
    -webkit-animation:bottommove 4s 1; /* Safari and Chrome */
    -o-animation:bottommove 4s 1; /* Opera */
}
@keyframes bottommove
{
from {width:0%;}
to {width:100%;}
}
@-moz-keyframes bottommove /* Firefox */
{
from {width:0%;}
to {width:100%;}
}
@-webkit-keyframes bottommove /* Safari and Chrome */
{
from {width:0%;}
to {width:100%;}
}
@-o-keyframes bottommove /* Opera */
{
from {width:0%;}
to {width:100%;}
}
.line-left{
    background:#fff;
    position:absolute;
    height:100%;
    width:2px;
    left:0px;
    bottom:0px;
    animation:leftmove 4s 1;
    -moz-animation:leftmove 4s 1; /* Firefox */
    -webkit-animation:leftmove 4s 1; /* Safari and Chrome */
    -o-animation:leftmove 4s 1; /* Opera */
}
@keyframes leftmove
{
from {height:0%;}
to {height:100%;}
}
@-moz-keyframes leftmove /* Firefox */
{
from {height:0%;}
to {height:100%;}
}
@-webkit-keyframes leftmove /* Safari and Chrome */
{
from {height:0%;}
to {height:100%;}
}
@-o-keyframes leftmove /* Opera */
{
from {height:0%;}
to {height:100%;}
}
.line-right{
    background:#fff;
    position:absolute;
    height:100%;
    width:2px;
    right:0px;
    top:0px;
    animation:rightmove 4s 1;
    -moz-animation:rightmove 4s 1; /* Firefox */
    -webkit-animation:rightmove 4s 1; /* Safari and Chrome */
    -o-animation:rightmove 4s 1; /* Opera */
}
@keyframes rightmove
{
from {height:0%;}
to {height:100%;}
}
@-moz-keyframes rightmove /* Firefox */
{
from {height:0%;}
to {height:100%;}
}
@-webkit-keyframes rightmove /* Safari and Chrome */
{
from {height:0%;}
to {height:100%;}
}
@-o-keyframes rightmove /* Opera */
{
from {height:0%;}
to {height:100%;}
}
/*------------------------------------------------------------------*/
/*placeholder字体*/
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
/*------------------------------------------------------------------*/
.choose-btn{
    margin-top:15px;
    border:1px solid #fff;
    background:transparent;
    border-radius: 3px;
    color:#fff;
    width:150px;
    height:30px;
}
.choose-btn:hover{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    transition:0.4s ease;
}
.submit-btn{
    margin-top:20px;
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    border-radius: 3px;
    color:#fff;
    width:70px;
    padding-left:10px;
    text-align:left;
}
.submit-btn:hover{
    background:rgb(23, 99, 63);
    border:1px solid rgb(23, 99, 63);
    padding-left:40px;
    transition:0.5s ease;
}
</style>
