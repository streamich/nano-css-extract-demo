const nano = require('./src/nano').nano;

require('nano-css/addon/extract').addon(nano);


// Evaluate everything you want to evaluate, to generate CSS.
// NOTE: make sure all code evaluated here DOES NOT have side-effects.
require('./src/components/Frame');
require('./src/components/Form');
require('./src/components/Button');
require('./src/components/Checkbox');


// Collect raw CSS on next tick.
process.nextTick(() => {
  // Save it in your artifacts
  // fs.writeFileSync('./styles.css', nano.raw);
  console.log('RAW CSS:', nano.raw);
});
