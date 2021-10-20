import ErrorBoundary from './ErrorBoundaries';
import './App.css';
import Button from './Button';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
          <Button />
      </div>
    </ErrorBoundary>
  );
}

export default App;
