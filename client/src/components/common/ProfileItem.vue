<template>
    <div class="profileitem">
            <!-- <div>
            <img v-if="profileItem.user" :src="profileItem.user.avatar" alt="" />
            </div> -->
            <div class="nor">
            <h3 class="Title" v-if="profileItem.user">{{profileItem.user.name}}</h3>
            <p>{{profileItem.status}}</p>
            <p v-if="profileItem.location">{{profileItem.location}}</p>
            <!--跳转到单个开发者页面 通过handle-->
            <router-link class="more-btn"
                :to="`/profile/${profileItem.handle}`" ><span class='left'>more</span><span class='right'>→</span>
            </router-link>
            </div>
            <div class="skills">
            <h4>SKILLS</h4>
            <ul>
                <li v-for="(skill, index) in profileItem.skills" :key="index">
                    {{skill}}
                </li>
            </ul>
            </div>
    </div>
</template>

<script>
export default {
    name:"profileItem",
    data(){
        return{}
    },
    props:{
        profileItem:Object
    }
}
</script>

<style scoped>
.profileitem{
    display: flex;
    color:black;
    background:#fff;
    width:800px;
    height:auto;
    padding:10px 0px 20px 10px;
    border-radius: 10px;
    opacity: 0.7;
    margin-bottom:10px;
}
.Title{
    margin-left:30px;
    font-size:30px;
}
p{
    padding-left:40px;
    font-size:14px;
}
.more-btn{
    margin-left:40px;
    display: block;
    position: relative;
    padding-right:0px;
    border:1px solid #fff;
    background:rgb(47, 201, 129);
    border-radius: 3px;
    color:#fff;
    width:130px;
    height:30px;
    line-height: 30px;
    text-decoration: none;
}
.left{
    margin-left:10px;
}
.right{
    margin-left:40px;
}
.more-btn:hover{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    transition:0.4s ease;
}
.more-btn:hover .right{
    transition:0.4s ease;
    margin-left:55px;
}
.nor{
    width:200px;
}
.skills{
    /* position:absolute;
    right:100px;
    top:10px; */
    margin-left: 400px;
    text-align: center;
}
ul li{
    list-style:none;
    margin:8px;
}
</style>


