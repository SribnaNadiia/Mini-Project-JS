/*<!--На странице post-details.html:
7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
-->*/


let newUrl = new URL(location.href);

let postId = newUrl.searchParams.get('postId');

let container = document.createElement('div');
container.classList.add('postInfo');
let header = document.createElement('div');
header.classList.add('postHeader');
let footer = document.createElement('div');
footer.classList.add('postFooter');

container.appendChild(header);
container.appendChild(footer);
document.body.appendChild(container);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => posts.forEach(posts => {
            if (postId === (posts.id + "")) {
                let postTitle = document.createElement('h1');
                postTitle.classList.add('postTitle')
                postTitle.innerText = `${posts.id} - "${posts.title}"`;

                let postBody = document.createElement('span');
                postBody.classList.add('postBody')
                postBody.innerText = `${posts.body}`;

                header.appendChild(postTitle);
                header.appendChild(postBody);
            }
        }
    ))

    .then(resp =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(comments => comments.forEach(comments => {
                let commentBlock = document.createElement('div');
                commentBlock.classList.add('commentBlock')

                let nameCom = document.createElement('h3');
                nameCom.classList.add('nameCom')
                nameCom.innerText = `${comments.name}`;

                let mailCom = document.createElement('h4');
                mailCom.classList.add('mailCom')
                mailCom.innerText = `${comments.email}`;

                let textCom = document.createElement('span');
                textCom.classList.add('textCom')
                textCom.innerText = `${comments.body}`;

                commentBlock.appendChild(nameCom);
                commentBlock.appendChild(mailCom);
                commentBlock.appendChild(textCom);
                footer.appendChild(commentBlock);
            })));














