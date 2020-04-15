import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';

const app = express();

if (process.env.NODE_ENV === 'development') {
  const config = require('./webpack.config.dev'); // eslint-disable-line global-require

  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line global-require
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler)); // eslint-disable-line global-require

  app.use(express.static(path.resolve(__dirname, 'src')));
}
else if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'public')));
}

app.get('*', middleware);

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('Listening at http://localhost:3000');
  }
});
