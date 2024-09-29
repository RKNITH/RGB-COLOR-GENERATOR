const hexResult = document.getElementById('hexResult')
const hexBtn = document.getElementById('hexBtn')
const hexCopy = document.getElementById('hexCopy')
const rgbResult = document.getElementById('rgbResult')
const rgbBtn = document.getElementById('rgbBtn')
const rgbCopy = document.getElementById('rgbCopy')
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')


const generateHexColor = () => {
    let hex = '#';
    const chars = 'ABCDEF0123456789';
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }
    return hex;
};

hexBtn.addEventListener('click', () => {
    const color = generateHexColor();
    hexResult.innerHTML = color;
    hexResult.style.backgroundColor = color;
});



hexCopy.addEventListener('click', () => {
    if (hexResult.innerText === '') {
        alert('first generate color')
        return
    }
    window.navigator.clipboard.writeText(hexResult.innerHTML)
    alert('color copied')


});


rgbBtn.addEventListener('click', () => {
    const rgbColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    rgbResult.innerHTML = rgbColor;
    rgbResult.style.backgroundColor = rgbColor;
});

rgbCopy.addEventListener('click', () => {
    if (rgbResult.innerText === '') {
        alert('first generate color')
        return
    }
    window.navigator.clipboard.writeText(rgbResult.innerHTML)
    alert('color copied')


});


