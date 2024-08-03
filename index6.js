let arreglo_botones = [];
let boton1 = {
    "estilo": "select-video active",
    "identificador": "selectVideo1",
    "click": "https://www.youtube.com/embed/AqL36wG2BQw?si=BhL0MBIZoccCV70y",
    "imagen": "imagenes/resultado1.jpg",
    "titulo": "Partido 1 (3-2)",
    "title": "Real Madrid 3 - 2 Barcelona"
}
let boton2 = {
    "estilo": "select-video",
    "identificador": "selectVideo2",
    "click": "https://www.youtube.com/embed/KJanSdCEIyc?si=WdstOY_TgVlw-ZSZ",
    "imagen": "imagenes/resultado2.webp",
    "titulo": "Partido 2 (2-1)",
    "title": "Real Madrid 2 - 1 Barcelona"
}
let boton3 = {
    "estilo": "select-video",
    "identificador": "selectVideo3",
    "click": "https://www.youtube.com/embed/MM_PM7BPcSU?si=EpIqRo5Llog8vSIR",
    "imagen": "imagenes/resultado3.webp",
    "titulo": "Partido 3 (5-1)",
    "title": "Real Madrid 5 - 1 Barcelona"
}
let boton4 = {
    "estilo": "select-video",
    "identificador": "selectVideo4",
    "click": "https://www.youtube.com/embed/cZpklxJvG8c?si=Sr8yprArzj6dbjxH",
    "imagen": "imagenes/resultado4.webp",
    "titulo": "Partido 4 (4-1)",
    "title": "Real Madrid 4 - 1 Barcelona"
}
let boton5 = {
    "estilo": "select-video",
    "identificador": "selectVideo5",
    "click" : "https://www.youtube.com/embed/7feCxgW5vhI?si=QsguKYHwlzel3DMn",
    "imagen": "imagenes/resultado5.jpg",
    "titulo": "Partido 5 (4-0)",
    "title": "Real Madrid 4 - 0 BArcelona"
}
arreglo_botones.push(boton1)
arreglo_botones.push(boton2)
arreglo_botones.push(boton3)
arreglo_botones.push(boton4)
arreglo_botones.push(boton5)
console.log(arreglo_botones)
let divPartidos = document.getElementById("ListaBotones")

function cargarElementos(){
    let fila = ""
    arreglo_botones.forEach((i)=>{
        fila+=
        `<button class='${i.estilo}' id='${i.identificador}' 
        onclick="changeVideo(this, '${i.click}', '${i.title}');">
        <img src="${i.imagen}">
        <h3>${i.titulo}</h3>
        </button>`
    })
    divPartidos.innerHTML = fila
}
cargarElementos();