const request = require('request')
const forecast = (latitude, longitude, callback) => {
    url = 'http://api.weatherstack.com/current?access_key=249a628bc5943bbe2c5ec2603fd10d2d&query=' + latitude + ',' + longitude + '&unit=f'
    request({
        url,
        json: true
    }, (error, {body}) => {
      
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location; try another', undefined)
        } else {
            const x = body.current;
            callback(undefined,
                `${x.weather_descriptions[0]}. It is currently ${x.temperature} degrees out. It feels like ${x.feelslike} degrees out.`
            );
        }
    })
}
module.exports=forecast