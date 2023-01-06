

$('#sendData').on('click', function () {
    console.log('Tache ajouté');
    var signal = $('#signal').val();
    alert(signal,'alert')
    if (signal != "") {
        $.ajax({
            url: 'https://billun.com/api/Site/Declare',
            method: 'POST',
            type: 'json',
            data: {
                signal,
            },
            success: function (response) {
                console.log("success");
            },
            error: function (error) {
                console.log("error");
            }
          
        });
     
    }
    else {
        alert('Please fill all the field !');
    }
})
