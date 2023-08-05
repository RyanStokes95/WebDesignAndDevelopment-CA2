// Code which toggles between images taken and editted from: https://codepen.io/JackEdwardLyons/details/ZWvNbL
$(".directions-container").on("click", function() {
    var image_1 = $("img#one");
    var img1_src = "/images/roadmap.jpg";
    var img2_src = "/images/roadmap2.jpg";
      
    if (image_1.attr("src") == img1_src) {
        
        image_1.attr("src", img2_src);
      } else {
        image_1.attr("src", img1_src);
      }
  });