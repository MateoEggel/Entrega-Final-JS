$(document).ready(function(){
var hamburguesasSeleccionada=0
var aderezosSeleccionada=[]
var cantHamburguesa=[]
var cantComplementos=[]
var cantBebidas=[]
var cantAderezos=[]
const pantalla_0 = document.getElementById ("pantalla_0")
const pantalla_1 = document.getElementById ("pantalla_1")
const pantalla_2 = document.getElementById ("pantalla_2")
const pantalla_3 = document.getElementById ("pantalla_3")
const pantalla_4 = document.getElementById ("pantalla_4")
const pantalla_5 = document.getElementById ("pantalla_5")
const pantalla_6 = document.getElementById ("pantalla_6")

pantalla_0.style.dispaly='block'
$("#btnResumen").attr("style", "display:none");
pantalla_1.style.display='none'
pantalla_2.style.display='none'
pantalla_3.style.display='none'
pantalla_4.style.display='none'
pantalla_5.style.display='none'
pantalla_6.style.display='none'

async function readData(url,data = {}) {
  // Default options are marked with *
  const response = await fetch(url);
  return response.json(); 
}

let productos=readData('dataBase/dataBase.JSON',"")
  .then(data => {
  
    hamburguesas=''
    resumen=''
    for(let i=0;i<data.hamburguesas.length;i++) {
      cantHamburguesa[i+1]=0
    hamburguesas += ' <div  class="col-6 col-md-3 shadow" > <div class="hamburguesa" id='+ data.hamburguesas[i].id+'>  <br>  <h3 class="item-title"> '+ data.hamburguesas[i].nombre+'  $'+ data.hamburguesas[i].precio+' <img class="img" src='+data.hamburguesas[i].image+' alt="">  </div> '     
    hamburguesas += ' CANTIDAD:  <div  class="btn-group btn-group-toggle" data-toggle="buttons"> </label> <label class="btn btn-secondary"> <input id='+ data.hamburguesas[i].id+' type="radio" class="restarHamburguesa" name="options" id="option3" autocomplete="off"> - </label> <label  class="btn btn-secondary"> <h5 class="contadorHamburguesa" id='+ data.hamburguesas[i].id+' >'+0+' </h5> </label> <label class="btn btn-secondary"> <input id='+ data.hamburguesas[i].id+' type="radio" class="sumarHamburguesa" name="options" id="option3" autocomplete="off"> + </label>  </div> </div> ' 
     resumen += '<div class="row resumenHamburguesa" id="'+data.hamburguesas[i].id+'" style="display:none"> <div  class="col-3" > <img class="img-resumen" src='+data.hamburguesas[i].image+' alt="">  </div> <div  class="col-4"> <h3 class="item-title"> '+ data.hamburguesas[i].nombre+'<h3> </div> <div  class="col-2"><h3 id="'+data.hamburguesas[i].id+'" class="cantHamburguesa"> X 0 </h3></div> <div  class="col-2"><h3 id="'+data.hamburguesas[i].id+'" class="precioHamburguesa">  0 </h3></div> <div class="col-2"> </div></div>'
           
  
  }
    document.getElementById ("pantalla_1_items").innerHTML=hamburguesas
    document.getElementById ("pantalla_5_hamburguesa").innerHTML=resumen




    complementos=''
for(let i=0;i<data.complementos.length;i++) {
  cantComplementos[i+1]=0
  complementos += ' <div  class="col-6 col-md-3 shadow" > <div class="complementos" id='+ data.complementos[i].id+'>  <br>  <h3 class="item-title"> '+ data.complementos[i].nombre+'  $'+ data.complementos[i].precio+' <img class="img" src='+data.complementos[i].image+' alt="">  </div> '     
  complementos += ' CANTIDAD:  <div  class="btn-group btn-group-toggle" data-toggle="buttons"> </label> <label class="btn btn-secondary"> <input id='+ data.complementos[i].id+' type="radio" class="restarComplementos" name="options" id="option3" autocomplete="off"> - </label> <label  class="btn btn-secondary"> <h5 class="contadorComplementos" id='+ data.complementos[i].id+' >'+0+' </h5> </label> <label class="btn btn-secondary"> <input id='+ data.complementos[i].id+' type="radio" class="sumarComplementos" name="options" id="option3" autocomplete="off"> + </label>  </div> </div> ' 
  resumen += '<div class="row resumenComplementos" id="'+data.complementos[i].id+'" style="display:none"> <div  class="col-3" > <img class="img-resumen" src='+data.complementos[i].image+' alt="">  </div> <div  class="col-4"> <h3 class="item-title"> '+ data.complementos[i].nombre+'<h3> </div> <div  class="col-2"><h3 id="'+data.complementos[i].id+'" class="cantComplementos"> X 0 </h3></div> <div  class="col-2"><h3 id="'+data.complementos[i].id+'" class="precioComplementos">  0 </h3></div> <div class="col-2"> </div></div>'
}
document.getElementById ("pantalla_2_items").innerHTML=complementos
document.getElementById ("pantalla_5_hamburguesa").innerHTML=resumen


bebidas=''
for(let i=0;i<data.bebidas.length;i++) {
  cantBebidas[i+1]=0
  bebidas += ' <div  class="col-6 col-md-3 shadow" > <div class="bebidas" id='+ data.bebidas[i].id+'>  <br>  <h3 class="item-title"> '+ data.bebidas[i].nombre+'  $'+ data.bebidas[i].precio+' <img class="img" src='+data.bebidas[i].image+' alt="">  </div> '     
  bebidas += ' CANTIDAD:  <div  class="btn-group btn-group-toggle" data-toggle="buttons"> </label> <label class="btn btn-secondary"> <input id='+ data.bebidas[i].id+' type="radio" class="restarBebidas" name="options" id="option3" autocomplete="off"> - </label> <label  class="btn btn-secondary"> <h5 class="contadorBebidas" id='+ data.bebidas[i].id+' >'+0+' </h5> </label> <label class="btn btn-secondary"> <input id='+ data.bebidas[i].id+' type="radio" class="sumarBebidas" name="options" id="option3" autocomplete="off"> + </label>  </div> </div> ' 
  resumen += '<div class="row resumenBebidas" id="'+data.bebidas[i].id+'" style="display:none"> <div  class="col-3" > <img class="img-resumen" src='+data.bebidas[i].image+' alt="">  </div> <div  class="col-4"> <h3 class="item-title"> '+ data.bebidas[i].nombre+'<h3> </div> <div  class="col-2"><h3 id="'+data.bebidas[i].id+'" class="cantBebidas"> X 0 </h3></div> <div  class="col-2"><h3 id="'+data.bebidas[i].id+'" class="precioBebidas">  0 </h3></div> <div class="col-2"> </div></div>'
}
document.getElementById ("pantalla_3_items").innerHTML=bebidas
document.getElementById ("pantalla_5_hamburguesa").innerHTML=resumen
   
aderezos=''
for(let i=0;i<data.aderezos.length;i++) {
  cantAderezos[i+1]=0
  aderezos += ' <div  class="col-6 col-md-3 shadow" > <div class="aderezos" id='+ data.aderezos[i].id+'>  <br>  <h3 class="item-title"> '+ data.aderezos[i].nombre+'  $'+ data.aderezos[i].precio+' <img class="img" src='+data.aderezos[i].image+' alt="">  </div> '     
  aderezos += ' CANTIDAD:  <div  class="btn-group btn-group-toggle" data-toggle="buttons"> </label> <label class="btn btn-secondary"> <input id='+ data.aderezos[i].id+' type="radio" class="restarAderezos" name="options" id="option3" autocomplete="off"> - </label> <label  class="btn btn-secondary"> <h5 class="contadorAderezos" id='+ data.aderezos[i].id+' >'+0+' </h5> </label> <label class="btn btn-secondary"> <input id='+ data.aderezos[i].id+' type="radio" class="sumarAderezos" name="options" id="option3" autocomplete="off"> + </label>  </div> </div> ' 
  resumen += '<div class="row resumenAderezos" id="'+data.aderezos[i].id+'" style="display:none"> <div  class="col-3" > <img class="img-resumen" src='+data.aderezos[i].image+' alt="">  </div> <div  class="col-4"> <h3 class="item-title"> '+ data.aderezos[i].nombre+'<h3> </div> <div  class="col-2"><h3 id="'+data.aderezos[i].id+'" class="cantAderezos"> X 0 </h3></div> <div  class="col-2"><h3 id="'+data.aderezos[i].id+'" class="precioAderezos">  0 </h3></div> <div class="col-2"> </div></div>'
}
document.getElementById ("pantalla_4_items").innerHTML=aderezos
document.getElementById ("pantalla_5_hamburguesa").innerHTML=resumen
 
  //  //recibe evento al realizar click dentro del elemento que contiene la clase img
  //  $(".hamburguesa").click(function(){
  //   console.log("click")
  //  //comprobamos si existe una imagen seleccionada
  //  if ( $( ".hamburguesa" ).hasClass( "seleccionado" ) ) {
  //  /*en el caso que exista ya una imagen seleccionada la eliminamos para que únicamente solo se tenga una imagen seleccionada*/
  //  $(".hamburguesa").removeClass("seleccionado");
  //  }
  //  //añadimos la clase de la imagen seleccionada
  //  $(this).addClass("seleccionado");
  //  hamburguesasSeleccionada=$(this).attr('id')
  //  console.log(hamburguesasSeleccionada)
  //  });

  // HAMBURGUESAS--------
  function precioTotal(){
    var precioTotal=0
    for(let i=0;i<data.hamburguesas.length;i++) {
      precioTotal=precioTotal+(data.hamburguesas[i].precio*cantHamburguesa[i+1])
    }
    for(let i=0;i<data.complementos.length;i++) {
      precioTotal=precioTotal+(data.complementos[i].precio*cantComplementos[i+1])
    }
    for(let i=0;i<data.bebidas.length;i++) {
      precioTotal=precioTotal+(data.bebidas[i].precio*cantBebidas[i+1])
    }
    for(let i=0;i<data.aderezos.length;i++) {
      precioTotal=precioTotal+(data.aderezos[i].precio*cantAderezos[i+1])
    }

    var resultado='<h2> Precio Total:'+precioTotal+'<h2>' 

  
    document.getElementById ("pantalla_5_resultado").innerHTML=resultado
  }
   $(".sumarHamburguesa").click(function(){
    cantHamburguesa[$(this).attr('id')]++
    precioTotal()
    console.log( "#"+[$(this).attr('id')]+".contadorHamburguesa "+cantHamburguesa[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".contadorHamburguesa").text(cantHamburguesa[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".cantHamburguesa").text(cantHamburguesa[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".precioHamburguesa").text(cantHamburguesa[$(this).attr('id')]*data.hamburguesas[$(this).attr('id')-1].precio)
    if (cantHamburguesa[$(this).attr('id')]==0){
      console.log("cero")
    $("#"+[$(this).attr('id')]+".resumenHamburguesa").attr("style", "display:none")
    }
    else{
      console.log("cant>0")
    $("#"+[$(this).attr('id')]+".resumenHamburguesa").attr("style", "display:in-line")
    }
  })

  $(".restarHamburguesa").click(function(){
    if (cantHamburguesa[$(this).attr('id')]>0) {
    cantHamburguesa[$(this).attr('id')]--
    precioTotal()
    console.log( "#"+[$(this).attr('id')]+".contadorHamburguesa "+cantHamburguesa[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".contadorHamburguesa").text(cantHamburguesa[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".cantHamburguesa").text(cantHamburguesa[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".precioHamburguesa").text(cantHamburguesa[$(this).attr('id')]*data.hamburguesas[$(this).attr('id')-1].precio)
    if (cantHamburguesa[$(this).attr('id')]==0){
      console.log("cero")
    $("#"+[$(this).attr('id')]+".resumenHamburguesa").attr("style", "display:none")
    }
    else{
      console.log("cant>0")
    $("#"+[$(this).attr('id')]+".resumenHamburguesa").attr("style", "display:in-line")
    }
    }
  })


// Complementos---------


$(".sumarComplementos").click(function(){
  cantComplementos[$(this).attr('id')]++
  precioTotal()
  console.log( "#"+[$(this).attr('id')]+".contadorComplementos "+cantComplementos[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".contadorComplementos").text(cantComplementos[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".cantComplementos").text(cantComplementos[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".precioComplementos").text(cantComplementos[$(this).attr('id')]*data.complementos[$(this).attr('id')-1].precio)
  if (cantComplementos[$(this).attr('id')]==0){
    console.log("cero")
  $("#"+[$(this).attr('id')]+".resumenComplementos").attr("style", "display:none")
  }
  else{
    console.log("cant>0")
  $("#"+[$(this).attr('id')]+".resumenComplementos").attr("style", "display:in-line")
  }
})



$(".restarComplementos").click(function(){
  if (cantComplementos[$(this).attr('id')]>0) {
  cantComplementos[$(this).attr('id')]--
  precioTotal()
  console.log( "#"+[$(this).attr('id')]+".contadorComplementos "+cantComplementos[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".contadorComplementos").text(cantComplementos[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".cantComplementos").text(cantComplementos[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".precioComplementos").text(cantComplementos[$(this).attr('id')]*data.complementos[$(this).attr('id')-1].precio)
  if (cantComplementos[$(this).attr('id')]==0){
    console.log("cero")
  $("#"+[$(this).attr('id')]+".resumenComplementos").attr("style", "display:none")
  }
  else{
    console.log("cant>0")
  $("#"+[$(this).attr('id')]+".resumenComplementos").attr("style", "display:in-line")
  }
  }
})



//BEBIDAS-----------------------------------------

$(".sumarBebidas").click(function(){
  cantBebidas[$(this).attr('id')]++
  precioTotal()
  console.log( "#"+[$(this).attr('id')]+".contadorBebidas "+cantBebidas[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".contadorBebidas").text(cantBebidas[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".cantBebidas").text(cantBebidas[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".precioBebidas").text(cantBebidas[$(this).attr('id')]*data.bebidas[$(this).attr('id')-1].precio)
  if (cantBebidas[$(this).attr('id')]==0){
    console.log("cero")
  $("#"+[$(this).attr('id')]+".resumenBebidas").attr("style", "display:none")
  }
  else{
    console.log("cant>0")
  $("#"+[$(this).attr('id')]+".resumenBebidas").attr("style", "display:in-line")
  }
})



$(".restarBebidas").click(function(){
  if (cantBebidas[$(this).attr('id')]>0) {
  cantBebidas[$(this).attr('id')]--
  precioTotal()
  console.log( "#"+[$(this).attr('id')]+".contadorBebidas "+cantBebidas[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".contadorBebidas").text(cantBebidas[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".cantBebidas").text(cantBebidas[$(this).attr('id')])
  $("#"+[$(this).attr('id')]+".precioBebidas").text(cantBebidas[$(this).attr('id')]*data.bebidas[$(this).attr('id')-1].precio)
  if (cantBebidas[$(this).attr('id')]==0){
    console.log("cero")
  $("#"+[$(this).attr('id')]+".resumenBebidas").attr("style", "display:none")
  }
  else{
    console.log("cant>0")
  $("#"+[$(this).attr('id')]+".resumenBebidas").attr("style", "display:in-line")
  }
  }
})


  // Aderezos-------------------

  $(".sumarAderezos").click(function(){
    cantAderezos[$(this).attr('id')]++
    precioTotal()
    console.log( "#"+[$(this).attr('id')]+".contadorAderezos "+cantAderezos[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".contadorAderezos").text(cantAderezos[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".cantAderezos").text(cantAderezos[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".precioAderezos").text(cantAderezos[$(this).attr('id')]*data.aderezos[$(this).attr('id')-1].precio)
    if (cantAderezos[$(this).attr('id')]==0){
      console.log("cero")
    $("#"+[$(this).attr('id')]+".resumenAderezos").attr("style", "display:none")
    }
    else{
      console.log("cant>0")
    $("#"+[$(this).attr('id')]+".resumenAderezos").attr("style", "display:in-line")
    }
  })
  
  
  
  $(".restarAderezos").click(function(){
    if (cantAderezos[$(this).attr('id')]>0) {
    cantAderezos[$(this).attr('id')]--
    precioTotal()
    console.log( "#"+[$(this).attr('id')]+".contadorAderezos "+cantAderezos[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".contadorAderezos").text(cantAderezos[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".cantAderezos").text(cantAderezos[$(this).attr('id')])
    $("#"+[$(this).attr('id')]+".precioAderezos").text(cantAderezos[$(this).attr('id')]*data.aderezos[$(this).attr('id')-1].precio)
    if (cantAderezos[$(this).attr('id')]==0){
      console.log("cero")
    $("#"+[$(this).attr('id')]+".resumenAderezos").attr("style", "display:none")
    }
    else{
      console.log("cant>0")
    $("#"+[$(this).attr('id')]+".resumenAderezos").attr("style", "display:in-line")
    }
    }
  })

   });





// --------------------------------------------
 
$("#btnIngresar").click(function(){
console.log("click boton")
    $("#pantalla_0").attr("style", "display:none");
    $("#pantalla_1").attr("style", "display:block");
    $("#btnResumen").attr("style", "display:block");
 })
    
  $("#btnHamburguesa").click(function(){
    console.log("click boton")
    $("#pantalla_1").attr("style", "display:none");
    $("#pantalla_2").attr("style", "display:block");
    $("#btnResumen").attr("style", "display:block");
  })

  $("#btnComplementos").click(function(){
    console.log("click boton")
    $("#pantalla_2").attr("style", "display:none");
    $("#pantalla_3").attr("style", "display:block");
    $("#btnResumen").attr("style", "display:block");
 })

  $("#btnBebidas").click(function(){
    console.log("click boton")
    $("#pantalla_3").attr("style", "display:none");
    $("#pantalla_4").attr("style", "display:block");
    $("#btnResumen").attr("style", "display:block");
 })

  $("#btnAderezos").click(function(){
    console.log("click boton")
    $("#pantalla_4").attr("style", "display:none");
    $("#pantalla_5").attr("style", "display:block");
    $("#btnResumen").attr("style", "display:block");
  })

  $("#btnConfirmar").click(function(){
    console.log("click boton")
    $("#pantalla_5").attr("style", "display:none");
    $("#pantalla_6").attr("style", "display:block");
    $("#btnResumen").attr("style", "display:none");
  })

  $("#btnInicio").click(function(){
    console.log("click boton")
    $("#pantalla_6").attr("style", "display:none");
    $("#pantalla_0").attr("style", "display:block");
  })
  
  $("#btnResumen").click(function(){
    console.log("click boton")

    $("#pantalla_0").attr("style", "display:none");
    $("#pantalla_1").attr("style", "display:none");
    $("#pantalla_2").attr("style", "display:none");
    $("#pantalla_3").attr("style", "display:none");
    $("#pantalla_4").attr("style", "display:none");
    $("#pantalla_5").attr("style", "display:block");
    $("#pantalla_6").attr("style", "display:none");
  })



  
});





