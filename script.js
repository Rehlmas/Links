function toggleMode(){
const html = document.documentElement
html.classList.toggle('light')

//pegar a tag img
const img= document.querySelector("#profile img")

//substituir a imagem

if (html.classList.contains('light')){
//se tiver light mode add a imagem    
 img.setAttribute('src', './assets/avatar-light.png')
} else {
  //se nao tiver light mode  
  img.setAttribute('src', './assets/avatar.png')
}







}