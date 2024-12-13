function alterarStatus(gameId) {
    const gameItem = document.getElementById(`game-${gameId}`);
    const button = gameItem.querySelector('.dashboard__item__button');
    const imgWrapper = gameItem.querySelector('.dashboard__item__img');

    if (button.textContent === "Alugar") {
        button.textContent = "Devolver";
        button.classList.add('dashboard__item__button--return');
        imgWrapper.classList.add('dashboard__item__img--rented');
    } else {
        button.textContent = "Alugar";
        button.classList.remove('dashboard__item__button--return');
        imgWrapper.classList.remove('dashboard__item__img--rented');
    }
}