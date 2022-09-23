const renderPosts = () => {
    const postsBox = document.querySelector(".posts");
    for (let i = posts.length - 1; i >= 0; i--) {
        for (let j = users.length - 1; j >= 0; j--) {
            if (posts[i].user === users[j].id) {
                const article = document.createElement("article");
                article.innerHTML = `
                <div id="user-${users[j].id}" class="small-profile mb-3">
                    <img src="${users[j].img}" alt="User picture">
                    <div class="user-info">
                    <h4 class="font-title-2">${users[j].user}</h4>
                    <span class="font-text-3">${users[j].stack}</span>
                    </div>
                </div>
                <h2 class="font-title-1 mb-4">${posts[i].title}</h2>
                <p class="font-text-2 mb-3">${posts[i].text}</p>
                <div class="interaction-box mb-2">
                    <button id="post-${posts[i].id_post}" class="grey-btn open-post font-text-1 mr-1">Abrir Post</button>
                    <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                    <path
                        d="M16.7134 0C14.4034 0 12.3978 1.30143 11.3793 3.21286C10.3609 1.30143 8.35526 0 6.04526 0C2.70685 0 0 2.71857 0 6.07143C0 14.2857 11.3793 20 11.3793 20C11.3793 20 22.7586 14.2857 22.7586 6.07143C22.7586 2.71857 20.0518 0 16.7134 0Z"/>
                    </svg>
                    <span class="font-text-3">25</span>
                </div>
                `;
                postsBox.append(article);
            }
        }
    }
}
renderPosts();


const checkOpenPostClick = () => {
    const openPost = document.querySelectorAll(".open-post");
    for (let i = 0; i < openPost.length; i++) {
        openPost[i].onclick = (e) => {
            let idPost = e.target.id.replace("post-", "");
            let idUser = e.path[2].children[0].id.replace("user-", "");
            showModal(parseInt(idPost), parseInt(idUser));
        }
    }
}
checkOpenPostClick();

const showModal = (postId, userId) => {
    for (let i = posts.length - 1; i >= 0; i--) {
        for (let j = users.length - 1; j >= 0; j--) {
            if (posts[i].id_post === postId && users[j].id === userId) {
                renderModal(i, j);
                closeModal();
            }
        }
    }
}

const renderModal = (idPost, idUser) => {
    const main = document.querySelector("main");
    let post = posts[idPost];
    let user = users[idUser];
    const modal = document.createElement("div");
    modal.classList.add("modal-box");
    modal.innerHTML = `
    <div class="modal">
        <div class="modal-header">
          <div class="small-profile mb-3">
            <img src="${user.img}" alt="User picture">
            <div class="user-info">
              <h4 class="font-title-2">${user.user};</h4>
              <span class="font-text-3">${user.stack}</span>
            </div>
          </div>
          <button class="font-title-3 mt-4 mr-2 white-btn modal-close">X</button>
        </div>
        <div class="modal-body">
          <h2 class="font-title-1 mb-4">${post.title}</h2>
          <p class="font-text-2">${post.text}</p>
        </div>
      </div>
    `;
    main.append(modal);
}

const closeModal = () => {
    const closeBtn = document.querySelector(".modal-close");
    const modal = document.querySelector(".modal");
    closeBtn.onclick = () => {
        modal.classList.toggle("close");
        setTimeout(function () {
            document.querySelector(".modal-box").remove();
        }, 407)
    }
}