<template>
    <div class="postFeed">
        <div>
        <div>
            <!-- <a>
            <img class="TouXiang"
                    src="../../assets/TouXiang.jpg" alt=""/>
            </a> -->
            <!-- <br /> -->
            <p class="Title">{{post.name}}</p>
        </div>
        <div>
            <p class="content">{{post.text}}</p>
            <span v-if="showAction">
            <button
                class="like-btn"
                type="button" 
                @click="likeClick(post._id)">  
                <!-- <i class="fas fa-thumbs-up" :class="{'text-info' : findUserLike}"></i> -->
                <span><img src="../../assets/like.png" /></span>
                <!-- 点赞 -->
                <span>{{post.likes.length}}</span>
            </button>
            <button
                class="unlike-btn" 
                type="button"
                @click="unlikeClick(post._id)">
                <!-- <i class="text-secondary fas fa-thumbs-down"></i> -->
                <span><img src="../../assets/unlike.png" /></span>
                <!-- 取消点赞 -->
            </button>
            <router-link class="comment"
                :to="'/post/'+post._id">
                鼓励留言
            </router-link>

            <!-- 判断是否可以删除留言 -->
            <button 
                class="delete-btn"
                v-if="user != null && user.id == post.user"
                type="button"
                @click="deleteClick(post._id)"
                >×
            </button>
            </span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'postFeed',
    data(){
        return{}
    },
    computed: {
        //获取当前用户
        user(){
            return this.$store.getters.user;
        }
    },
    props:{
        post:Object,
        showAction:Boolean
    },
    methods:{
        //删除评论  通过id删除对应评论
        deleteClick(id){
            this.$axios.delete(`http://localhost:5000/api/posts/${id}`)
            .then((res) => {
                //删除成功 自动更新  父级调用（子传父）
                this.$emit('update');
            }).catch((err) => {
                alert(err.response.data);
            })
        },
        //点赞
        likeClick(id){
            this.$axios.post(`http://localhost:5000/api/posts/like/${id}`)
            .then((res) => {
                //成功点赞，自动更新 父级调用
                this.$emit("update");
            }).catch((err) => {
                alert("你已经赞过了呢！！");
            })
        },
        //取消点赞
        unlikeClick(id){
            this.$axios.post(`http://localhost:5000/api/posts/unlike/${id}`)
            .then((res) => {
                //成功取消点赞,自动更新 父级调用
                this.$emit("update");
            }).catch((err) => {
                alert("您未点赞呢！！");
            })
        }
    }
}
</script>

<style scoped>
.postFeed{
    background:#fff;
    color:black;
    opacity: 0.7;
    padding:5px 10px 10px 20px;
    margin-top:10px;
}
.Title{
    font-size:20px;
    font-weight: bold;
}
.content{
    text-indent: 30px;
}

/* 按钮样式 */
.like-btn{
    background:#fff;
    padding-top:4px;
    color:black;
    border:1px solid black;
    border-radius: 2px;
    margin-right: 10px;
    cursor: pointer;
}
.like-btn:hover{
    background:rgb(45, 197, 126);
    border:1px solid rgb(45, 197, 126);
    transition:0.5s ease;
}
.unlike-btn{
    background:#fff;
    padding-top:4px;
    color:black;
    border:1px solid black;
    border-radius: 2px;
    margin-right: 10px;
    cursor: pointer;
}
.unlike-btn:hover{
    background:rgb(240, 77, 77);
    border:1px solid rgb(240, 77, 77);
    transition:0.5s ease;

}
.comment{
    text-decoration: none;
    border:1px solid black;
    margin-right: 15px;
    font-size:13px;
    padding:3px 2px 2px 5px;
    color:black;
    border-radius: 2px;
}
.comment:hover{
    background:rgb(46, 110, 228);
    color:#fff;
    transition:0.4s ease;
}
.delete-btn{
    border:1px solid rgb(240, 65, 65);
    background:rgb(240, 65, 65);
    border-radius: 3px;
    color:#fff;
    cursor: pointer;
}
.delete-btn:hover{
    background:rgb(145, 42, 42);
    border:1px solid rgb(145,42,42);
    transition:0.4s ease;
}
/*--------------------------------------------------------*/
</style>

