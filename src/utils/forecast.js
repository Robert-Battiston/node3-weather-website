const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=196b07ea4c44e4ee24eaa9ef7d330a1a&query=' + latitude + ',' + longitude
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently '+ body.current.temperature + ', but it feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast