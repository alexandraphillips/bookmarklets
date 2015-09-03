(function() {
  var images = [
  "test1.jpg","test2.jpg","test3.jpg"
  ]
  function getRandomImage(){
    var rand_index = Math.floor(Math.random() * images.length);
    return images[rand_index];
  }

  function loadjQuery(callback)
  {
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

  loadjQuery(function(){
    $.each(document.getElementsByTagName("img"), function( i, e ) {
      var img = getRandomImage();
      $(e).attr("src", img);
      $(e).attr("srcset", '');
      console.log(img);
    });
  });

})();
