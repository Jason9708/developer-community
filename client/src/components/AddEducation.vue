<template>
    <div class="add-education">
        <div class="container">
            <div class="row">
                <a class="back-btn" @click.prevent="$router.go(-1)">←</a>
                <h1 class="Title">Add your Education</h1>
                <p class="title">你所毕业的学校，参加的培训等···</p>
                <small class="must-input">* 表示必填项</small>

                <!--form表单-->
                <form @submit.prevent="submit">
                    <p><input class="Input"
                        type='text'
                        name='school'
                        placeholder="* 学校或培训"
                        v-model="msgInfo.school"
                        :error='errors.school'
                    /></p>

                    <p><input class="Input"
                        type='text'
                        name='degree'
                        placeholder="* 学历"
                        v-model="msgInfo.degree"
                        :error='errors.degree'
                    /></p>

                    <p><input class="Input"
                        type='text'
                        name='fieldofstudy'
                        placeholder="专业"
                        v-model="msgInfo.fieldofstudy"
                        :error='errors.fieldofstudy'
                    /></p>

                    <h6>开始时间</h6>
                    <p><input class="Input"
                        type='date'
                        name='from'
                        v-model="msgInfo.from"
                        :error='errors.from'
                    /></p>

                    <h6>结束时间</h6>
                    <p><input class="Input"
                        type='date'
                        name='to'
                        v-model="msgInfo.to"
                        :error='errors.to'
                    /></p>

                    <div class="Checkbox">
                        <input class="cb" type="checkbox" name="current" v-model="msgInfo.current" id="current" />
                        <label class="Label" for="current">
                            当前在校
                        </label>
                    </div>

                    <TextArea
                        placeholder="在校表现"
                        name='description'
                        v-model="msgInfo.description"
                        :error='errors.description'
                    ></TextArea>

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
import TextArea from "./common/TextAreaGroup";
export default {
    name:"AddEducation",
    data () {
        return {
            msgInfo: {
                school: "",
                degree: "",
                fieldofstudy: "",
                from: "",
                to: "",
                current: false,
                description: ""
            },
            errors: {}
        };
    },
    components:{
        TextArea
    },
    methods: {
        submit() {
            if(this.msgInfo.current){
                this.msgInfo.to='在校';
            }
            //提交个人经历到数据库
            this.$axios.post("http://localhost:5000/api/profile/education",this.msgInfo)
            .then((res) => {
                //清空错误
                this.errors = {};
                this.$router.push("/dashboard");
            }).catch((err) => {
                if(err.response.data){
                    this.errors = err.response.data;
                    alert("add fail  👉  信息填写有误");
                }
            });
        }
    },
}
</script>

<style scoped>
.add-education{
    position: relative;
    background:url("../assets/landing.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height:auto;
    min-height: 900px;
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

/*----------------------------------------------------------------------------*/
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
.Checkbox{
    margin-bottom:30px;
}
.Label{
    font-size:12px;
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


