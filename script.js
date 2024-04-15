let formuser = document.getElementById("form-user") 
const username = document.getElementById("Username")
let langus = document.querySelector(".langus")
let input = document.querySelector("input")
let SearshtermEl = document.getElementById("Searsh-term")
let reposEl = document.querySelector(".repos")

formuser.addEventListener("submit", formsubmit)
langus.addEventListener("click",handleclik)




function formsubmit(e){
    e.preventDefault()
    let usernames = username.value.trim()

    if(usernames){
        reposEl.innerHTML = ""
        getUserRepos(usernames)
        username.value=""
    }else{
        
        alert("Please enter your username")
    }

}
function getUserRepos(username)
{
    username.innerHTML=""
    
    let api = "https://api.github.com/users/"+username+"/repos"
    fetch(api)
        .then(res => res.json())
        .then(date =>displayRepos(date , username))
        .catch(err => alert("try agin"))
}
function displayRepos(repos , Searshterm){

    if(repos.length == 0){
        reposEl.innerHTML ="No Repse...!"
        return;
    }
    SearshtermEl.innerHTML = Searshterm;

    repos.forEach(repo => {
        let usernamegithub = repo.owner.login+ "/" +repo.name;
        reposEl.innerHTML += `
            <a href="/ropse.html?repo=${usernamegithub}" class="repos-item">
                <span>${repo.owner.login}/${repo.name}</span>
                <span >${repo.open_issues_count > 0 ?  '<i class="fas fa-times"></i>' : '<i class="fas fa-check-square"></i>'}</span>
            </a>`
})
}
function handleclik(e){
    let lng = e.target.getAttribute("data-type")

    if(lng){
        reposEl.innerHTML = ""
        getLanguges(lng)
    }
}
function getLanguges(lng){
    let api = "https://api.github.com/search/repositories?q="+lng;
    fetch(api)
        .then(res => res.json())
        .then(date =>displayRepos(date.items ,lng))
        .catch(err => alert("try agin"))

}