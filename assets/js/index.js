const botaoTrailer = document.querySelector(".botao__trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar__modal");
const videoTrailer = document.getElementById ("video__trailer");
const linkDoVideo = videoTrailer.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    videoTrailer.setAttribute("src", linkDoVideo)
});

fecharModal.addEventListener ("click", () => {
    alternarModal();
    videoTrailer.setAttribute("src", "");
});