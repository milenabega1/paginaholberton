document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById ("principal-img");
  thumbnailElement.addEventListener ("click", function () {
    if (thumbnailElement.className == "") {
    	thumbnailElement.className = "small";
    }
    else {
      thumbnailElement.className = "";
    }

  });

});
