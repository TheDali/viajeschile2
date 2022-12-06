$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  
    $("#enviarCorreo").click(function () {
      alert("Gracias por contactarnos, en breve su solicitud sera atentida...");});
    });
    
$(document).scroll(function () {
      const y = $("html").scrollTop();
    
      y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
    });
    