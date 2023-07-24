//ativa o carousel do plugin slick
$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    //ativa rolagem para baixo do menu hamburguer
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    });

    //ativa o a máscara ou formato do telefone atraves do plugin jquery mask
    $('#telefone').mask('(00) 00000-0000')

    //valida formulario, cria a obrigatoriedade de preenchimento atraves do plugin jquery validate
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },

        //customiza a mensagem do plugin jquery messages
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email corretamente',
            veiculoDeInteresse: 'Por favor, insira seu veículo de interesse',
            mensagem: 'Por favor, insira uma mensagem ao vendedor'
        },
        submitHandler: function(form) {
            console.log(form)
        },

        //escuta e intercepta apos clicar em botao enviar que existem campos a preencher
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    //ao clicar no botao tenho interesse, rola a pagina para seção do contato
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text(); //this esta relacionado ao clicar no botão, vai percorrer todo DOM do container. O parent esta relacionado ao elemento pai

        $('#veiculo-de-interesse').val(nomeVeiculo); //vai buscar ou recupera o valor do input

        //realiza o efeito de animação indicando a distancia em que está np caso do anuncio para contato
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000) //velocidade em milisegundos
    })
})
