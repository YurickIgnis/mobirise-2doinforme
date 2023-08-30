
// CALIDAD DE VIDA
// menos pobreza
const $dynamicGallery = document.getElementById("dynamic-gallery-calidad-pobreza");
const dynamicGallery = window.lightGallery($dynamicGallery, {
  dynamic: true,
  mobileSettings:{

    controls: true, showCloseIcon: true, download: true,

  },
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.1 programas alimentarios.jpg",
      responsive:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.1 programas alimentarios.jpg",
      thumb:
      "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.1 programas alimentarios.jpg",
      subHtml: ``
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.2 adultos mayores.JPG",
      responsive:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.2 adultos mayores.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.2 adultos mayores.JPG"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.3 Madres Solteras.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.3 Madres Solteras.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.3 Madres Solteras.JPG"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza//01.4 Tortilla subsidiada.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza//01.4 Tortilla subsidiada.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.4 Tortilla subsidiada.JPG"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.5 Obras de drenaje.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.5 Obras de drenaje.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.5 Obras de drenaje.JPG"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.6 Obras de Urbanización.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.6 Obras de Urbanización.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/001 Menos Pobreza/01.6 Obras de Urbanización.JPG"
    },
  ]
});
$dynamicGallery.addEventListener("click", () => {
  dynamicGallery.openGallery(0);
});

// Salud
const $dynamicGallery1 = document.getElementById("dynamic-gallery-calidad-salud");
const dynamicGallery1 = window.lightGallery($dynamicGallery1, {
  dynamic: true,
  mobileSettings:{

    controls: true, showCloseIcon: true, download: true,

  },
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.1 Pruebas COVID.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.1 Pruebas COVID.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.1 Pruebas COVID.jpg",
      // subHtml: `<div class="lightGallery-captions">
      //           <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
      //           <p>Description of the slide 1</p>
      //       </div>`
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.2 Cáncer de mama.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.2 Cáncer de mama.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.2 Cáncer de mama.jpg"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.3 Telemedicina.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.3 Telemedicina.jpg",
  
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.3 Telemedicina.jpg"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.4 Centro de salud en Axtla de Terrazas.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.4 Centro de salud en Axtla de Terrazas.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.4 Centro de salud en Axtla de Terrazas.jpg"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.6 Central de Mezclas.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.6 Central de Mezclas.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.6 Central de Mezclas.jpg"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.7 Ambulancias.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.7 Ambulancias.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.7 Ambulancias.jpg"
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.8 Donación de sangre.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.8 Donación de sangre.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/002 Salud/002.8 Donación de sangre.jpg"
    },
  ]
});
$dynamicGallery1.addEventListener("click", () => {
  dynamicGallery1.openGallery(0);
});


// Educacion
const $dynamicGallery2 = document.getElementById("dynamic-gallery-calidad-educacion");
const dynamicGallery2 = window.lightGallery($dynamicGallery2, {
  dynamic: true,
  mobileSettings:{

    controls: true, showCloseIcon: true, download: true,

  },
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.1 Educación, Cultura y deporte.jpeg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.1 Educación, Cultura y deporte.jpeg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.1 Educación, Cultura y deporte.jpeg",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.1 Utiles escolares.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.1 Utiles escolares.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.1 Utiles escolares.JPG",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.2 Zapatos escolares.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.2 Zapatos escolares.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.2 Zapatos escolares.JPG",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.3 Indicadores educativos.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.3 Indicadores educativos.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.3 Indicadores educativos.jpg",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.4 FENAPO.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.4 FENAPO.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.4 FENAPO.jpg",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.5 Festival Xantolo en tu Ciudad.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.5 Festival Xantolo en tu Ciudad.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.5 Festival Xantolo en tu Ciudad.jpg",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.6 Festival de Invierno.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.6 Festival de Invierno.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.6 Festival de Invierno.jpg",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.7 Juegos CONADE.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.7 Juegos CONADE.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.7 Juegos CONADE.JPG",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.8 Eventos Charros.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.8 Eventos Charros.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.8 Eventos Charros.jpg",
      
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.9 Copa Potosí.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.9 Copa Potosí.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/003 Educación, Cultura y Deporte/003.9 Copa Potosí.jpg",
      
    },
   
  ]
});
$dynamicGallery2.addEventListener("click", () => {
  dynamicGallery2.openGallery(0);
});



