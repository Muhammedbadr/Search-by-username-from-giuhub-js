let reposEl = document.querySelector(".repos")

function getReponoe(){
    let qurtor = document.location.search;

    let reposName = qurtor.split("=")[1];
    if(reposName){
        getIssue(reposName)
    }
}

function getIssue(reposName){
    
    let apiUrl = "https://api.github.com/repos/" + reposName + "/issues";
    fetch(apiUrl)
        .then(res => res.json())
        .then(data =>displayissues(data))
        .catch(err => alert("try agin"))
}



function displayissues(issues){

    if(issues.length == 0){
        reposEl.innerHTML = "No Repse...!"
        return;
    }


    issues.forEach(issue => {
        reposEl.innerHTML += `
            <a href='' class="repo-item">
                <span>${issue.title}</span>
            </a>

        `
})

}
getReponoe()