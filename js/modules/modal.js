
//открывает модульное окно
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    //можно заменить верхние две строки(toggle - если нет то добавит, если есть то удалит)
    // modal.classList.toggle('show')
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

};

//закрытие модального окна
function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    //можно заменить верхние две строки(toggle - если нет то добавит, если есть то удалит)
    //modal.classList.toggle('show')
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal блок

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
    // modeCloseBtn = document.querySelector('[data-close]'); //блокируем при добавления нового модал окна

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });



    // modeCloseBtn.addEventListener('click', closeModal); //блокируем при добавления нового модал окна

    //редактируем добовляя проверку на клик крестик event.target.getAttribute('data-close') == ''
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            // if (event.target === modal) {
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
            //заменяем функцией
            closeModal(modalSelector);

        }
    });

    //отлавливаем событие кнопки(нажатие)
    document.addEventListener('keydown', (e) => {
        // проверяем на код нажатой кнопки и открыто ли модальное окно для сработки клавиши esc
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
    // // создаем таймер для появления модального окна
    // const modalTimerId = setTimeout(openModal, 10000);

    // появления модального окна после просмотра всей страницы
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};