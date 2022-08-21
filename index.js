const hotels = [
  {
    id: 1,
    name: 'Журавли',
    icon: 'https://admin.upro.group/uploads/zhuravli_40h40_17135e8ef7.png',
    descr: 'Журавли Джемете, Анапа',
    text: 'В отеле “Журавли”, который находится в Джемете, можно отдохнуть по системе “Все включено”: питание “шведский стол”, крытые и открытые подогреваемые бассейны, детская анимация, площадка и комната с воспитателем, своя зеленая территория с беседками и мангальной зоной, бесплатный wi-fi. Пляж и море в 15 минутах ходьбы.',
    stars: 3,
    img: 'https://admin.upro.group/uploads/zhuravli_slider_crosspromo_1_4bad6c10a9.jpg',
    utmMark: '',
  },
  {
    id: 2,
    name: 'Gala Palmira',
    icon: '	https://admin.upro.group/uploads/galapalmira_logo_9bb5792567.png',
    descr: 'Gala Palmira Витязево, Анапа',
    text: 'Отель Gala Palmira расположился в курортном поселке Витязево на берегу Черного моря. Инфраструктура отеля позволяет погрузиться в отдых, не отвлекаясь на повседневные заботы: питание организовано по системе “все включено”, для гостей работают открытый подогреваемый бассейн, бар, шатры-беседки и детская площадка. Увлекательная анимация для взрослых и детей зарядит вас яркими эмоциями. Пляж и море в 10-15 минутах ходьбы.',
    stars: 3,
    img: 'https://admin.upro.group/uploads/galapalamira_slider_cross_Promo_2_b3f0f90ec8.jpeg',
    utmMark: '',
  },
];

const toHTML = (hotel) => `
<li class="list__item" data-id="${hotel.id}">
  <div class="circleHotel">
    <img alt=${hotel.name} src=${hotel.icon} />
  </div>
  <p>${hotel.name}</p>
</li>

`;

function render() {
  const html = hotels.map(toHTML).join('');
  document.querySelector('#hotels').innerHTML = html;
}

render();

const hotelModal = $.modal({
  width: '57em',
});

const listItems = document.querySelectorAll('.list__item');

document.addEventListener('click', (event) => {
  event.preventDefault();
  let id = +event.target.dataset.id || +event.target.parentNode.dataset.id;
  if (id) {
    const hotel = hotels.find((h) => h.id === id);
    hotelModal.open();
    hotelModal.setContent(`
      <div class="modal-header">
        <div class="modal-info">
          <p class="modal-title">${hotel.name}</p>
          <div class="stars-container">    
          </div>
          <span class="modal-close" data-close='true'>&times;</span>
        </div>
        <p class="modal-descr">${hotel.descr}</p>
        <div class="modal-btns">
          <a class="modal-more btn" href="#">Подробнее</a>
          <a class="modal-reserv btn" href="#">Забронировать</a>
        </div>
      </div>
      <div class="modal-body" >
        <div class="modal-text">
            <p>
                ${hotel.text}
            </p>
        </div>
        <div class="modal-img">
            <img
                src=${hotel.img}
                alt="galap"
            />
        </div>
      </div>
    
    `);
    for (let i = 0; i < hotel.stars; i++) {
      const starsContainer = document.querySelector('.stars-container');
      starsContainer.innerHTML += `<img class="hotelStar" src="https://admin.upro.group/uploads/star_411e838288.png" />`;
    }
  }
});

if (window.innerWidth <= 480) {
  document.querySelector('.welcomeText').addEventListener('click', () => {
    if (document.querySelector('.list__item').classList.contains('open')) {
      document.querySelectorAll('.list__item').forEach((el) => {
        el.classList.remove('open');
        el.classList.add('hide');
      });
    } else {
      document.querySelectorAll('.list__item').forEach((el) => {
        el.classList.add('open');
        el.classList.remove('hide');
      });
    }
  });
}
