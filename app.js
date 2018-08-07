const api = "https://api.myjson.com/bins/10pbxc";

window.onload = () => {
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            //aqui van todas las funciones que utilicen la data
            restaurantMexs(data);
            //getSelectValue(data);

            //console.log(data);

        })
        .catch((error) => {
            console.log(errormio);

        });
}


const container = document.getElementById('result');
window.restaurantMexs = (data) => {
    document.getElementById('btn').addEventListener('click', (event) => {
        let result = '';
        const info = Object.keys(data.comidamex.restaurante);
       

        for (var restaurante in info) {
            if (info.hasOwnProperty(restaurante)) {
                let arrmexfood = data.comidamex.restaurante[info[restaurante]].places;
                //console.log(arrmexfood);

                let arrmexfoodLength = arrmexfood.length;
                //console.log(arrmexfoodLength);
                

                for (i = 0; i < arrmexfoodLength; i++) {
                    $(document).ready(function () {
                        $('.modal').modal();
                    });
                    result += `
                    <div class="row">
                    <div class="col s12 m7">
                      <div class="card">
                        <div class="card-image">
                          <img src="${data.comidamex.restaurante[info[restaurante]].places[i].foto}">
                          <span class="card-title">${data.comidamex.restaurante[info[restaurante]].places[i].nombre}</span>
                          </div>
                          <div class="card-content">
                          <p>${data.comidamex.restaurante[info[restaurante]].places[i].comentario}</p>
                           </div>
                           <div class="card-action">
                           <a class="waves-effect waves-light btn modal-trigger" href="#modal1">+ INFO</a>
                           <div id="modal1" class="modal">
                           <div class="modal-content">
                           <h5>${data.comidamex.restaurante[info[restaurante]].places[i].nombre}</h5>
                           <p>Domicilio: ${data.comidamex.restaurante[info[restaurante]].places[i].domicilio}</p>
                           <p>Tel: ${data.comidamex.restaurante[info[restaurante]].places[i].tel}</p>
                           <p>Horario: ${data.comidamex.restaurante[info[restaurante]].places[i].horario}</p>
                           <iframe class="resp-iframe-center-aling" src="${data.comidamex.restaurante[info[restaurante]].places[i].localizacion}" width="150" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
                           </div>
                           <div class="modal-footer">
                           <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                           </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    `
                    
                }
            }
            container.innerHTML = result;
        }
    });
}



// const card = document.getElementById('selectedfood');

// window.getSelectValue = (data) => {
//     let selectedValue = document.getElementById('list').value;
//     if( selectedValue === "mexicana"){
//         window.restaurantMexs(data);
//     }else{
//         console.log("hola!");

//     }
// }


// const card = document.getElementById('selectedfood');

// function getSelectValue() {
//     let selectedValue = document.getElementById("list").value;
//     document.getElementById('selectedfood').innerHTML = "escogiste " + selectedValue;
// }
// getSelectValue();