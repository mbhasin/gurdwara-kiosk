get '/' do
  erb :index, :layout => false
end

get '/getstarted' do
  erb :getstarted
end

get '/contact' do
  erb :contact
end

get '/etiquette' do
  erb :etiquette
end

get '/events' do
  erb :events
end

get '/news' do
  erb :news
end

get '/program' do
  erb :program
end

get '/museum' do
  erb :museum
end

#etiquette

get '/etiquette-general' do
  erb :"/etiquette/general"
end

get '/etiquette-langar' do
  erb :"/etiquette/langar"
end

get '/etiquette-prayer' do
  erb :"/etiquette/prayer"
end

get '/etiquette-sanskaar' do
  erb :"/etiquette/sanskaar"
end

get '/etiquette-wedding' do
  erb :"/etiquette/wedding"
end