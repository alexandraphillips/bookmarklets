var increase = (function() {

  var increase = function() {
    var fontSize = parseInt($("p, div").css("font-size"));
    fontSize = fontSize + 2 + "px";
    $("p, div").css("font-size", fontSize);
  }

  function loadjQuery(callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-1.11.3.min.js';

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
  }
  loadjQuery();

  return increase;
})()();
