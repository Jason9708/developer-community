<template>
    <div class="Creds">
        <div class="Experience" v-if="experience.length > 0">
            <h3 class="Title">个人经历</h3>
            <ul class="ExperienceList">
                <li class="listItem" 
                    v-for="(exp, index) in experience" :key='index'>
                    <h4>{{exp.company}}</h4>
                    <p>{{exp.from}} - {{exp.to ? exp.to : '至今'}}</p>
                    <p>
                        <strong>职位:</strong> {{exp.title}}
                    </p>
                    <p v-if="exp.location">
                        <strong>地点:</strong> {{exp.location}}
                    </p>
                    <p v-if="exp.description">
                        <strong>岗位职责:</strong>
                        {{exp.description}}
                    </p>
                </li>
            </ul>
        </div>
        <div class="Education" v-if="education.length > 0">
            <h3 class="Title">教育经历</h3>
            <ul class="EducationList">
            <li class="listItem"
                v-for="(edu, index) in education" :key='index'>
                <h4>{{edu.school}}</h4>
                <p>{{edu.from}} - {{edu.to ? edu.to : '至今'}}</p>
                <p>
                <strong>学历: </strong>{{edu.degree}}</p>
                <p v-if="edu.fieldofstudy">
                <strong>所学专业: </strong>{{edu.fieldofstudy}}</p>
                <p>
                <p v-if="edu.description">
                    <strong>在校表现:</strong>
                    {{edu.description}}</p>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'profileCreds',
    data(){
        return{}
    },
    props:{
        experience:Array,
        education:Array
    }
}
</script>

<style scoped>
.Creds{
    display: flex;
}
.Experience{
    width:50%;
    padding:10px;
    background:#fff;
    color:black;
    opacity: 0.7;
    margin-right:5px;
    font-weight: bold;
    margin-bottom:5px;
}
.Education{
    width:50%;
    padding:10px;
    background:#fff;
    color:black;
    opacity: 0.7;
    font-weight: bold;
    margin-bottom:5px;
}
</style>