const {styled} = require('../nano').nano;

const Checkbox = styled.button({
  color: 'green',
  borderRadius: '4px',
  padding: '15px',
}, (props) => ({
  background: props.primary ? 'blue' : 'grey',
  margin: props.small ? '10px' : '20px'
}));
