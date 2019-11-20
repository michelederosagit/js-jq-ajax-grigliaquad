$(document).ready(function(){
  
  $(".col").click(function(){
    var col = $(this);
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(numeroRicevuto){
        console.log(numeroRicevuto);
        if(numeroRicevuto.response > 5){
          col.html(numeroRicevuto.response);
          col.addClass("verde");
        } else if(numeroRicevuto.response <= 5){
          col.html(numeroRicevuto.response);
          col.addClass("giallo");
        }
      },
      error: function(richiesta, stato){
        console.log("Errore " + stato);
      }
    }); // Fine chiamata API
    // Se già cliccato disabilito il click
    col.off("click");
  }); // Fine funzione al Click
}); // Fine DocReady