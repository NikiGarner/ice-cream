$(document).ready(function() {

$("button#Patricia").click(function() {
  var patricia = ['Pistachio ' , 'Chocolate Peanut Butter'];
  patricia.forEach(function(patflavor){
    $("ul#patriciaflavors").append(patflavor);



    })
  });

  $("button#Niki").click(function() {
    var niki = ['Chocolate ', 'Vanilla'];
    niki.forEach(function(nflavor){
      $("ul#nikiflavors").append(nflavor);

    })
  });
});
