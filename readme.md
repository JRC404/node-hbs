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

> lib

> > index.js

> public
>
> > style.css

> views

> > layouts

> > > layout.hbs

> > index.hbs

> index.js

3. Create your app.get and app.listen for your basic express web-server

```javascript
app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
```
