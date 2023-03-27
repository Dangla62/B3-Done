const serbia = {
    area: '88,361 km²',
    population: '7,074,520'
};

const croatia = {
    area: '56,594 km²',
    population: '4,225,316'
};

const hungary = {
    area: '93,030 km²',
    population: '9,772,756'
};

const romania = {
    area: '238,391 km²',
    population: '19,237,691'
};

const bosnia = {
    area: '51,197 km²',
    population: '3,871,643'
};

const montenegro = {
    area: '13,812 km²',
    population: '628,066'
};

const serbiaDiv = document.querySelector('.serbia');
const croatiaDiv = document.querySelector('.croatia');
const hungaryDiv = document.querySelector('.hungary');
const romaniaDiv = document.querySelector('.romania');
const bosniaDiv = document.querySelector('.bosnia');
const montenegroDiv = document.querySelector('.montenegro');

const modal = document.querySelector('#modal');
const close = document.querySelector('#close');
const area = document.querySelector('#area');
const population = document.querySelector('#population');

serbiaDiv.addEventListener('click', () => {
    area.innerHTML = serbia.area;
    population.innerHTML = serbia.population;
    modal.style.display = 'block';
});

croatiaDiv.addEventListener('click', () => {
    area.innerHTML = croatia.area;
    population.innerHTML = croatia.population;
    modal.style.display = 'block';
});

hungaryDiv.addEventListener('click', () => {
    area.innerHTML = hungary.area;
    population.innerHTML = hungary.population;
    modal.style.display = 'block';
});

romaniaDiv.addEventListener('click', () => {
    area.innerHTML = romania.area;
    population.innerHTML = romania.population;
    modal.style.display = 'block';
});

bosniaDiv.addEventListener('click', () => {
    area.innerHTML = bosnia.area;
    population.innerHTML = bosnia.population;
    modal.style.display = 'block';
});

montenegroDiv.addEventListener('click', () => {
    area.innerHTML = montenegro.area;
    population.innerHTML = montenegro.population;
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

function pustiHimnu(a) {
    switch (a) {
        case 'serbia':
            var serbiaAudio = new Audio('himne/serbia-anthem.mp3');
            serbiaAudio.play();
            break;

        case 'croatia':
            alert('croatia');
            break;
    }
}