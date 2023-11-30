$(document).ready(function () {
   var converter = new showdown.Converter();
    $("#btn-consultar").on("click", function (){
        $.ajax({
            url: " http://127.0.0.1:3002/chat",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({pregunta: "tengo una pregunta sobre la salud  "+$("#txt_buscador").val()}),
            success: function (data) {
                $("#chatt").append(`<p class="chatt-response"> ${converter.makeHtml(data.respuesta)} </p>`)
                console.log(data)
            }
        })

    })



})