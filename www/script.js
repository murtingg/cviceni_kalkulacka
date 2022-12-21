$(document).ready(function() {

    var vstup = '0';
    var vystup = '';
    var operátor = '';
    var výsledek = 0;
    

    $('button').click(function() {
      var hodnota = $(this).text();
      

      if (hodnota == 'C') {
        vstup = '0';
        vystup = '';
        operátor = '';
        výsledek = 0;
      } else if (hodnota == '←') {
        vstup = vstup.slice(0, -1);
        if (vstup == '') {
          vstup = '0';
        }
      } else if (hodnota == '=') {
        if (operátor == '+') {
          výsledek = parseFloat(vystup) + parseFloat(vstup);
        } else if (operátor == '-') {
          výsledek = parseFloat(vystup) - parseFloat(vstup);
        } else if (operátor == '*') {
          výsledek = parseFloat(vystup) * parseFloat(vstup);
        } else if (operátor == '/') {
          výsledek = parseFloat(vystup) / parseFloat(vstup);
        }
        vstup = výsledek.toString();
        vystup = '';
        operátor = '';
      } else {

        if (vstup == '0') {
          vstup = hodnota;
        } else {
          vstup += hodnota;
        }
        

        if (hodnota == '+' || hodnota == '-' || hodnota == '*' || hodnota == '/') {
          vystup = vstup.slice(0, -1);
          operátor = hodnota;
          vstup = '0';
        }
      }

      $('#input').val(vstup);
    });
  });
  