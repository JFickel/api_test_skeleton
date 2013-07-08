post '/signin' do
  user = User.find_by_email(params[:user][:email])
  if user && user.authenticate(params[:user][:password])
    session[:user_id] = user.id
    redirect :"users/#{user.id}"
  else
    @errors = user.errors
    redirect '/'
  end
end

get '/logout' do
  session.clear
  redirect '/'
end
