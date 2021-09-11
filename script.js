const pictures = document.querySelectorAll('.picture img');
const pictureP = document.querySelector('.picture-parent img');
const sizes = document.querySelectorAll('.block');
const sizeT = document.querySelector('.size span');
const button = document.querySelector('button');
const blockS = document.querySelector('.s-block');
const butonB = document.querySelector('.s-block button');
const basketNumber = document.querySelector('.s-p span');
const basketB = document.querySelector('.basket-d a');
const nameP = document.querySelector('.name-price h1');
const bakset = document.querySelector('.s-p');
let v = document.querySelector('.v');
let basketD = document.querySelector('.basket-d');
let none = null;
let one = 1;

pictures.forEach((item) => {
    item.addEventListener('mouseover', () => {
        pictureP.src = item.src;
    });
});

sizes.forEach((item) => {
    item.addEventListener('click', (e) => {
        sizeT.textContent = item.textContent;
        sizes.forEach((i) => {
            i.classList.remove('work');
        });
        item.classList.add('work');
    });
    button.addEventListener('click', () => {
        if (sizeT.textContent == item.textContent) {
            basketBlock();
            let basketNumbers = document.querySelectorAll('.basket-b');
            basketNumber.innerHTML = basketNumbers.length;
        } else if (sizeT.textContent == '') {
            blockS.classList.add('open');
        }
    });
});

butonB.addEventListener('click', () => {
    blockS.classList.remove('open');
});

function basketBlock() {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let hThree = document.createElement('h3');
    let span = document.createElement('span');
    basketB.appendChild(div);
    div.classList.add('basket-b');
    hThree.textContent = nameP.textContent;
    span.textContent = sizeT.textContent;
    img.src = pictureP.src;
    div.appendChild(img);
    div.appendChild(hThree);
    div.appendChild(span);
    v.style.display = 'none';
}

bakset.addEventListener('click', () => {
    basketD.classList.toggle('b-work');
});
