<template>
    <div class="About">
            <div class="Center">
                <h3 class="Title">个人介绍</h3>
                <p class="content">
                   <span v-if="profile.bio">{{profile.bio}}</span>
                   <span v-else>没有填写介绍信息</span>
                </p>
                <hr />
                <h3 class="Title">个人技能</h3>
                <div class="Skills">
                    <div class="Skill" 
                      v-for="(skill, index) in profile.skills" 
                      :key="index">
                      {{skill}}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'profileAbout',
    data(){
        return{}
    },
    props:{
        profile:Object,
    }
}
</script>

<style scoped>
.About{
    background:#fff;
    color:black;
    opacity: 0.7;
    padding:10px;
    padding-top:5px;
    margin-bottom:5px;
    text-align: center;
    font-weight: bold;
    font-size:13px;
}
.Skill{
    display: inline;
    margin-right:20px;
    font-weight: bold;
}
</style>