<template>
    <div class="post">
        <div class="container">
            <div class="window">
                <a class="back-btn" @click.prevent="$router.go(-1)">←</a>
                <!-- 展示评论内容 -->
                <PostFeed v-if="postData != null"
                :post="postData"
                :showAction=false />
                <!-- 评论表单 -->
                <CommentForm 
                    v-if="postData != null"
                    :postId="postData._id"
                    @update="getPost(postData._id)"/>
                <!--展示评论信息-->
                <div  v-if="postData != null && postData.comments.length>0">
                <CommentFeed 
                    v-for="comment in postData.comments"
                    :key="comment._id"
                    :comment=comment
                    :postId="postData._id"
                    @update="getPost(postData._id)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostFeed from './PostFeed'
import CommentForm from './CommentForm'
import CommentFeed from './CommentFeed'
export default {
    name:"post",
    data(){
        return{
            postData:null,
            errors:{}
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm => {
            vm.getPost(to.params.id);
        })
    },
    methods:{
        getPost(id){
            this.$axios.get(`http://localhost:5000/api/posts/${id}`)
            .then(res => {
                this.postData = res.data;
                this.errors={};
            }).catch(err => {
                this.postData = null;
                this.errors = err.response.data;
            })
        }
    },
    components:{
        PostFeed,
        CommentForm,
        CommentFeed
    }
}
</script>

<style scoped>
.post{
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
    font-size:20px;
}
.back-btn:hover{
    transition:0.5s ease;
    color:rgb(247, 68, 68);
}
</style>

