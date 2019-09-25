
// jQuery DOM References
var $form = $('#tempForm');
var $result = $('#result');
var $clear = $('#clear');

// Vanilla DOM References
// var form = document.forms[0];
// var resultText = document.getElementById('result');
// var clear = document.getElementById('clear');

// jQuery Event Listeners
$form.submit(function(e) {
  e.preventDefault();
  var originalTemp = parseFloat( $('#tempInput').val() );
  var unit = $( 'input[type=radio]:checked' ).val();

  if (unit === "ftoc") {
    // (deg − 32) × 5/9
    var result = (originalTemp - 32) * (5/9);
    result = result.toString() + ' degrees C' 
  } else {
    var result = (originalTemp * (9/5)) + 32;
    result = result.toString() + ' degrees F'
  }
  $result.html(result);
});

$clear.click(function(e) {
  e.preventDefault();
  $('#tempInput').val('');
  $result.html('');
});

// Vanilla Event Listeners
// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   var originalTemp = parseFloat(form.temp.value);
//   var unit = form.unit.value;
//   if (unit === "ftoc") {
//     // (deg − 32) × 5/9
//     var result = (originalTemp - 32) * (5/9);
//     result = result.toString() + ' degrees C' 
//   } else {
//     var result = (originalTemp * (9/5)) + 32;
//     result = result.toString() + ' degrees F'
//   }
//   console.log(result);
//   resultText.textContent = result;
// });

// clear.addEventListener('click', function(e) {
//   e.preventDefault();
//   form.temp.value = '';
//   result.textContent = '';
// })