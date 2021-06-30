document.addEventListener('DOMContentLoaded', () => {
    function setCookies() {
        const d = new Date();
        d.setTime(d.getTime() + (10*24*60*60*1000));
        document.cookie = 'firstname=' + document.getElementById('firstname').value;
        document.cookie = 'email=' + document.getElementById('email').value;
        document.cookie = 'expires=' + d.toUTCString();
    }

    function showCookies() {
        newPara = document.createElement('p');
        newPara.innerHTML = 'Cookies: ' + document.cookie;
        document.body.append(newPara);
    }

    document.getElementById('login-btn').onclick = setCookies;
    document.getElementById('cookies-btn').onclick = showCookies;
});
