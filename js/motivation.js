function readMore() {
    const dots = document.getElementById('dots');                  // Id цепляется на span с тремя точками
    const more = document.getElementById('more');                  // Id цепляется на span, оборачивающий оставшийся текст
    const btn = document.getElementById('btn');                    // Id цепляется на кнопку "подробнее"

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'Подробнее';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }
}


