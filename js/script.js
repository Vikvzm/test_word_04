document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            //   заменяем классом
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        // заменяем на класс
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //add Timer
    const deadline = '2024-10-01';

    //функция переводит секунды в дни, часы, минуты, секунды
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;

        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    //запускаем  числа в таймере
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        //заменяем таймер на странице
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    //добавлем ноль перед числом
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    setClock('.timer', deadline);

    // Modal блок

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
        // modeCloseBtn = document.querySelector('[data-close]'); //блокируем при добавления нового модал окна

    //открывает модульное окно
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //можно заменить верхние две строки(toggle - если нет то добавит, если есть то удалит)
        // modal.classList.toggle('show')
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    };

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    //закрытие модального окна
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        //можно заменить верхние две строки(toggle - если нет то добавит, если есть то удалит)
        //modal.classList.toggle('show')
        document.body.style.overflow = '';
    }

    // modeCloseBtn.addEventListener('click', closeModal); //блокируем при добавления нового модал окна

    //редактируем добовляя проверку на клик крестик event.target.getAttribute('data-close') == ''
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '' ) {
        // if (event.target === modal) {
                // modal.classList.add('hide');
                // modal.classList.remove('show');
                // document.body.style.overflow = '';
                //заменяем функцией
                closeModal()

        }
    });

    //отлавливаем событие кнопки(нажатие)
    document.addEventListener('keydown', (e) => {
        // проверяем на код нажатой кнопки и открыто ли модальное окно для сработки клавиши esc
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    });
    // создаем таймер для появления модального окна
    const modalTimerId = setTimeout(openModal, 10000);

    // появления модального окна после просмотра всей страницы
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Создаем карточки при помощи класса
    class MenuCard {
        constructor(scr, alt, title, descr, price, parentSelector, ...classes) {
            this.scr = scr;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 3;
            this.changeToBYN();
        }

        changeToBYN() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            //назначаем элемент по умолчании
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
<!--            <div class="menu__item">-->
            <img src=${this.scr} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
            </div>
<!--            </div>-->
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        23,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        55,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        43,
        '.menu .container'
    ).render();

    // forma

    const forms = document.querySelectorAll('form');
    // сообщения для вывода в окно
    const message = {
        // loading: 'Загрузка',
        //заменяем текст на файл спинера
        loading: 'img/form/005 spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло е так...'
    };
    //итерируем forms и производим действия при помощи функции postData
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // const statusMassge = document.createElement('div');
            // statusMassge.classList.add('status');
            // statusMassge.textContent = message.loading;
            // form.append(statusMassge);
            //заменяем для спиера
            const statusMassge = document.createElement('img');
            statusMassge.src = message.loading;
            statusMassge.style.cssText = `
                display: black;
                margin: 0 auto;
            `;
            // form.append(statusMassge);
            //заменяем append
            form.insertAdjacentElement('afterend', statusMassge);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            // // блок для обычной формы.
            // //request.setRequestHeader('Content-type', 'multipart/form-data'); //название давать не надо при обычном формате
            //
            // const formData = new FormData(form);
            // request.send(formData);

            //блок для формата json, нужно устанавливать заголовок
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);
            request.send(json);

            //редактируем вывод сообщения в связи с добавлением нового модального окна
            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         statusMassge.textContent = message.success;
            //         form.reset();
            //         setTimeout(() => {
            //             statusMassge.remove();
            //         }, 2000);
            //     } else {
            //         statusMassge.textContent = message.loading
            //     }
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMassge.remove();
                } else {
                    showThanksModal(message.failure);
                }
            })
        });
    }

    //модальное окно для оповещения пользователя
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        //скрываем модальное окно с запросом
        prevModalDialog.classList.add('hide');
        openModal();

        //создаем блок обертка для модального окна
        const thankModal = document.createElement('div');
        thankModal.classList.add('modal__dialog');
        thankModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div> 
        `;
        //выводим на экран
        document.querySelector('.modal').append(thankModal);

        setTimeout(() => {
            thankModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }

    //настраиваем спинер для загрузки





});