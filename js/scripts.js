var pigLatin = function(english) {
  if ((english !== (integer))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#latin-translator").submit(function(event) {
    event.preventDefault();
    var english = $("input#english").val();
    var result = pigLatin(english);
    $("#result").text(result);
  });
});
