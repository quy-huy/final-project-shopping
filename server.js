//Install express server
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static('./dist/project-final'));

app.get('/*', (req, res) => {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname + '/dist/project-final/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () => {
    console.log('Server started');
});