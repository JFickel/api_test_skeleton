get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/auth/:provider/callback' do
  content_type 'text/plain'
  request.env['omniauth.auth'].to_hash.inspect rescue "No Data"
end
