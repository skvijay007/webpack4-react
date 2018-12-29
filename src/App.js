import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <p>Webpack4 with React here!</p>
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById("app"));