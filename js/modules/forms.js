import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    // forma

    const forms = document.querySelectorAll(formSelector);
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
        bindPostData(item);
    });


    function bindPostData(form) {
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

            //редактируем при помощи промисов
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            // // блок для обычной формы.
            // //request.setRequestHeader('Content-type', 'multipart/form-data'); //название давать не надо при обычном формате
            //
            // const formData = new FormData(form);
            // request.send(formData);

            //блок для формата json, нужно устанавливать заголовок
            // request.setRequestHeader('Content-type', 'application/json');


            const formData = new FormData(form);

            //заменяем на более элегантный код
            // const object = {};
            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });
            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            //заменяем на блок feach
            // fetch('server.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            //блок feach заменяем на функцию postData
            // postData('server.php', JSON.stringify(object))
            //заменяем 'server.php' на http://localhost:3000/requests
            // postData('http://localhost:3000/requests', JSON.stringify(object))
            //заменяем JSON.stringify(object) на json
            postData('http://localhost:3000/requests', json)
                //убираем трансформацию, делается в другом месте
                // .then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    form.reset();
                    statusMassge.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
            // const json = JSON.stringify(object); //перенесли выше во fetch
            // request.send(json);

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
            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMassge.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // })
        });
    }

    //модальное окно для оповещения пользователя
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        //скрываем модальное окно с запросом
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

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
            closeModal('.modal');
        }, 4000);
    }


    //настраиваем спинер для загрузки

    //Настройка promise, fetch API тест
    // URL запрос
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json));

    //делаем POST запрос который обрабатываеться на бэкенде test
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({name: "Alex"}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json));



    //??? непонятно
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));

}

export default forms;