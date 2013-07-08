helpers do
  def current_user
    User.find(session[:user_id])
  end

  def authenticate!
    if !session[:user_id]
      redirect '/'
    end
  end
end
