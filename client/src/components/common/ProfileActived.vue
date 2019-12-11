<template>
    <div class='btnGroup'>
        <router-link to='/edit-profile' class="btn">编辑个人信息</router-link>
        <router-link to='/add-experience' class="btn">添加个人经历</router-link>
        <router-link to='/add-education' class="btn">添加教育经历</router-link>
    </div>
</template>

<script>
export default {
    name:'ProfileActived',
    data() {
        return {}
    }
}
</script>

<style scoped>
.btn{
    text-decoration: none;
    border:1px solid #fff;
    background:transparent;
    border-radius: 3px;
    color:#fff;
    font-size:12px;
    padding:5px 20px 5px 20px;
}
.btn:hover{
    background:rgb(32, 141, 90);
    border:1px solid rgb(32, 141, 90);
    transition:0.4s ease;
}
</style>

