function setCookies() {
    const d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    document.cookie = 'firstname=' + document.getElementById('firstname').value;
    document.cookie = 'email=' + document.getElementById('email').value;
    document.cookie = 'expires=' + d.toUTCString();
}

function showCookies() {
    newPara = document.createElement('p');
    newPara.innerHTML = 'Email: ' + getCookie('email') + ' - Firstname: ' + getCookie('firstname');
    document.body.append(newPara);
}

function getCookie(name) {
    let cname = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

document.getElementById('login-btn').onclick = setCookies;
document.getElementById('cookies-btn').onclick = showCookies;
