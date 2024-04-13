let formuser = document.getElementById("form-user") 
let Username = document.getElementById("Username")
let langus = document.querySelector(".langus")
let Searshterm = document.getElementById("Searsh-term")
let reposEl = document.querySelector(".repos")

formuser.addEventListener("submit", formsubmit)

function formsubmit(e){
    e.preventDefault()
    let username = Username.value.trim()

    if(username){
        getUserRepos(username)
    }else{
        
        alert("Please enter your username")
    }
}
function getUserRepos(username)
{
    let api = "https://api.github.com/users/"+username+"/repos"
    fetch(api)
        .then(res => res.json())
        .then(date =>displayRepos(date , username))
        .catch(err => alert("try agin"))
}
function displayRepos(repos , Searshterm){
    Searshterm.innerHTML = Searshterm;

    repos.forEach(repo => {
        reposEl.innerHTML += `
            <a href="" class="repos-item">
                <span>${repo.owner.login}/${repo.name}</span>
                <span>${repo.open_issues_count > 0 ?  '<i class="fas fa-times"></i>' : '<i class="fas fa-check-square"></i>'}</span>
            </a>`
})
}