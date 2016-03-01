import five from 'johnny-five';
import express from 'express';
import path from 'path';
import routes from './routes';

global.board = new five.Board();
board.on('ready', function () {

    console.log('Board ready to function...');

    const app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use('/', routes);

    //TO DO: Add error handling

    app.listen(3000, function () {
        console.log('App listening on port 3000...');
    });

});