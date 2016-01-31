import webpack from 'webpack';
import task from './lib/task';
import copy from './lib/copy';

export default task('bundle', async () => {
  const bundler = webpack(require('../webpack.config.js'));
  await Promise.all([
    copy('src/public', 'dist/public'),
    copy('src/index.html', 'dist/index.html'),
    new Promise(function(resolve, reject) {
      bundler.run(resolve);
    })
  ]);
});
