$('.number').on('click', function() {
  calc.input.value += this.value;
});

$('.operator').on('click', function() {
  calc.input.value += this.value;
});

$('[name="equals"]').on('click', function() {
  calc.input.value = parseFloat(eval(calc.input.value).toFixed(3));
});

$('[name="clear"]').on('click', function() {
  calc.input.value = '';
});

var maxLength = 15;

/* Restrict input characters */
$('#text-input').keypress(function(e) {
  var validKeys = String.fromCharCode(e.which);
  if ('.0123456789'.indexOf(validKeys) < 0) {
    return false;
  }
  if (calc.input.value.length === maxLength) {
    e.preventDefault();
    calc.input.value = '';
    $('#text-input').attr('placeholder', 'ERROR!')
  }
});

$('#text-input').keyup(function(e) {
  if (e.shiftKey && e.which === 187 || e.which === 107) { // plus sign
    $('[value="+"]').click();
  }
  if (e.which === 189 || e.which === 109) { // minus sign
    $('[value="-"]').click();
  }
  if (e.shiftKey && e.which === 56 || e.which === 106) { // multiplication sign
    $('[value="*"]').click();
  }
  if (e.which === 191 || e.which === 111) { // division sign
    $('[value="/"]').click();
  }
  if (e.which === 13 || e.which === 187) { // equals sign or enter key
    $('[value="="]').click();
  }
  if (e.which === 27 || e.which === 67) { // c or esc
    $('[name="clear"]').click();
  }
});

$('.flipperBtn').on('click', function() {
  $('.wrapper').toggleClass('.flipper');
})

$('.flipper').on('click', function() {
  $('body').toggleClass('transform');
})