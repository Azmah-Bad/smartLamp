# Lamp Pi

a NodeJS api that is hosted in Raspberry Pi that is powering my desk lamp via USB
![](https://github.com/Azmah-Bad/smartLamp/blob/master/doc/Architecture.png)

## Routes
the API has 2 routes :
 - `POST /api/lamp/on`:     turns USB port up 
 - `POST /api/lamp/off`:    turns USB port down thus turning light off
 - `GET /`                  home page with 2 buttons to turn on or off the lamp (The UI is optimized for phones)

## Technologies
 I used [uhubctl](https://github.com/mvp/uhubctl) to control the USB port on the RaspberryPi
and I used Express Typescript for the API 
  
I used JS + HTML for the webpage 

![](https://github.com/Azmah-Bad/smartLamp/blob/master/doc/UI.png)
 
 
I also made an iPhone shortcut to make the api accessible from an iPhone

![](https://github.com/Azmah-Bad/smartLamp/blob/master/doc/shortcut.png)


## Credit 
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
 
 
 
