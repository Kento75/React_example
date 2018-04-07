import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


const Hello = (props) => {
  return <div>こんにちは、 { props.name }さん</div>;
}

Hello.defaultProps = {
  name: '様の戸'
};
Hello.propTypes = {
  name: PropTypes.number.isRequired
}

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

export default App;
