function buttonClick() {
    // 1. szukamy element (paragraph o id counter)
    const counter = document.getElementById('counter');
    // 2. czytamy innerHTML elementu
    const counterInnerHtml = counter.innerHTML;
    // 3. parsujemy string na number
    const counterValue = Number(counterInnerHtml);

    // 4. inkrementujemy counter
    const newCounterValue = counterValue + 1;

    // 1. szukamy img po id
    const image = document.getElementById('image');

    if (newCounterValue % 5 === 0) {
        // 2. jezeli counter jest podzielny przez 5 to pokazujemy kota
        image.classList.remove('hidden');
    } else {
        // 2. jezeli counter nie jest podzielny przez 5 to chowamy kota
        image.classList.add('hidden');
    }

    // 5. ustawiamy nową wartość
    counter.innerHTML = newCounterValue + '';
}
