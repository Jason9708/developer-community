<template>
    <div class='Experience'>
        <h4 class="Title">Experience</h4>
        <table class="table">
            <thead>
                <tr>
                  <th>公司</th>
                  <th>职位</th>
                  <th>年份</th>
                  <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="exp in experience" :key="exp._id">
                    <td>{{exp.company}}</td>
                    <td>{{exp.title}}</td>
                    <td>
                    {{exp.from}} - {{exp.to ? exp.to : '至今'}}
                    </td>
                    <td>
                    <button class="delete-btn" @click="deleteClick(exp._id)">
                        ×
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:"experience",
    data() {
    return {};
    },
    props: {
        experience: Array
    },
    created(){
        console.log(this.experience);
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
        this.$emit("deleteExperience", id);
        }
    }
}
</script>

<style scoped>
.Experience{
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


