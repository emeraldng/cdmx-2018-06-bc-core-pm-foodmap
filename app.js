const card = document.getElementById('selectedfood');

// document.getElementById("myCheckbox").addEventListener("click", function(event){
//     event.preventDefault()
// });


document.getElementById("").addEventListener("click", function(eve))
function getSelectValue() {
    //event.preventDefault()
    var selectedValue = document.getElementById("list").value;
    event.preventDefault()
  

    document.getElementById('selectedfood').innerHTML = "escogiste " + selectedValue;
}
getSelectValue();