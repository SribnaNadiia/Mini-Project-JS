/*
<!--На странице user-details.html:
4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
    6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
-->*/

const baseUrl = new URLSearchParams(location.search);
const userNewUrl = baseUrl.get('id');
const id = baseUrl.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userNewUrl}`)
    .then(res => res.json())
    .then(value => {
        for (const valueKey in value) {
            console.log(valueKey)

            let wrap = document.getElementById('wrap');
            document.body.appendChild(wrap);

            let header = document.createElement('div');
            header.classList.add('header')
            wrap.appendChild(header);

            let div = document.createElement('div');
            header.appendChild(div);
            div.classList.add('info')
            if (typeof value[valueKey] !== 'object') {
                div.innerText = `${valueKey}: ${value[valueKey]}`
            } else {
                div.innerText = `${valueKey}:`;

                for (const key in value[valueKey]) {
                    let block = document.createElement('div');
                    div.appendChild(block);
                    block.classList.add('block')
                    if (typeof value[valueKey] [key] !== 'object') {
                        block.innerText = `${key}: ${value[valueKey] [key]}`;
                    } else {
                        block.innerText = `${key}:`

                        for (const elementKey in value[valueKey] [key]) {

                            let element = document.createElement('div');
                            block.appendChild(element);
                            element.classList.add('element')

                            if (typeof value[valueKey][key][elementKey] !== 'object') {
                                element.innerText = `${elementKey}: ${value[valueKey][key][elementKey]}`
                            }
                        }
                    }
                }
            }
        }
        /*button.addEventListener('click', (idUser) => {
            let infotitle = document.createElement('div');
            fetch(`https://jsonplaceholder.typicode.com/users/` + idUser + `/posts`)
                .then(value => value.json())
                .then(post => {

                })
        })*/
    })
    .then(resp => {

        let button = document.createElement('button');
        button.innerText = `post of current user`;
        button.classList.add('buttonInf');
        wrap.appendChild(button)


        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    console.log(posts)
                    button.disabled = true;
                    let footer = document.createElement('div');
                    footer.classList.add('footer');

                        for (const post of posts) {
                            let titleDiv = document.createElement('div');
                                titleDiv.classList.add('titleDiv')

                            let ul = document.createElement('ul');

                            let li = document.createElement('li');
                            li.innerText = post.title;
                            li.classList.add('title')

                            let detalBtn = document.createElement('button');
                            detalBtn.classList.add('detalBtn')
                            detalBtn.innerText = 'Details';



                            detalBtn.onclick = function () {
                                document.location.href = `post-details.html?postId=${post.id}`;

                            }
                            footer.appendChild(titleDiv);
                            titleDiv.append(ul, detalBtn);
                            ul.appendChild(li);
                            wrap.appendChild(footer);
                            /*button.disabled = true;*/
                        }
                    }
                )
        }
    });
