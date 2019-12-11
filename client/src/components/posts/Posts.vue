<template>
    <div class="feed">
        <div class="container">
            <div class="window">
                <!-- 展示评论表单 -->
                <PostForm 
                @update="getPosts"/>
                <!-- 展示评论内容 -->
                <PostFeed
                    v-for="post in posts"
                    :key="post._id"
                    :post="post"
                    :showAction=true
                    @update="getPosts" />
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from './PostForm'
import PostFeed from './PostFeed'
export default {
    name:'post',
    data(){
        return{
            posts:[],
            errors:{}
        }
    },
    //导航守卫
    beforeRouteEnter(to,from,next){
        next(vm => {
            vm.getPosts();
        })
    },
    methods:{
        getPosts(){
            this.$axios.get("http://localhost:5000/api/posts")
            .then((res) => {
                this.posts = res.data;
            }).catch((err) => {
                this.errors = err.response.data;
            });
        }
    },
    components:{
        PostForm,
        PostFeed
    }
}
</script>

<style scoped>
.feed{
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
</style>

