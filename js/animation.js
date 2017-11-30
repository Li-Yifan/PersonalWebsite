
$(function() {
  var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button');

  setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500); d

})();

enterButton.on('click', function(e) {
  e.preventDefault();
  welcomeSection.addClass('content-hidden').fadeOut();
});
