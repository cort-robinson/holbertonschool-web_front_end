function createElement(data) {
    let newPara = document.createElement('p');
    newPara.innerHTML = data;
    document.body.append(newPara);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.onload = () => callback(JSON.parse(req.responseText).query.pages[21721040].extract);
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.send();
}

queryWikipedia(createElement);
