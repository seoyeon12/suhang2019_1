$( document ).ready( function() {
    var jbOffset = $( '.jbMenu' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( '.jbMenu' ).addClass( 'jbFixed' );
      }
      else {
        $( '.jbMenu' ).removeClass( 'jbFixed' );
      }
    });

    startDate();
  } );

  function startDate() { 
    date = setInterval(function () { 
        var dateString = "Korea date is : "; 

        var newDate = new Date(); 

        dateString += newDate.getFullYear() + "/"; 
        dateString += ("0" + (newDate.getMonth() + 1)).slice(-2) + "/"; //월은 0부터 시작하므로 +1을 해줘야 한다. 
        dateString += ("0" + newDate.getDate()).slice(-2) + " "; 
        dateString += ("0" + newDate.getHours()).slice(-2) + ":"; 
        dateString += ("0" + newDate.getMinutes()).slice(-2) + ":"; 
        dateString += ("0" + newDate.getSeconds()).slice(-2);
        
        $("#time").text(dateString); 
    }, 1000); 
} 

