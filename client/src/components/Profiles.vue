<template>
    <div class="profiles">
        <div class="container">            
                <h1 class="Title">Developers</h1>
                <p class="title">让世界丰富多彩的你们</p>
                <!--展示开发者-->
                <div v-if="profiles.length>0">
                <ProfileItem class="pro-item" v-for="profileItem in profiles" :key="profileItem._id"
                    :profileItem="profileItem"/>
                </div>        
        </div>
    </div>
</template>

<script>
import ProfileItem from './common/ProfileItem'
export default {
    name:'profiles',
    data () {
        return{
            profiles:[]
        }
    },
    components:{
        ProfileItem
    },
    created(){
        this.getProfiles();
    },
    methods:{
        getProfiles(){
            this.$axios.get("http://localhost:5000/api/profile/all")
            .then((res) => {
                this.profiles = res.data;
                this.$store.dispatch("setProfiles",res.data);
                // console.log(res.data)
            }).catch(err => {
                this.profiles = [];
                this.$store.dispatch("setProfiles",[]);
            })
        }
    }
}
</script>

<style scoped>
.profiles{
    position: relative;
    background:url("../assets/landing.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    height:100%;
    min-height: 1200px;
    color:#fff;
    /* opacity:0.9; */
}
.Title{
    margin:0px;
}
.container{
    padding-top:30px;
    margin-left:15%;
    animation:mymove 2s 1;
    -moz-animation:mymove 2s 1; /* Firefox */
    -webkit-animation:mymove 2s 1; /* Safari and Chrome */
    -o-animation:mymove 2s 1; /* Opera */
}
@keyframes mymove
{
from {margin-left:-25%;}
to {margin-left:15%}
}
@-moz-keyframes mymove /* Firefox */
{
from {margin-left:-25%;}
to {margin-left:15%}
}
@-webkit-keyframes mymove /* Safari and Chrome */
{
from {margin-left:-25%;}
to {margin-left:15%}
}
@-o-keyframes mymove /* Opera */
{
from {margin-left:-25%;}
to {margin-left:15%}
}
/* .pro-item{
    display: flex;
    color:black;
    background:#fff;
    width:800px;
    height:auto;
    padding:10px 0px 20px 10px;
    border-radius: 10px;
    opacity: 0.7;
} */

</style>