// Inclusion
const $dynamicGallery3 = document.getElementById("dynamic-gallery-calidad-inclusion");
const dynamicGallery3 = window.lightGallery($dynamicGallery3, {
  dynamic: true,
  mobileSettings:{

    controls: true, showCloseIcon: true, download: true,

  },
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Clínica rosa.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Clínica rosa.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Clínica rosa.jpg",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Inauguración clínica rosa.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Inauguración clínica rosa.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Inauguración clínica rosa.jpg",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Tarjeta Rosa Ciudad Valles.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Tarjeta Rosa Ciudad Valles.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Tarjeta Rosa Ciudad Valles.jpg",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Tarjeta rosa.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Tarjeta rosa.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.1 Tarjeta rosa.jpg",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.2 menstruación digna.jpg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.2 menstruación digna.jpg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.2 menstruación digna.jpg",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.3 Jóvenes.PNG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.3 Jóvenes.PNG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.3 Jóvenes.PNG",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.4 Apoyos a personas sin seguridad social.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.4 Apoyos a personas sin seguridad social.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.4 Apoyos a personas sin seguridad social.JPG",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.5 Apoyos técnicos.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.5 Apoyos técnicos.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.5 Apoyos técnicos.JPG",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.6 Reclutamiento para jóvenes.png",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.6 Reclutamiento para jóvenes.png",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.6 Reclutamiento para jóvenes.png",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.7 Acciones por la niñez.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.7 Acciones por la niñez.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.7 Acciones por la niñez.JPG",
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.8 Feria de la Salud.jpeg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.8 Feria de la Salud.jpeg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/004 Inclusión Social e Igualdad de Género/004.8 Feria de la Salud.jpeg",
    },
   
  ]
});
$dynamicGallery3.addEventListener("click", () => {
  dynamicGallery3.openGallery(0);
});



// Pueblos Originarios
const $dynamicGallery4 = document.getElementById("dynamic-gallery-calidad-pueblos-originarios");
const dynamicGallery4 = window.lightGallery($dynamicGallery4, {
  dynamic: true,
  mobileSettings:{

    controls: true, showCloseIcon: true, download: true,

  },
  plugins: [lgZoom, lgVideo, lgThumbnail],
  dynamicEl: [
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.1 Becas alimentarias.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.1 Becas alimentarias.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.1 Becas alimentarias.JPG",
     
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.2 Más obras para las comunidades indígenas.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.2 Más obras para las comunidades indígenas.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.2 Más obras para las comunidades indígenas.JPG",
     
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.3 Planteamiento de necesidades.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.3 Planteamiento de necesidades.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.3 Planteamiento de necesidades.JPG",
     
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.4 Inversión en municipios con población indígena.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.4 Inversión en municipios con población indígena.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.4 Inversión en municipios con población indígena.JPG",
     
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.5 Día Internacional de los Pueblos Indígenas.JPG",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.5 Día Internacional de los Pueblos Indígenas.JPG",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.5 Día Internacional de los Pueblos Indígenas.JPG",
     
    },
    {
      src:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.6 Promoción de la salud en zonas indígenas.jpeg",
      responsive:
      "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.6 Promoción de la salud en zonas indígenas.jpeg",
      thumb:
        "../../../../assets/images/Eje 1 Calidad de Vida/005 Pueblos Originarios/005.6 Promoción de la salud en zonas indígenas.jpeg",
     
    },
   
  ]
});
$dynamicGallery4.addEventListener("click", () => {
  dynamicGallery4.openGallery(0);
});


