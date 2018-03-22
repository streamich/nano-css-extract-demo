const {sheet} = require('../nano').nano;

const styles = sheet({
  form: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 0 3px rgba(0, 0, 0, .03)',
  },
  button: {
    border: 'none',
  }
}, 'SomeForm');
