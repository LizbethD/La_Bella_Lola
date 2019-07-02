require('./config/config');
require('./config/passportConfig');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

const passport = require('passport');

const rtsIndex = require('./routes/index.router');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/products' ,require('./routes/product.routes'));
app.use('/api/services' ,require('./routes/service.routes'));
app.use('/api/users' ,require('./routes/user.routes'));
app.use('/api/roles' ,require('./routes/rol.routes'));
app.use('/api', rtsIndex);
//Starting the server

app.use((err, req, res, next) => {
    if(err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
