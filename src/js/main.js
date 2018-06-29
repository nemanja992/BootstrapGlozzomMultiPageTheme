//tried to retype code from video, failed. Not sure what's the problem...

// $(function () {
//     $(".video").click(function () {
//         var theModal = $(this).data("target"),
//         videoSRC= $(this).attr("data-video"),
//         videoSRCauto = videoSRC + 
//         "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
//         $(theModal + 'iframe').attr('src', videoSRCauto);
//         $(theModal + ' button.close').click(function() {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//     });
// });

// console.log('hello');

//copy-pasted

$(function() {
    // Auto play modal video
    $(".video").click(function () {
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  });
  
  // Added some code I found online to stop video from playing when closing modal(by clicking on empty space outside)
  //when clicked the closing button, video stopped playing
  //when clicked outside of modal, video kept playing in the background
  //code below fixed it


  jQuery('#videoModal').on('hidden.bs.modal', function (e) {
    $('#videoModal iframe').attr('src', '');
});  



//Lightbox

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
})