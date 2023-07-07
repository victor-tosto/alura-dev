function createCard () {

    let cardsSection = document.querySelector('.cards');

    cardsSection.innerHTML = '';

    let savedCards = localStorage.getItem('cards');

    if (savedCards) {

        savedCards = JSON.parse(savedCards);

        savedCards.forEach(function(card) {

            let cardsContainer = document.createElement('div');
            cardsContainer.className = 'cards__container';
            cardsContainer.innerHTML = `
                <div class="container__code" style="background-color: ${card.projectBackground};">
                <div class="code__content">
                    <img src="../assets/img/mac_buttons.svg" alt="Mac Buttons" class="content__image">
                    <code class="content__code-text">${card.projectCode}</code>
                </div>
                </div>
                <div class="container__info">
                <div class="info__content">
                    <h2 class="content__title">${card.projectTitle}</h2>
                    <p class="content__text">${card.projectDescription}</p>
                </div>
                </div>
                <div class="container__feedback">
                <div class="feedback__content">
                    <div class="content__comments">
                    <button class="comments__button">
                        <img src="../assets/img/comments.svg" alt="Comentários">
                    </button>
                    <span>9</span>
                    </div>
                    <div class="content__favs">
                    <button class="favs__button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Font Awesome Icon">
                            <path id="Vector" d="M20.0587 4.44659C17.9181 2.6224 14.7346 2.95052 12.7698 4.97783L12.0003 5.77078L11.2308 4.97783C9.26987 2.95052 6.08243 2.6224 3.94185 4.44659C1.48877 6.5403 1.35987 10.298 3.55514 12.5675L11.1136 20.3721C11.6019 20.876 12.3948 20.876 12.8831 20.3721L20.4415 12.5675C22.6407 10.298 22.5118 6.5403 20.0587 4.44659Z"/>
                        </g>
                        </svg>
                    </button>
                    <span>9</span>
                    </div>
                </div>
                <div class="feedback__profile">
                    <img src="../assets/img/Photo.svg" alt="Perfil" class="profile__image">
                    <span class="profile__name">@Harry</span>
                </div>
                </div>
            `;

            cardsSection.appendChild(cardsContainer);

        });

    }

}
