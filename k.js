// document.getElementById('plano').addEventListener('click', function() {
//   var galeria = document.getElementById('galeria');
//   if (galeria.style.display === 'none' || galeria.style.display === '') {
//     galeria.style.display = 'block';
//   } else {
//     galeria.style.display = 'none';
//   }
// });

var galeriaVisible = false; // Variable para realizar un seguimiento del estado de la galería

document.getElementById('plano').addEventListener('click', function() {
  var galeriaContainer = document.getElementById('galeria-container');

  if (!galeriaVisible) {
    // Crea elementos y contenido para la galería
    var galeria = document.createElement('div');
    galeria.className = 'planos';

    var img1 = document.createElement('img');
    img1.src = 'Assets/img/nose.png';
    img1.alt = 'Planos';

    var row = document.createElement('div');
    row.className = 'row';

    // Agrega imágenes a la galería
    var img2 = document.createElement('div');
    img2.className = 'column';
    var img2Element = document.createElement('img');
    img2Element.src = 'Assets/img/a.jpg';
    img2Element.alt = 'Imagen A';
    img2.appendChild(img2Element);

    var img3 = document.createElement('div');
    img3.className = 'column';
    var img3Element = document.createElement('img');
    img3Element.src = 'Assets/img/b.jpg';
    img3Element.alt = 'Imagen B';
    img3.appendChild(img3Element);

    var img4 = document.createElement('div');
    img4.className = 'column';
    var img4Element = document.createElement('img');
    img4Element.src = 'Assets/img/v.jpg';
    img4Element.alt = 'Imagen V';
    img4.appendChild(img4Element);

    var img5 = document.createElement('div');
    img5.className = 'column';
    var img5Element = document.createElement('img');
    img5Element.src = 'Assets/img/v2.jpg';
    img5Element.alt = 'Imagen V2';
    img5.appendChild(img5Element);

    row.appendChild(img2);
    row.appendChild(img3);
    row.appendChild(img4);
    row.appendChild(img5);

    galeria.appendChild(img1);
    galeria.appendChild(row);

    // Agrega la galería al contenedor
    galeriaContainer.appendChild(galeria);
    
    galeriaVisible = true; // Cambia el estado de la galería
  } else {
    // Si la galería está visible, no se hace nada
  }
});













































// document.getElementById('.plano').addEventListener('click', function() {
//     var galeria = document.getElementById('.galeria');
//     if (galeria.style.display === 'none') {
//       galeria.style.display = 'block';
//     } else {
//       galeria.style.display = 'none';
//     }
//   });
  