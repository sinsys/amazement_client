// Ensure DOM is ready
document.addEventListener("DOMContentLoaded", function(){
  // Gather any forms
  var forms = document.getElementsByTagName('form');
  // Prevent default submit on all forms
  for(i=0, len=forms.length; i<len; i++){
      forms[i].addEventListener('submit', function(e){e.preventDefault();});
  };
});

