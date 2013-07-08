post '/users' do
  user = User.new(params[:user])
  if user.save
    session[:user_id] = user.id
    redirect :"users/#{user.id}"
  else
    debugger
    @errors = user.errors
    redirect '/'
  end
end

get '/users/:id' do |id|
  @current_user = current_user
  erb :'/users/show'
end
