function displaynumber(num){
    document.getElementById("result").value+=num
}

function clearText(){
    document.getElementById("result").value=" "
    
}
function operation(){
    result.value =eval(result.value)
}

function deleteLast(){
    result.value=result.value.slice(0,-1)
}