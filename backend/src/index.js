const app = require('./app.js')

app.listen(app.get('port'), ()=>{
    console.log('Server on port 5000')
})