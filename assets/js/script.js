const patronDeModulo = (function () {
    // Función privada que actualiza el iframe con la URL del video
    function setVideoUrl(url, iframeId) {
        const iframeElement = document.getElementById(iframeId);

        if (iframeElement) {
            // Setea el atributo src con la URL del video
            iframeElement.setAttribute('src', url);
        } else {
            console.error(`No se encontró un elemento con el ID ${iframeId}`);
        }
    }

    // Retornamos una función pública que llama a la función privada
    return {
        loadVideo: function (url, iframeId) {
            setVideoUrl(url, iframeId);
        },
    };
})();

//CLASE MULTIMEDIA
class Multimedia {
    constructor(url) {
        let _url = url;
        //funcion Closures para proteger el atributo url
        this.getUrl = function () {
            return _url;
        };
        this.setUrl = function (newUrl) {
            _url = newUrl;
        };
    }
    setInicio() {
        console.log(
            'Este método es para realizar un cambio en la URL del video'
        );
    }
}

// clase reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); // Llama al constructor padre
        this._id = id;
    }

    // Método para reproducir multimedia
    playMultimedia() {
        patronDeModulo.loadVideo(this.getUrl(), this._id);
    }

    // Método para establecer el inicio
    setInicio(tiempo) {
        let url = this.getUrl();
        let urlInicio = url.includes('?')
            ? `${url}&start=${tiempo}`
            : `${url}?start=${tiempo}`;
        this.setUrl(urlInicio);
        console.log(`URL con tiempo de inicio:${this.getUrl()}`);
    }
}

//INSTANCIAR LAS CLASES

let musica = new Reproductor(
    'https://www.youtube.com/embed/BAgPCaQ7lTU',
    'musica'
);
let pelicula = new Reproductor(
    'https://www.youtube.com/embed/xiC2iXTXHxw',
    'peliculas'
);
let serie = new Reproductor(
    'https://www.youtube.com/embed/JjReZSx-dK8',
    'series'
);
musica.playMultimedia();
pelicula.playMultimedia();
serie.setInicio(40);
serie.playMultimedia();