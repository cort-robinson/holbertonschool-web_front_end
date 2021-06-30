document.addEventListener('DOMContentLoaded', () => {
    function setCookies() {
        document.cookie = 'firstname=' + document.getElementById('firstname').value;
        document.cookie = 'email=' + document.getElementById('email').value;
    }

    function showCookies() {
        newPara = document.createElement('p');
        newPara.innerHTML = 'Cookies: ' + document.cookie;
        document.body.append(newPara);
    }

    document.getElementById('login-btn').onclick = setCookies;
    document.getElementById('cookies-btn').onclick = showCookies;
});
