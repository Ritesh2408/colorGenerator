const rgbBtn = document.querySelector('#rgbBtn');
const rgbH = document.querySelector('#rgbH');
const hexBtn = document.querySelector('#hexBtn');
const regbH = document.querySelector('#hexH');

rgbBtn.addEventListener('click', () => {
    const newColor = RGBColor();
    document.querySelector('#rgb').style.backgroundColor = newColor;
    rgbH.innerText = newColor;
})
hexBtn.addEventListener('click', () => {
    const newColor1 = HexColor();
    document.querySelector('#hex').style.backgroundColor = newColor1;
    hexH.innerText = newColor1;

})
const HexColor = () => {
    const hex = '0123456789ABCDEF'
    const hex1 = Math.floor(Math.random() * 16);
    const hex2 = Math.floor(Math.random() * 16);
    const hex3 = Math.floor(Math.random() * 16);
    const hex4 = Math.floor(Math.random() * 16);
    const hex5 = Math.floor(Math.random() * 16);
    const hex6 = Math.floor(Math.random() * 16);
    return `#${hex[hex1]}${hex[hex2]}${hex[hex3]}${hex[hex4]}${hex[hex5]}${hex[hex6]}`;
}
const RGBColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

