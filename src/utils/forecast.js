const request = require('request')

const forecast = (latitude,longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/0601e9c66a98b0757857b7291df12861/' + latitude + ',' + longitude

    request({ url, json:true}, (error, { body }) => {
        if(error){
            callback('OS Exception!!!',undefined)
        }else if(body.error){
            callback('Incorrect URL',undefined);
        }else{
            //callback(undefined, response.body.daily.data[1].summary);
            console.log(body.daily.data[0])
            callback(undefined, "It is currently "+body.currently.temperature + " degrees out. There is a "+body.currently.precipProbability+ " % chance of rain." +" Daily temperature high "+body.daily.data[0].temperatureHigh + ' with a low of '+body.daily.data[0].temperatureLow)
   }
    })
}

module.exports=forecast;