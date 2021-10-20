import ErrorBoundary from './ErrorBoundaries';
import './App.css';
import Button from './Button';
import React from 'react';

class App extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    return (
      <ErrorBoundary>
        <div className="App">
            <Button />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
