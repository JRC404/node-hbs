# Setting up HBS with Express

1. Install express and express-handlebars inside of your application then add them to your index.js along with path

```
npm i express express-handlebars
```

```javascript
const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const app = express(); //initialise express as a function
```

2. Basic folder structure for our application

```
project
│   index.js
│   readme.md   
│
└───lib
│      index.js
│   
└───public
│      style.css
│    
└───views 
│   └───layouts
│          layout.hbs
│   index.hbs
```

3. Create your app.get and app.listen for your basic express web-server

```javascript
app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
```

4. Above the app.get but below the const imports, put the following to setup the path for our style.css and other client-side code and the creation of the HBS template: 

```javascript
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');
```

5. Setup your layout.hbs like a normal HTML file with a CSS link with a twist

```hbs
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>Hello</h1>
    <p>I am a template</p>
    {{{body}}}
</body>

</html>
```