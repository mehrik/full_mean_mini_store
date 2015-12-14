var express = require('express');
var path = require('path');
var app = express();
// Creating access to client folder
app.use(express.static(path.join(__dirname, './client')));
// Need require mongoose.js from server/config
require('./server/config/mongoose.js')
// Need require routes.js(app) from server/config
require('./server/config/routes.js')(app);

app.listen(5000, function() {
    console.log("    //////////////");
    console.log("   ////      ////");
    console.log("  //// 5000 ////");
    console.log(" ////      ////");
    console.log("//////////////");
})