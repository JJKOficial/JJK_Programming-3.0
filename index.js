          function fechar_menu(){
            var menu=document.getElementById("menu");
            menu.style.display='none';
        }
        var entrada1=document.getElementById("entrada1");
        var entrada2=document.getElementById("entrada2");
        var entrada3=document.getElementById("entrada3");
        var entrada4=document.getElementById("entrada4");
        var entrada5=document.getElementById("entrada5");
        var entrada6=document.getElementById("entrada6");
        var entrada7=document.getElementById("entrada7");
        var entrada8=document.getElementById("entrada8");
        var entrada9=document.getElementById("entrada9");
        var entrada10=document.getElementById("entrada10");
        var entrada11=document.getElementById("entrada11");
        var submenu1=document.getElementById("submenu1");
        var submenu2=document.getElementById("submenu2");
        var submenu3=document.getElementById("submenu3");
        var submenu4=document.getElementById("submenu4");
        var submenu5=document.getElementById("submenu5");
        var submenu6=document.getElementById("submenu6");
document.getElementById('button').addEventListener('click', function() {
  var menu= document.getElementById("menu");
            if (menu.style.display === 'none' || menu.style.display === '') {
             menu.style.display = 'block';
                submenu1.style.display = 'none';
                submenu2.style.display = 'none';
                submenu3.style.display = 'none';
                submenu4.style.display = 'none';
                submenu5.style.display = 'none';
                var barras=document.getElementById("traco").value;
            } else {
             menu.style.display = 'none';
            }
        });
        document.getElementById('menu1').addEventListener('click', function() {
            if (submenu1.style.display === 'none' || submenu1.style.display === '' || submenu2.style.display === 'none' || submenu2.style.display === '') {
                submenu1.style.display = 'block';
                submenu2.style.display = 'block';
                submenu11.style.display = 'block';
                submenu10.style.display = 'block';
            } else {
                submenu1.style.display = 'none';
                submenu2.style.display = 'none';
                submenu11.style.display = 'none';
                submenu10.style.display = 'none';
            }
        });
        //para submenu1
        document.getElementById("submenu1").addEventListener('click', function() {
        if (entrada1.style.display === 'none' || entrada1.style.display === '') {
           entrada1.style.display ='block';
           entrada2.style.display = 'block';
           entrada11.style.display ='block';
           entrada10.style.display = 'block';
            } else {
            entrada1.style.display = 'none';
            entrada2.style.display = 'none';
            entrada10.style.display = 'none';
            entrada11.style.display = 'none';
            }
        });
        // para submenu2
        document.getElementById("submenu2").addEventListener('click', function() {
        if (entrada3.style.display === 'none' || entrada3.style.display === '') {
             entrada3.style.display ='block';
            entrada4.style.display = 'block';
            entrada5.style.display = 'block';
             entrada6.style.display = 'block';
             entrada7.style.display = 'block';
            } else {
             entrada4.style.display = 'none';
             entrada3.style.display = 'none';
            entrada5.style.display = 'none';
             entrada7.style.display = 'none';
            entrada6.style.display = 'none';
       } });
        //para redes sociais
        document.getElementById('menu2').addEventListener('click', function() {
            if (submenu4.style.display === 'none' || submenu4.style.display === '' ){
                submenu4.style.display = 'block';
                submenu5.style.display = 'block';
            } else {
                submenu4.style.display = 'none';
                submenu5.style.display = 'none';
            }
        });
         submenu4.addEventListener('click', function() {
            if (entrada8.style.display === 'none' || entrada8.style.display === '') {
                entrada8.style.display = 'block';
                entrada9.style.display = 'block';
            } else {
                entrada8.style.display = 'none';
                entrada9.style.display = 'none';
            }
        });
          document.getElementById("menu3").addEventListener('click', function() {
        if (submenu6.style.display === 'none' ||  submenu6.style.display === '') {
            submenu6.style.display ='block';
            } else {
             submenu6.style.display = 'none';
            }
        });