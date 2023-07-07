const saveButton = document.querySelector('.sidebar__save-button')

saveButton.addEventListener('click', () => {
    saveProject();
});

function saveProject() {

    let projectTitle = document.querySelector('.sidebar__project').value;
    let projectDescription = document.querySelector('.sidebar__project.description').value;
    let projectBackground = document.querySelector('.color-picker__invisible').value;
    let projectCode = document.querySelector('.content__wrapper').innerText;

    let card = {

        projectTitle: projectTitle,
        projectDescription: projectDescription,
        projectBackground: projectBackground,
        projectCode: projectCode

    };

    let savedCards = localStorage.getItem('cards');
    
    if (savedCards) {
        savedCards = JSON.parse(savedCards);
    }
    else {
        savedCards = [];
    }

    savedCards.push(card);

    localStorage.setItem('cards', JSON.stringify(savedCards));

    document.querySelector('.sidebar__project').value = '';
    document.querySelector('.sidebar__project.description').value = '';
    document.querySelector('.wrapper__text-area').innerHTML = '...';

};
