document.getElementById("button-hapiness").addEventListener('click', function(){
    document.querySelector(".header-logo-car").style.display = 'inline';
    document.getElementById("button-hapiness").disabled = true;
    document.getElementById("button-sadness").disabled = false;
});

document.getElementById("button-sadness").addEventListener('click', function(){
    document.querySelector(".header-logo-car").style.display = 'none';
    document.getElementById("button-hapiness").disabled = false;
    document.getElementById("button-sadness").disabled = true;
});