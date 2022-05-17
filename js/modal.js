const modal = document.getElementById('modal');                         // Id цепляется на блок самого окна
const btn = document.getElementById('modal-open');                      // ID цепляется на кнопку открытия
const btnX = document.getElementsByClassName("modal__btn-close")[0];    // ID цепляется на кнопку закрытия

btn.onclick = function() {
  modal.style.display = "block";
}

btnX.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
    modal.style.display = "none";
 }
}