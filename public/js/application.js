$(document).ready(function() {
  // initialize twitch sdk
  Twitch.init({clientId: 'nan2jfbfe0mhllncuwfj43mhf2qarxv'}, function(error, status) {
    // the sdk is now loaded
    console.log(error);
    console.log(status);
  });

   // triggers login
  $('.twitch-connect').click(function() {
    Twitch.login({
      scope: ['user_read', 'channel_read']
    });
  })

  if (status.authenticated) {
    // Already logged in, hide button
    $('.twitch-connect').hide()
  }
  // console.log(status)
});
