var form = document.getElementById('form');
var input = document.getElementById('search');
var searchButton = document.getElementById('srch');
var shpCrtButton = document.getElementById('shp-crt');



shpCrtButton.addEventListener('click', function(event){
    event.preventDefault();
});

input.addEventListener('keyup', function(event) {
    console.log(input.value);
    if (event.key === 32) {
        event.preventDefault();

        if (input.value.trim() !== '') {
            form.submit();
        }
    }
});

searchButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (input.value.trim() !== '') {
        form.submit();
    }
});