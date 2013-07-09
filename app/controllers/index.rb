get '/' do
  <<-HTML
    <ul>
      <li><a href='/auth/google_oauth2'>Sign in with Google</a></li>
      <li><a href='/auth/twitch_oauth2'>Sign in with Twitch</a></li>
    </ul>
  HTML
end

get '/stream' do
  erb :index
end

get '/auth/:provider/callback' do
  content_type 'text/plain'
  provider_data = request.env['omniauth.auth'].to_hash.inspect rescue "No Data"
  response = HTTParty.get('https://api.twitch.tv/kraken')
end

get '/auth/failure' do
  content_type 'text/plain'
  request.env['omniauth.auth'].to_hash.inspect rescue "No Data"
end

# providers table
# name:
# token:
# user_id

