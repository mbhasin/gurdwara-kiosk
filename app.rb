require 'sinatra'
require 'sinatra/partial'
require 'rack-flash'
enable :sessions
set :session_secret, 'super secret'
use Rack::Flash
set :partial_template_engine, :erb