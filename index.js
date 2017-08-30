 window.onload = function () {
     var images = [{
         'name': 'Study, Work & Die',
         'path': 'src/ilustracion1.jpg',
         'date': '28/07/2015'
     }, {
         'name': 'Full of shit',
         'path': 'src/ilustracion2.jpg',
         'date': '05/08/2016'
}, {
         'name': 'Bear me',
         'path': 'src/collage2.jpg',
         'date': '15/01/2015'
}, {
         'name': 'Puppet Show',
         'path': 'src/ilustracion5.jpg',
         'date': '05/01/2017'
}, {
         'name': 'Three Astronauts',
         'path': 'src/threeAstronauts.png',
         'date': '11/12/2016'
}, {
         'name': 'Split',
         'path': 'src/ilustracion3.jpg',
         'date': '29/07/2014'
}, {
         'name': 'Crude Reality',
         'path': 'src/collage1.jpg',
         'date': '03/02/2017'
}, {
         'name': 'No brainer',
         'path': 'src/ilustracion4.jpg',
         'date': '14/01/2016'
}]
     $(document).ready(function () {
         images.forEach(function (a) {
             $("#gallery").append('<div class="card" style="background-image: url('+a.path+')"> <div class="black"></div> <span><h2>Title:</h2>'+a.name+'<br><h2>Date:</h2>'+a.date+'</span></div>');
         });
         $('#fullpage').fullpage({
             anchors: ['1P', '2P', '3P', '4P', '5P'],
             normalScrollElements: '#circle, #contact',
             scrollOverflow: true
         });
         $('#circle').click(function () {
             $(this).toggleClass('active');
             $('#contact').toggleClass('active');
         });
         $(".card").hover(function () {
             $(this).toggleClass('active');
         })
     });
 };