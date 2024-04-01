/*
<!--
В index.html
1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
-->*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        let tablet = document.createElement('div');
        tablet.classList.add('tablet');

        let container = document.getElementById('users');
        container.innerText = '';

        for (const user of users) {

            let userBlock = document.createElement('div');
            userBlock.classList.add('userblock');

            let nameId = document.createElement('h2');
            nameId.innerText = `${user.id}: ${user.name}`

            let button = document.createElement('button');
            button.innerText = `View information`
            button.classList.add('buttonUs')

            button.addEventListener('click', () => {
                location.href = `user-details.html?id=` + user.id;
            })



            container.appendChild(userBlock);
            userBlock.appendChild(nameId);
            userBlock.appendChild(button);
        }

    })


