

let btn = document.querySelector('.btn-switch')
let sky = document.querySelector('.sky')
let sun = document.querySelector('.sun')

 btn.addEventListener('click', function(){ 

    if  (btn.innerHTML == 'Включить Луну!') {
        sky.style.backgroundImage = 'url(https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_derevo_noch_derevo_117028_1920x1080.jpg)'
        sky.style.backgroundRepeat = 'no-repeat'
        sky.style.backgroundSize = '100% 100%'

        sun.style.background = '#e3f2c2'
        btn.innerHTML = 'Включить Сонце'
    }else {
        sun.style.background = '#f5e555'
        sky.style.backgroundImage = 'linear-gradient(to bottom,#65a9fe,#ebb2b1)'
        btn.innerHTML = 'Включить Луну!'
    }  
});
  