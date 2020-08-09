var options = {
    'damping': 0.05
}

Scrollbar.init(document.querySelector('#my-scrollbar'), options);

// tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

