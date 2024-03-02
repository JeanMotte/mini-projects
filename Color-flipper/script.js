const body = document.getElementsByTagName('body')[0]
const randomButton = document.querySelector("#btnRandom");

function setColor(name) {
    body.style.backgroundColor = name;
}

randomButton.addEventListener('click', () => {
    const colors = ['#EA2B1F','#17A398','#725AC1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
})