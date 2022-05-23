
const express = require('express'); 
const app = express();             
const port = 3000;                  


app.get('Algolija Prezentacija/index.js', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.js', {root: __dirname});      
                                                        
});

app.listen(port, () => {         
    console.log(`3000 ${port}`); 
});