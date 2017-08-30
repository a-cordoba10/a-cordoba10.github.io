 window.onload = function () {
     var images = [{
         'name': 'Study, Work & Die',
         'path': 'src/collage1.jpg',
         'date': '28/07/2015'
     }, {
         'name': 'Full of shit,
         'path': 'src/collage1.jpg',
         'date': '05/08/2016'
}, {
         'name': 'Bear me',
         'path': 'src/collage1.jpg',
         'date': '15/01/2015'
}, {
         'name': 'Puppet Show',
         'path': 'src/collage1.jpg',
         'date': '05/01/2017'
}, {
         'name': 'Three Astronauts',
         'path': 'src/threeAstronauts.png',
         'date': '11/12/2016'
}, {
         'name': 'Split',
         'path': 'src/collage1.jpg',
         'date': '29/07/2014'
}, {
         'name': 'Crude Reality',
         'path': 'src/collage1.jpg',
         'date': '03/02/2017'
}, {
         'name': 'No brainer',
         'path': 'src/collage1.jpg',
         'date': '14/01/2016'
}]
     $(document).ready(function () {
         $('#fullpage').fullpage({
             anchors: ['1P', '2P', '3P', '4P', '5P'],
             normalScrollElements: '#circle, #contact',
             scrollOverflow:true
         });
         $('#circle').click(function () {
             $(this).toggleClass('active');
             $('#contact').toggleClass('active');
         });
//         images.forEach(function (a) {
//             $("#work").append("");
//         });
     });
 };