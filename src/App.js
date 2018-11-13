import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import ExpressForm from './ExpressForm'
import BuilderForm from './BuilderForm'
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/express" component={ExpressForm} />
        <Route path="/builder" component={BuilderForm} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit the <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
