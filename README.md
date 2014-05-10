Gurdwara-Kiosk [![Code Climate](https://codeclimate.com/github/Kesrinishaan/gurdwara-kiosk.png)](https://codeclimate.com/github/Kesrinishaan/gurdwara-kiosk)
---
![](screenshot.png?raw=true)

This Sinatra app has been designed to be displayed on an
iPad Kiosk app to display information of a Gurdwara (Sikh
place of worship) to the Sangat (congregation) and wider
community.

This version has been created for [Sri Guru Singh Sabha
Gurdwara, Derby](http://www.sgssderby.com), however if you
wish to customise it for another place of worship you can do
so. It has been deployed to a
[DigitalOcean](http://188.226.219.216:9000) Server using Nginx
and Unicorn.

### Technologies
* Ruby
* Git
* Digital Ocean
* Nginx
* Unicorn
* Sinatra

### Instructions
To run the application:

* Clone the repository
`git clone git@github.com:khushkaran/gurdwara-kiosk.git`
* Run `bundle install`
* Run `shotgun` or `shotgun -p [port number]`
to specify a port number
* Visit `localhost:9393` or `localhost:[port number]`

To edit the content, these are the pertinent files/folders:
* `views/`
* `public/json/`
* `public/images/`
* `settings.xml` - This file will be useful if using Kiosk
Pro App, where you can use this to ammend the settings
remotely.

### Issues
* Make it easier to ammend, i.e. use a config file.

### Physical Issues
As I have had personal experience setting up the physical
iPad, there a few points I would like to add to help:
* Ensure there is sufficient wi-fi coverage
* Choose your location in plain sight so people can use them
* If possible ensure children don't damage it
* Use a poster or pull-up banner to draw attention to it
