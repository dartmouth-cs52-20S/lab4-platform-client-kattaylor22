/* eslint-disable linebreak-style */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router, Switch, Route, NavLink,
// } from 'react-router-dom';
// import '../style.scss';

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };

// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };

// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

// const App = (props) => {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Welcome} />
//           <Route path="/about" component={About} />
//           <Route exact path="/test/:id" component={Test} />
//           <Route component={FallBack} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('main'));
