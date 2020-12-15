$(function () {
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 200,
    nav: false,
  });
});

$(document).ready(function(){

    $('form[id="formaA"]').validate({
        rules:{
            ime: 'required',
            adresa: 'required',
            brTel: 'required',
            email:{
                required: true,
                email: true,
            },
            lista: 'required'


        },
        messages:{
            ime:'Unesite ime i prezime!', 
            adresa: 'Unesite adresu za dostavu!',
            brTel: 'Unesite broj telefona.',
            email:"Unesite email u obliku ime@example.com",
            lista: 'Izaberite proizvod za porudzbinu'


        },
        submitHandler:function(form){
            form.submit();
        }


    })


});
