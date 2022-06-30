let btnAdd = document.querySelector('#btn__add--circle');

let btnRemoveBg = document.querySelector('#btn__remove--background');

let contentCircle = document.querySelector('.content__circles');

let bgBlur = document.querySelector('.bg__blur--absolute');

let bgBlurContent = document.querySelector('.bg__blur');

let valueInputRange = document.querySelector('#input__range--value');

let size = document.querySelector('#input__range--size');

let id = 0;

size.addEventListener('change', () =>{
    valueInputRange.textContent = `${size.value}px`;
});

btnAdd.addEventListener('click', () => {

    id++;

    contentCircle.innerHTML += `<span id="${id}" class="figure"><div class="options">Selected</div></span>`;

    let figures = document.querySelectorAll('.figure')

    
    figures.forEach(f => {
        

        // let id = f.getAttribute('id');

        f.addEventListener('click', function(){

               
            this.style.width = `${size.value}px`;
            this.style.height = `${size.value}px`;

        })


    });



    var circles = document.querySelectorAll('.figure');

    var mousePosition;
    var offset = [0, 0];
    var isDown = false;


    for (let i = 0; i < circles.length; i++) {


        var element = circles[i];


        element.addEventListener('mousedown', function (e) {
            isDown = true;
            offset = [
                this.offsetLeft - e.clientX,
                this.offsetTop - e.clientY
            ];
        });

        element.addEventListener('mouseup', function () {
            isDown = false;
        });

        element.addEventListener('mousemove', function (event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {

                    x: event.clientX,
                    y: event.clientY

                };

                this.style.left = (mousePosition.x + offset[0]) + 'px';
                this.style.top = (mousePosition.y + offset[1]) + 'px';
            }
        });

        element.addEventListener('click', function () {
            let hexCode = '#' + Math.random().toString(16).substring(2, 8);
            this.style.backgroundColor = hexCode;
        })

    }

});

btnRemoveBg.addEventListener('click', () => {

    bgBlur.classList.toggle('opacity-0');

    btnRemoveBg.textContent === 'Quitar blur' ?
    btnRemoveBg.textContent = 'Colocar blur' :
    btnRemoveBg.textContent = 'Quitar blur'

});