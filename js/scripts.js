$(document).ready(function() {
    // Código a ser executado quando o documento estiver pronto

    // Progress bar

    let containerA = document.getElementById('circleA');

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#65daf9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 60);

            circle.setText(value);


        }
     
    });

      let containerB = document.getElementById('circleB');

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#65daf9',
        strokeWidth: 8,
        duration: 1600,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 254);

            circle.setText(value);


        }
     
    });
  let containerC = document.getElementById('circleC');

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#65daf9',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 32);

            circle.setText(value);


        }
     
    });
  let containerD = document.getElementById('circleD');

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#65daf9',
        strokeWidth: 8,
        duration: 2200,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() * 5243);

            circle.setText(value);


        }
     
    });


    // Iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0; //serve para garantir que a animação só ocorra uma vez

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
             
        circleA.animate(1.0);  // Animação da barra de progresso para 100%
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
        stop = 1; // Garantir que a animação só ocorra uma vez
        }
    });

    // Parallax

    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 250);
});


