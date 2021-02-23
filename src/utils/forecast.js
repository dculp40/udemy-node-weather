const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=51c9728ab3eec5564fe47dc82dffef72&query=' + lat + ',' + lon + '&units=f'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. Humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast