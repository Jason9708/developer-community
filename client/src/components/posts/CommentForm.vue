<template>
        <div>
            <div class="Title">
            Speak something...
            </div>
            <div class="Postform">
            <form @submit.prevent="submit">
                <TextArea
                    class="tArea"
                    name="text"
                    placeholder="随便说点..."
                    v-model="text"
                    :error="errors.text"
                ></TextArea>
                <input type="submit" class="btn" value="→"/>
            </form>
            </div>
        </div>
</template>

<script>
import TextArea from '../common/TextAreaGroup'
export default {
    name:'CommentForm',
    data(){
        return{
            text: "",
            errors: ""
        }
    },
    props:{
        postId:String
    },
    components:{
        TextArea
    },
    methods:{
        submit(){
            // 获取user 需要用到用户信息
            const user = this.$store.getters.user;
            const newComment = {
                text: this.text,
                name: user.name,
                avater: user.avater
            };

            // 添加评论
            this.$axios
                .post(`http://localhost:5000/api/posts/comment/${this.postId}`, newComment)
                .then(res => {
                    this.errors = ""; // 清空错误提示
                    this.text = ""; // 清空文本
                    //注册自动刷新
                    this.$emit("update");
                })
                .catch(error => {
                    this.errors = error.response.data;
                    alert("评论失败!!")
                });
        }
    }
}
</script>

<style scoped>
.Postform{
    border:1px solid #fff;
    padding:15px;
    padding-top:15px;
    margin-bottom:5px;
    font-weight: bold;
    font-size:13px;
    text-align: left;
    margin-bottom:100px;
}
.Title{
    color:black;
    height: 30px;
    line-height: 30px;
    padding-left:20px;
    background:#fff;
    /* border-radius:5px 5px 0px 0px; */
    opacity: 0.7;
    margin-top:50px;
}
.btn{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    border-radius: 3px;
    color:#fff;
    width:70px;
    padding-left:10px;
    text-align:left;
}
.btn:hover{
    background:rgb(23, 99, 63);
    border:1px solid rgb(23, 99, 63);
    padding-left:45px;
    transition:0.5s ease;
}
</style>