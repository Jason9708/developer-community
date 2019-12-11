<template>
    <div class="Github">
        <h3>Github仓库信息</h3>
        <div  v-for="repo in repos" :key="repo.id" >
              <div>
                <div>
                  <h4>
                    <a :href="repo.html_url"  target="_blank"> 
                        {{repo.name}}
                    </a>
                  </h4>
                  <p>{{repo.description}}</p>
                </div>
                <div>
                  <span>
                    Stars: {{repo.stargazers_count}}
                  </span>
                  <span>
                    Watchers: {{repo.watchers_count}}
                  </span>
                  <span>
                    Forks: {{repo.forks_count}}
                  </span>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
export default {
    name:'profileGithub',
    data(){
        return{
            clientId: "5f0c96a1f00d386bf9bb",
            clientSecret: "c96e1d139efc95a5ce2fc7e0c8c4ea395c599d88",
            count: 0,
            sort: "created: desc",
            repos: []
        }
    },
    props:{
        username:String
    },
    created(){
        // 请求github地址
    fetch(
      `https://api.github.com/users/${this.username}/repos?per_page=${
        this.count
      }&sort=${this.sort}&client_id=${this.clientId}&client_secret=${
        this.clientSecret
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.repos = data;
        console.log(this.repos);
      })
      .catch(err => console.log(err));
    }
}
</script>

<style scoped>
.Github{
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
</style>