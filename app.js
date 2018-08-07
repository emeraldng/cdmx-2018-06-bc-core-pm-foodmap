const api = "https://api.myjson.com/bins/10pbxc";

window.onload = () => {
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            //aqui van todas las funciones que utilicen la data
            restaurantMexs(data);
            getSelectValue(data);

            //console.log(data);

        })
        .catch((error) => {
            console.log(errormio);

        });
}



window.restaurantMexs = (data) => {
    const info = Object.keys(data.comidamex.restaurante);
    
    for (var restaurante in info) {
        if (info.hasOwnProperty(restaurante)) {
            let arrmexfood = data.comidamex.restaurante[info[restaurante]].places;
            //console.log(arrmexfood);

            let arrmexfoodLength = arrmexfood.length;
            //console.log(arrmexfoodLength);
            
            for (i = 0; i < arrmexfoodLength; i++) {
                console.log(data.comidamex.restaurante[info[restaurante]].places[i].nombre);
                console.log(data.comidamex.restaurante[info[restaurante]].places[i].domicilio);
            }
        }
    }
}

const card = document.getElementById('selectedfood');

window.getSelectValue = (data) => {
    let selectedValue = document.getElementById('list').value;
    if( selectedValue === "mexicana"){
        window.restaurantMexs(data);
    }else{
        console.log("hola!");
        
    }
}







// const card = document.getElementById('selectedfood');

// function getSelectValue() {
//     let selectedValue = document.getElementById("list").value;
//     document.getElementById('selectedfood').innerHTML = "escogiste " + selectedValue;
// }
// getSelectValue();