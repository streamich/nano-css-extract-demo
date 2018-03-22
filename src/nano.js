const {create} = require('nano-css');

const nano = create({
  h: require('react').createElement,
});

require('nano-css/addon/rule').addon(nano);
require('nano-css/addon/cache').addon(nano);
require('nano-css/addon/sheet').addon(nano);
require('nano-css/addon/jsx').addon(nano);
require('nano-css/addon/style').addon(nano);
require('nano-css/addon/styled').addon(nano);

exports.nano = nano;
