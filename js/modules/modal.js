function modal() {
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
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
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
}

module.exports = modal;