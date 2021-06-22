function changeMode(size, weight, transform, background, color) {
    return () => {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const newPara = document.createElement('p');
    newPara.innerHTML = "Welcome to Holberton!";
    document.body.append(newPara);

    const spookyButton = document.createElement('button');
    spookyButton.innerHTML = "Spooky";
    document.body.append(spookyButton);
    spookyButton.onclick = spooky;

    const darkButton = document.createElement('button');
    darkButton.innerHTML = "Dark mode";
    document.body.append(darkButton);
    darkButton.onclick = darkMode;

    const screamButton = document.createElement('button');
    screamButton.innerHTML = "Scream mode";
    document.body.append(screamButton);
    screamButton.onclick = screamMode;
}

main();
