# Set up gems listed in the Gemfile.
# See: http://gembundler.com/bundler_setup.html
#      http://stackoverflow.com/questions/7243486/why-do-you-need-require-bundler-setup
ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../../Gemfile', __FILE__)

require 'bundler/setup' if File.exists?(ENV['BUNDLE_GEMFILE'])

# Require gems we care about
require 'rubygems'

require 'uri'
require 'pathname'

require 'pg'
require 'active_record'
require 'logger'
require 'bcrypt'
require 'debugger'

require 'sinatra'
require "sinatra/reloader" if development?

require 'erb'
require 'omniauth'
require 'omniauth-google-oauth2'
require 'omniauth-twitch_oauth2'
# Some helper constants for path-centric logic
APP_ROOT = Pathname.new(File.expand_path('../../', __FILE__))

APP_NAME = APP_ROOT.basename.to_s

# Set up the controllers and helpers
Dir[APP_ROOT.join('app', 'controllers', '*.rb')].each { |file| require file }
Dir[APP_ROOT.join('app', 'helpers', '*.rb')].each { |file| require file }

# Set up the database and models
require APP_ROOT.join('config', 'database')

# use OmniAuth::Builder do
#   # For additional provider examples please look at 'omni_auth.rb'
#   provider :google_oauth2, '631878338394.apps.googleusercontent.com', 'sterRGO4MJHBiqyLXbT0eart', {}
#   provider :twitch_oauth2, 'nan2jfbfe0mhllncuwfj43mhf2qarxv', 'm2ui57hdhmqdemkxdhaykwq4xdwwgl2', {scope: "user_read user_blocks_edit user_blocks_read user_follows_edit channel_read channel_editor channel_commercial channel_stream channel_subscriptions channel_check_subscription chat_login"}
# end
