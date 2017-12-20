
$(function() {
  var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button');

  setTimeout(function() {
        welcomeSection.removeClass('content-hidden');
    }, 500);

    enterButton.on('click', function(e) {
      e.preventDefault();
      welcomeSection.addClass('content-hidden').fadeOut();
    });

})();


function visitPage(){
  window.location = 'secondPage.html';
}
