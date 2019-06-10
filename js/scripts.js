$(function(){
  $("#gs1").click(function(){
    $("#godsword1Info").toggle();
  });
  $("#gs2").click(function(){
    $("#godsword2Info").toggle();
  });
  $("#gs3").click(function(){
    $("#godsword3Info").toggle();
  });
  $("#gs4").click(function(){
    $("#godsword4Info").toggle();
  });
});

//learning through failure below

// $(function(){
// // debugger
//
// var godswords;
//   for (var i = 1; i < 5; i+=1) {
//     godswords = i;
//     $("#gs" + godswords.valueOf()).click(
//
//       function(){
//       $("#godsword" + godswords + "Info").toggle();
//     });
//   }
//
// });




// $(function(){
//
// var godswords = 4;
//
// $('#gs' + godswords).click(function(){
//   $("#godsword" + godswords + "Info").toggle();
// })
// });
