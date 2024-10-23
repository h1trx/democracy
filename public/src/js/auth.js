async function auth () {
    const token = localStorage.getItem('auth');

    fetch('/api/user/auth', {
        method: 'POST',
        headers: {
            'auth': `${token}`
        }
    })
    .then(response => {
        console.log(response) 
        if (response.ok) {
            console.log(response.ok)
        }      
    }).catch(err => {
        console.error(err)
    })
}

//auth()
