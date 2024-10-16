document.addEventListener('DOMContentLoaded', () => {
    // //tabs
    // const tabs = document.querySelectorAll('.tabheader__item'),
    //     tabsContent = document.querySelectorAll('.tabcontent'),
    //     tabsParent = document.querySelector('.tabheader__items');
    //
    // function hideTabContent() {
    //     tabsContent.forEach(item => {
    //         // item.style.display = 'none';
    //         //   заменяем классом
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });
    //
    //     tabs.forEach(item => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }
    //
    // function showTabContent(i = 0) {
    //     // tabsContent[i].style.display = 'block';
    //     // заменяем на класс
    //     tabsContent[i].classList.add('show', 'fade');
    //     tabsContent[i].classList.remove('hide');
    //     tabs[i].classList.add('tabheader__item_active');
    // }
    //
    // hideTabContent();
    // showTabContent();
    //
    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;
    //     if (target && target.classList.contains('tabheader__item')) {
    //         tabs.forEach((item, i) => {
    //             if (target === item) {
    //                 hideTabContent();
    //                 showTabContent(i);
    //             }
    //         });
    //     }
    // });

    // //add Timer
    // const deadline = '2024-10-01';
    //
    // //функция переводит секунды в дни, часы, минуты, секунды
    // function getTimeRemaining(endtime) {
    //     const t = Date.parse(endtime) - Date.parse(new Date());
    //     if (t <= 0) {
    //         days = 0;
    //         hours = 0;
    //         minutes = 0;
    //         seconds = 0;
    //
    //     } else {
    //         days = Math.floor(t / (1000 * 60 * 60 * 24));
    //         hours = Math.floor((t / (1000 * 60 * 60) % 24));
    //         minutes = Math.floor((t / 1000 / 60) % 60);
    //         seconds = Math.floor((t / 1000) % 60);
    //     }
    //
    //     return {
    //         total: t,
    //         days: days,
    //         hours: hours,
    //         minutes: minutes,
    //         seconds: seconds
    //     };
    // }
    //
    // //запускаем  числа в таймере
    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);
    //
    //     updateClock();
    //
    //     //заменяем таймер на странице
    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);
    //
    //         days.innerHTML = getZero(t.days);
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);
    //
    //         if (t.total <= 0) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    //
    // //добавлем ноль перед числом
    // function getZero(num) {
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`
    //     } else {
    //         return num
    //     }
    // }
    //
    // setClock('.timer', deadline);

    // // Modal блок
    //
    // const modalTrigger = document.querySelectorAll('[data-modal]'),
    //     modal = document.querySelector('.modal');
    // // modeCloseBtn = document.querySelector('[data-close]'); //блокируем при добавления нового модал окна
    //
    // //открывает модульное окно
    // function openModal() {
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     //можно заменить верхние две строки(toggle - если нет то добавит, если есть то удалит)
    //     // modal.classList.toggle('show')
    //     document.body.style.overflow = 'hidden';
    //     clearInterval(modalTimerId);
    // };
    //
    // modalTrigger.forEach(btn => {
    //     btn.addEventListener('click', openModal);
    // });
    //
    // //закрытие модального окна
    // function closeModal() {
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     //можно заменить верхние две строки(toggle - если нет то добавит, если есть то удалит)
    //     //modal.classList.toggle('show')
    //     document.body.style.overflow = '';
    // }
    //
    // // modeCloseBtn.addEventListener('click', closeModal); //блокируем при добавления нового модал окна
    //
    // //редактируем добовляя проверку на клик крестик event.target.getAttribute('data-close') == ''
    // modal.addEventListener('click', (event) => {
    //     if (event.target === modal || event.target.getAttribute('data-close') == '') {
    //         // if (event.target === modal) {
    //         // modal.classList.add('hide');
    //         // modal.classList.remove('show');
    //         // document.body.style.overflow = '';
    //         //заменяем функцией
    //         closeModal()
    //
    //     }
    // });
    //
    // //отлавливаем событие кнопки(нажатие)
    // document.addEventListener('keydown', (e) => {
    //     // проверяем на код нажатой кнопки и открыто ли модальное окно для сработки клавиши esc
    //     if (e.code === 'Escape' && modal.classList.contains('show')) {
    //         closeModal()
    //     }
    // });
    // // создаем таймер для появления модального окна
    // const modalTimerId = setTimeout(openModal, 10000);
    //
    // // появления модального окна после просмотра всей страницы
    // function showModalByScroll() {
    //     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //         openModal();
    //         window.removeEventListener('scroll', showModalByScroll);
    //     }
    // }
    //
    // window.addEventListener('scroll', showModalByScroll);

//     // Создаем карточки при помощи класса
//     class MenuCard {
//         constructor(scr, alt, title, descr, price, parentSelector, ...classes) {
//             this.scr = scr;
//             this.alt = alt;
//             this.title = title;
//             this.descr = descr;
//             this.price = price;
//             this.classes = classes;
//             this.parent = document.querySelector(parentSelector);
//             this.transfer = 3;
//             this.changeToBYN();
//         }
//
//         changeToBYN() {
//             this.price = this.price * this.transfer;
//         }
//
//         render() {
//             const element = document.createElement('div');
//             //назначаем элемент по умолчании
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => element.classList.add(className));
//             }
//
//             element.innerHTML = `
// <!--            <div class="menu__item">-->
//             <img src=${this.scr} alt=${this.alt}>
//             <h3 class="menu__item-subtitle">${this.title}</h3>
//             <div class="menu__item-descr">${this.descr}</div>
//             <div class="menu__item-divider"></div>
//             <div class="menu__item-price">
//                 <div class="menu__item-cost">Цена:</div>
//                 <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
//             </div>
// <!--            </div>-->
//             `;
//             this.parent.append(element);
//         }
//     }
//     //создаем функцию для размещения карточки с сервера
//
//
//     const getResource = async (url) => {
//         const rec = await fetch(url);
//         if (!rec.ok) {
//             throw new Error(`Could not featch ${url}, status: ${res.status}`);
//         }
//         return await rec.json();
//     };
//
//     // getResource('http://localhost:3000/menu')
//     //     .then(data => {
//     //         data.forEach(({img, altimg, title, descr, price}) => {
//     //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//     //         });
//     //     });
//
//     //вывод карточек через библиотеку axios вместо getResource
//     axios.get('http://localhost:3000/menu')
//         .then(data => {
//             data.data.forEach(({img, altimg, title, descr, price}) => {
//                 new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//             });
//         });
//
//
//
//     // new MenuCard(
//     //     "img/tabs/vegy.jpg",
//     //     "vegy",
//     //     'Меню "Фитнес"',
//     //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     //     23,
//     //     '.menu .container'
//     // ).render();
//     //
//     // new MenuCard(
//     //     "img/tabs/elite.jpg",
//     //     "elite",
//     //     'Меню “Премиум”',
//     //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     //     55,
//     //     '.menu .container'
//     // ).render();
//     //
//     // new MenuCard(
//     //     "img/tabs/post.jpg",
//     //     "post",
//     //     'Меню "Постное"',
//     //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
//     //     43,
//     //     '.menu .container'
//     // ).render();

    // // forma
    //
    // const forms = document.querySelectorAll('form');
    // // сообщения для вывода в окно
    // const message = {
    //     // loading: 'Загрузка',
    //     //заменяем текст на файл спинера
    //     loading: 'img/form/005 spinner.svg',
    //     success: 'Спасибо! Скоро мы с вами свяжемся',
    //     failure: 'Что-то пошло е так...'
    // };
    // //итерируем forms и производим действия при помощи функции postData
    // forms.forEach(item => {
    //     bindPostData(item);
    // });
    //
    // const  postData = async (url, data) => {
    //     const  res = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: data
    //     });
    //     return await res.json();
    // };
    //
    // function bindPostData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //
    //         // const statusMassge = document.createElement('div');
    //         // statusMassge.classList.add('status');
    //         // statusMassge.textContent = message.loading;
    //         // form.append(statusMassge);
    //         //заменяем для спиера
    //         const statusMassge = document.createElement('img');
    //         statusMassge.src = message.loading;
    //         statusMassge.style.cssText = `
    //             display: black;
    //             margin: 0 auto;
    //         `;
    //         // form.append(statusMassge);
    //         //заменяем append
    //         form.insertAdjacentElement('afterend', statusMassge);
    //
    //         //редактируем при помощи промисов
    //         // const request = new XMLHttpRequest();
    //         // request.open('POST', 'server.php');
    //
    //         // // блок для обычной формы.
    //         // //request.setRequestHeader('Content-type', 'multipart/form-data'); //название давать не надо при обычном формате
    //         //
    //         // const formData = new FormData(form);
    //         // request.send(formData);
    //
    //         //блок для формата json, нужно устанавливать заголовок
    //         // request.setRequestHeader('Content-type', 'application/json');
    //
    //
    //         const formData = new FormData(form);
    //
    //         //заменяем на более элегантный код
    //         // const object = {};
    //         // formData.forEach(function (value, key) {
    //         //     object[key] = value;
    //         // });
    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));
    //
    //
    //         //заменяем на блок feach
    //         // fetch('server.php', {
    //         //     method: 'POST',
    //         //     headers: {
    //         //         'Content-type': 'application/json'
    //         //     },
    //         //     body: JSON.stringify(object)
    //         // })
    //         //блок feach заменяем на функцию postData
    //         // postData('server.php', JSON.stringify(object))
    //         //заменяем 'server.php' на http://localhost:3000/requests
    //         // postData('http://localhost:3000/requests', JSON.stringify(object))
    //         //заменяем JSON.stringify(object) на json
    //         postData('http://localhost:3000/requests', json)
    //             //убираем трансформацию, делается в другом месте
    //             // .then(data => data.text())
    //             .then(data => {
    //                 console.log(data);
    //                 showThanksModal(message.success);
    //                 form.reset();
    //                 statusMassge.remove();
    //             })
    //             .catch(() => {
    //                 showThanksModal(message.failure);
    //             })
    //             .finally(() => {
    //                 form.reset();
    //             });
    //         // const json = JSON.stringify(object); //перенесли выше во fetch
    //         // request.send(json);
    //
    //         //редактируем вывод сообщения в связи с добавлением нового модального окна
    //         // request.addEventListener('load', () => {
    //         //     if (request.status === 200) {
    //         //         console.log(request.response);
    //         //         statusMassge.textContent = message.success;
    //         //         form.reset();
    //         //         setTimeout(() => {
    //         //             statusMassge.remove();
    //         //         }, 2000);
    //         //     } else {
    //         //         statusMassge.textContent = message.loading
    //         //     }
    //         // request.addEventListener('load', () => {
    //         //     if (request.status === 200) {
    //         //         console.log(request.response);
    //         //         showThanksModal(message.success);
    //         //         form.reset();
    //         //         statusMassge.remove();
    //         //     } else {
    //         //         showThanksModal(message.failure);
    //         //     }
    //         // })
    //     });
    // }

    // //модальное окно для оповещения пользователя
    // function showThanksModal(message) {
    //     const prevModalDialog = document.querySelector('.modal__dialog');
    //
    //     //скрываем модальное окно с запросом
    //     prevModalDialog.classList.add('hide');
    //     openModal();
    //
    //     //создаем блок обертка для модального окна
    //     const thankModal = document.createElement('div');
    //     thankModal.classList.add('modal__dialog');
    //     thankModal.innerHTML = `
    //     <div class="modal__content">
    //         <div class="modal__close" data-close>&times;</div>
    //         <div class="modal__title">${message}</div>
    //     </div>
    //     `;
    //     //выводим на экран
    //     document.querySelector('.modal').append(thankModal);
    //
    //     setTimeout(() => {
    //         thankModal.remove();
    //         prevModalDialog.classList.add('show');
    //         prevModalDialog.classList.remove('hide');
    //         closeModal();
    //     }, 4000);
    // }
    //
    //
    // //настраиваем спинер для загрузки
    //
    // //Настройка promise, fetch API тест
    // // URL запрос
    // // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // //     .then(response => response.json())
    // //     .then(json => console.log(json));
    //
    // //делаем POST запрос который обрабатываеться на бэкенде test
    // // fetch('https://jsonplaceholder.typicode.com/posts', {
    // //     method: "POST",
    // //     body: JSON.stringify({name: "Alex"}),
    // //     headers: {
    // //         'Content-type': 'application/json'
    // //     }
    // // })
    // //     .then(response => response.json())
    // //     .then(json => console.log(json));
    //
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));


    // // создание слайда
    // const slides = document.querySelectorAll('.offer__slide'),
    //     slider = document.querySelector('.offer__slider'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current'),
    //     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    //     slidesField = document.querySelector('.offer__slider-inner'),
    //     width = window.getComputedStyle(slidesWrapper).width;
    //
    // let slideIndex = 1;
    // let offset = 0;
    //
    // function slideZero(slideIndex) {
    //     if (slideIndex < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // };
    //
    // function slideShow(slideIndex) {
    //     dots.forEach(dot => dot.style.opacity = '.5');
    //     dots[slideIndex - 1].style.opacity = 1;
    // };
    //
    //
    //
    // //слайд вариант 1
    //
    // //
    // // showSledes(slideIndex);
    // //
    // // if (slides.length < 10) {
    // //     total.textContent = `0${slides.length}`;
    // // } else {
    // //     total.textContent = slides.length;
    // // }
    // //
    // // function showSledes(n) {
    // //     if (n > slides.length) {
    // //         slideIndex = 1;
    // //     }
    // //     if (n < 1) {
    // //         slideIndex = slides.length;
    // //     }
    // //     //скрываем все слайды
    // //     slides.forEach(item => item.style.display = 'none');
    // //     //выводим нужный слайд
    // //     slides[slideIndex - 1].style.display = 'block';
    // //
    // //     if (slideIndex < 10) {
    // //         current.textContent = `0${slideIndex}`;
    // //     } else {
    // //         current.textContent = slideIndex;
    // //     }
    // // }
    // // function plusSlides(n) {
    // //     showSledes(slideIndex += n);
    // // }
    // //
    // // prev.addEventListener('click', () => {
    // //     plusSlides(-1);
    // // });
    // //
    // // next.addEventListener('click', () => {
    // //     plusSlides(1);
    // // });
    //
    // //слайд вариант2 карусель
    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    //     current.textContent = `0${slideIndex}`;
    // } else {
    //     total.textContent = slides.length;
    //     current.textContent = slideIndex;
    // }
    //
    // slidesField.style.width = `${100 * slides.length}%`;
    // slidesField.style.display = 'flex';
    // slidesField.style.transition = '0.5s all';
    //
    // slidesWrapper.style.overflow = 'hidden';
    //
    // slides.forEach(slide => {
    //     slide.style.width = width;
    // });
    //
    // //точки на слайде
    // slider.style.position = 'relative';
    // const  indicators = document.createElement('ol'),
    //     dots = [];
    //
    // indicators.classList.add('carousel-indicators');
    // indicators.style.cssText = `
    //     position: absolute;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     z-index: 15;
    //     display: flex;
    //     justify-content: center;
    //     margin-right: 15%;
    //     margin-left: 15%;
    //     list-style: none;
    // `;
    // slider.append(indicators);
    //
    // for (let i = 0; i < slides.length; i++) {
    //     const dot = document.createElement('li');
    //     dot.setAttribute('data-slide-to', i + 1);
    //     dot.style.cssText = `
    //     box-sizing: content-box;
    //     flex: 0 1 auto;
    //     width: 30px;
    //     height: 6px;
    //     margin-right: 3px;
    //     margin-left: 3px;
    //     cursor: pointer;
    //     background-color: #fff;
    //     background-clip: padding-box;
    //     border-top: 10px solid transparent;
    //     border-bottom: 10px solid transparent;
    //     opacity: .5;
    //     transition: opacity .6s ease;
    //   `;
    //
    //     if (i == 0) {
    //         dot.style.opacity = 1;
    //     }
    //     indicators.append(dot);
    //     dots.push(dot);
    // };
    //
    // function deleteNotDigits(width) {
    //     return +width.replace(/\D/g, '');
    // }
    //
    // next.addEventListener('click', () => {
    //     if(offset == deleteNotDigits(width) * (slides.length -1)) {
    //         offset = 0;
    //     } else {
    //         offset += deleteNotDigits(width);
    //     }
    //
    //     slidesField.style.transform = `translatex(-${offset}px)`;
    //
    //     if (slideIndex == slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         slideIndex++;
    //     }
    //
    //     slideZero(slideIndex);
    //     slideShow(slideIndex);
    //     //заменяем на   slideZero(slideIndex) и slideShow(slideIndex);
    //     // if (slideIndex < 10) {
    //     //     current.textContent = `0${slideIndex}`;
    //     // } else {
    //     //     current.textContent = slideIndex;
    //     // }
    //
    //     // dots.forEach(dot => dot.style.opacity = '.5');
    //     // dots[slideIndex - 1].style.opacity = 1;
    // });
    //
    // prev.addEventListener('click', () => {
    //     if(offset == 0) {
    //         offset = deleteNotDigits(width) * (slides.length -1);
    //     } else {
    //         offset -= deleteNotDigits(width);
    //     }
    //
    //     slidesField.style.transform = `translatex(-${offset}px)`;
    //
    //     if (slideIndex == 1) {
    //         slideIndex = slides.length;
    //     } else {
    //         slideIndex--;
    //     }
    //
    //     slideZero(slideIndex);
    //     slideShow(slideIndex);
    //     //заменяем на   slideZero(slideIndex) и slideShow(slideIndex);
    //     // if (slideIndex < 10) {
    //     //     current.textContent = `0${slideIndex}`;
    //     // } else {
    //     //     current.textContent = slideIndex;
    //     // }
    //
    //     // dots.forEach(dot => dot.style.opacity = '.5');
    //     // dots[slideIndex - 1].style.opacity = 1;
    // });
    //
    //
    //
    //
    //
    // //выбор слайдера по точке
    // dots.forEach(dot => {
    //     dot.addEventListener('click', (event) => {
    //         const slideTo = event.target.getAttribute('data-slide-to');
    //
    //         slideIndex = slideTo;
    //
    //         offset = deleteNotDigits(width) * (slideTo - 1);
    //
    //         slidesField.style.transform = `translateX(-${offset}px)`;
    //
    //
    //
    //         slideZero(slideIndex);
    //         slideShow(slideIndex);
    //         //заменяем на   slideZero(slideIndex) и slideShow(slideIndex);
    //         // if (slideIndex < 10) {
    //         //     current.textContent = `0${slideIndex}`;
    //         // } else {
    //         //     current.textContent = slideIndex;
    //         // }
    //         // dots.forEach(dot => dot.style.opacity = '.5');
    //         // dots[slideIndex - 1].style.opacity = 1;
    //
    //     });
    // });

    // //создаем калькулятор
    // const result = document.querySelector('.calculating__result span');
    // let sex, height, weight, age, ratio;
    //
    // if (localStorage.getItem('sex')) {
    //     sex = localStorage.getItem('sex');
    // } else {
    //     sex = 'female';
    //     localStorage.setItem('sex', 'female');
    // }
    //
    // if (localStorage.getItem('ratio')) {
    //     ratio = localStorage.getItem('ratio');
    // } else {
    //     ratio = 1.375;
    //     localStorage.setItem('ratio', 1.375);
    // }
    //
    // function initLocalSetting(selector, activClass) {
    //     const elements = document.querySelectorAll(selector);
    //
    //     elements.forEach(elem => {
    //         elem.classList.remove(activClass);
    //         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
    //             elem.classList.add(activClass);
    //         }
    //         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
    //             elem.classList.add(activClass);
    //         }
    //     });
    // }
    //
    // initLocalSetting('#gender div', 'calculating__choose-item_active');
    // initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active');
    //
    // function calsTotal() {
    //     if (!sex || !height || !weight || !age) {
    //         result.textContent = "______";
    //         return;
    //     }
    //     if (sex == 'female') {
    //         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (5.7 * age)) * ratio);
    //     } else {
    //         result.textContent = Math.round((88,6 +(13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    //     }
    // }
    // calsTotal();
    //
    // function getStaticInformation(selector, activclass) {
    //     const  elements = document.querySelectorAll(selector);
    //
    //     // document.querySelector(parentSelector). заменяем
    //     //document.querySelector(parentSelector).addEventListener('click', (e) => {
    //     elements.forEach(elem =>{
    //         elem.addEventListener('click', (e) => {
    //             if (e.target.getAttribute('data-ratio')) {
    //                 ratio = +e.target.getAttribute('data-ratio');
    //                 localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
    //             } else  {
    //                 sex = e.target.getAttribute('id');
    //                 localStorage.setItem('sex', e.target.getAttribute('id'));
    //             }
    //
    //             //удаляем всю активность
    //             elements.forEach(elem => {
    //                 elem.classList.remove(activclass);
    //             });
    //             //устанавливаем класс активности
    //             e.target.classList.add(activclass);
    //
    //             calsTotal()
    //         });
    //     });
    // }
    //
    // getStaticInformation('#gender div', 'calculating__choose-item_active');
    // getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
    //
    // function getDynamicInformation(selector) {
    //     const input = document.querySelector(selector);
    //
    //     input.addEventListener('input', () => {
    //
    //         if (input.value.match(/\D/g)) {
    //             input.style.border = '1px solid red';
    //         } else {
    //             input.style.border = 'none'
    //         }
    //
    //         switch (input.getAttribute('id')) {
    //             case 'height':
    //                 height = +input.value;
    //                 break;
    //             case 'weight':
    //                 weight = +input.value;
    //                 break;
    //             case 'age':
    //                 age = +input.value;
    //                 break;
    //         }
    //         calsTotal();
    //     });
    //
    // }
    //
    // getDynamicInformation('#height');
    // getDynamicInformation('#weight');
    // getDynamicInformation('#age');

const tabs = require('./modules/tabs'),
    modal  = require('./modules/modal'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    calc = require('./modules/calc'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider');
tabs();
modal();
timer();
cards();
calc();
forms();
slider();
});