<template>
    <div class="Education">
        <h4 class="Title">Education</h4>
        <table class="table">
                <tr>
                  <th>学校</th>
                  <th>学历</th>
                  <th>年份</th>
                  <th />
                </tr>
                <tr v-for="edu in education" :key="edu._id">
                    <td>{{edu.school}}</td>
                    <td>{{edu.degree}}</td>
                    <td>
                    {{edu.from}} - {{edu.to ? edu.to : '至今'}}
                    </td>
                    <td>
                    <button class="delete-btn" @click="deleteClick(edu._id)">
                        ×
                    </button>
                    </td>
                </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:"educatioin",
    data() {
    return {};
    },
    props: {
        education: Array
    },
    created(){
        console.log(this.education);
    },
    methods: {
        deleteClick(id) {
        //   this.$axios
        //     .delete(`http://localhost:5000/api/profile/experience/${id}`)
        //     .then(res => {
        //       console.log(res.data);
        //       //   this.profile = res.data;
        //     })
        //     .catch(error => {
        //         console.log(err);
        //     });

        //调用父组件的方法 (Vue2.x以上不允许子组件修改父组件的数据 因此通过使用调用父组件方法的方法)
        this.$emit("deleteEducation", id);
        }
    }
}
</script>

<style scoped>
.Education{
    margin-top:30px;
    padding:10px 20px 10px 20px;
    border:0px;
    background:#fff;
    border-radius: 8px;
    color:black;
    width:500px;
    opacity:0.7;
}
.Title{
    margin-top:0px;
    margin-bottom:10px;
    font-size:18px;
}
table{
    font-size:13px;
    text-align: center;
    border-collapse: separate;
    border-spacing: 30px 10px;
}


.delete-btn{
    border:1px solid rgb(240, 65, 65);
    background:rgb(240, 65, 65);
    border-radius: 3px;
    color:#fff;
    font-size:12px;
    width:60px;
    cursor: pointer;
    padding-left:10px;
    text-align:left;
}
.delete-btn:hover{
    background:rgb(145, 42, 42);
    border:1px solid rgb(145,42,42);
    padding-left:40px;
    transition:0.4s ease;
}


</style>