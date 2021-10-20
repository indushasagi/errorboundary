import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: null, errorInfo: null };
    }
    // static getDerivedStateFromError(error) {
    //     // Update state so the next render will show the fallback UI.
    //     return { hasError: 'jasError' };
    // }
  
    componentDidCatch(hasError, errorInfo) {
      // You can also log the error to an error reporting service
      console.log('in componentdidcatch', hasError);
     this.setState({hasError: hasError, errorInfo: errorInfo})
    }
  
    render() {
      if (this.state.hasError || this.state.errorInfo) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;