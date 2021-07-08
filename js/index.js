console.log('JS is here!')

document.addEventListener('DOMContentLoaded', callFunction)


function callFunction() {
    console.log('hello from callFunction')
    document.getElementById('github-form').addEventListener('submit', (e) => {
        e.preventDefault()
        console.log('hello form form')
        let nameValue = document.getElementById('search').value
        console.log(nameValue)
        fetchUser(nameValue)
    })
}


function fetchUser(nameValue) {
    fetch(`https://api.github.com/${nameValue}`)
    .then(res => res.json())
    .then(console.log)
}

// need to log submit info
// then post a search request to gitub.com
// then get that result
// then show that result on DOM
