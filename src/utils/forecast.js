const request = require('request')

const forecast = (a,b, callback) => {

    const url = 'https://api.darksky.net/forecast/0601e9c66a98b0757857b7291df12861/' + a + ',' + b

    request({ url, json:true}, (error, { body }) => {
        if(error){
            callback('OS Exception!!!',undefined)
        }else if(body.error){
            callback('Incorrect URL',undefined);
        }else{
            //callback(undefined, response.body.daily.data[1].summary);
            callback(undefined, "It is currently "+body.currently.temperature + " degrees out. There is a "+body.currently.precipProbability+ " % chance of rain.")
   }
    })
}

module.exports=forecast;