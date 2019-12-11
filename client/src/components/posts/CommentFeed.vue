<template>
    <div class="commentFeed">
        <div>
        <div>
            <!-- <a>
            <img class="TouXiang"
                    src="../../assets/TouXiang.jpg" alt=""/>
            </a> -->
            <!-- <br /> -->
            <p class="Title">{{comment.name}}</p>
        </div>
        <div>
            <p class="content">{{comment.text}}
                <!-- 判断是否可以删除评论 -->
                <button 
                class="delete-btn"
                v-if="user != null && user.id == comment.user"
                type="button"
                @click="deleteClick(comment._id)"
                >×
            </button>
            </p>
           <!-- 判断是否可以删除评论 -->
            <!-- <button 
                class="delete-btn"
                v-if="user != null && user.id == comment.user"
                type="button"
                @click="deleteClick(comment._id)"
                >×
            </button> -->
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'commentFeed',
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
        comment:Object,
        postId:String
    },
    methods:{
        //删除评论  通过id删除对应评论
        deleteClick(id){
            this.$axios.delete(`http://localhost:5000/api/posts/comment/${this.postId}/${id}`)
            .then((res) => {
                //删除成功 自动更新  父级调用（子传父）
                this.$emit('update');
            }).catch((err) => {
                alert(err.response.data);
            })
        }
    }
}
</script>

<style scoped>
.commentFeed{
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
    height:20px;
    font-size:13px;
    line-height: 20px;
}
/* 按钮样式 */
.delete-btn{
    margin-left:10px;
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