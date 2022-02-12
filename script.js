const input1 = document.getElementById('input1');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        let oper = e.target.textContent;
        input1.value += oper;
        input1.focus();

    });
});

const myNumb = document.querySelectorAll('.myNumb');
myNumb.forEach(item => {
    item.addEventListener('click', (e) => {
        input1.value += +e.target.innerHTML;
        input1.focus();
    });
});

const myNumbOrig = document.querySelectorAll('.myNumbOrig');
myNumbOrig.forEach(item => {
    item.addEventListener('click', (e) => {
        let skobki = e.target.textContent;
        input1.value += skobki;
        input1.focus();
    });
});

document.querySelector('.btn-delete').addEventListener('click', () => {
    input1.value = '';
    document.querySelector('.btn-delete').classList.remove('active');
    input1.focus();
});

const result = document.getElementById('result');
result.addEventListener('click', (e) => {
    if (input1.value == '') {

    } else {
        input1.value = eval(input1.value).toFixed();
        document.querySelector('.btn-delete').classList.add('active');
    }
});














