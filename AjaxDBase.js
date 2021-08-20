

async function readData(url,data = {}) {
        // Default options are marked with *
        const response = await fetch(url);
        return response.json(); 
      }
      
let productos=readData('dataBase/dataBase.JSON',"")
        .then(data => {
        
          console.log(data.hamburguesas); 
         data.hamburguesas
          hamburguesas=''
          for(let i=0;i<data.hamburguesas.length;i++) {
          

          hamburguesas += '<div id="hamburguesa1" class="col-6 col-md-4 col-xl-3"> <div class="item shadow mb-4"> <h3 class="item-title"> $ '+ data.hamburguesas[i].nombre+' <img src='+data.hamburguesas[i].image+' alt=""> <div class="item-details"> <h4 class="item-price">'+ data.hamburguesas[i].precio+'</h4> </div> </div> </div>'     

          document.getElementById ("pantalla_1_items").innerHTML=hamburguesas

          }
        });


