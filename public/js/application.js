








// $(document).ready(function() {
//   // initialize twitch sdk
//   Twitch.init({clientId: 'kwh498lg2c4p659yx8ng713d00q3rjp'}, function(error, status) {
//     // the sdk is now loaded
//     // triggers login
//     console.log(error)
//     console.log(status)
//     // secret: 'ks6u1x5w2g69zk8txwjzyi1s407dqzu'
//     if (status.authenticated) {
//       // Already logged in, hide button
//       $('.twitch-connect').hide()
//     }
//   });
//   //127.0.0.1 == localhost

//   $('.twitch-connect').click(function() {
//     Twitch.login({
//       scope: ['user_read', 'channel_read', 'user_blocks_edit']
//     });
//   })

//   // callback function named "signinCallback" not found???
//   function signinCallback(authResult) {
//     if (authResult['access_token']) {
//       // Successfully authorized
//       // Hide the sign-in button now that the user is authorized, for example:
//       document.getElementById('signinButton').setAttribute('style', 'display: none');
//     } else if (authResult['error']) {
//       // There was an error.
//       // Possible error codes:
//       //   "access_denied" - User denied access to your app
//       //   "immediate_failed" - Could not automatically log in the user
//       // console.log('There was an error: ' + authResult['error']);
//   }
// }

// });
// // #   provider :twitch_oauth2, 'l0dvrdx50eq84u4j2oi0rw02dy2a8d', 'ojfjvx7d6pymyb23gzo4s8zbt8lr8tk', {scope: "user_read user_blocks_edit user_blocks_read user_follows_edit channel_read channel_editor channel_commercial channel_stream channel_subscriptions channel_check_subscription chat_login"}
// // google_client_id: 631878338394-cqeatoatpmhqu47kl5dtgq12o9n8psu6.apps.googleusercontent.com
// // google_client_secret: UMTZuO502EJ-ugH5QkwvZ5fV

//     // window.CLIENT_ID = '4ea49phb73jeffd1d5mslv02e';
//     // $(function() {
//     //   // Initialize. If we are already logged in, there is no
//     //   // need for the connect button
//     //   Twitch.init({clientId: CLIENT_ID}, function(error, status) {
//     //     if (status.authenticated) {
//     //       // we're logged in :)
//     //       $('.status input').val('Logged in! Allowed scope: ' + status.scope);
//     //       // Show the data for logged-in users
//     //       $('.authenticated').removeClass('hidden');
//     //     } else {
//     //       $('.status input').val('Not Logged in! Better connect with Twitch!');
//     //       // Show the twitch connect button
//     //       $('.authenticate').removeClass('hidden');
//     //     }
//     //   });


//     //   $('.twitch-connect').click(function() {
//     //     Twitch.login({
//     //       scope: ['user_read', 'channel_read']
//     //     });
//     //   })

//     //   $('#logout button').click(function() {
//     //     Twitch.logout();

//     //     // Reload page and reset url hash. You shouldn't
//     //     // need to do this.
//     //     window.location = window.location.pathname
//     //   })

//     //   $('#get-name button').click(function() {
//     //     Twitch.api({method: 'user'}, function(error, user) {
//     //       $('#get-name input').val(user.display_name);
//     //     });
//     //   })

//     //   $('#get-stream-key button').click(function() {
//     //     Twitch.api({method: 'channel'}, function(error, channel) {
//     //       $('#get-stream-key input').val(channel.stream_key);
//     //     });
//     //   })

//     // });

