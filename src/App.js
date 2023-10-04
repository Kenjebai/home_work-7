import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import TodoList from "./pages/todoList";
import Form from "./pages/forms";
import Slider from "./pages/slider";

function App(){
  return(
    <BrowserRouter>
      <nav className="nav">
        <ul className="ul">
          <li className="li"><Link to="/todoList">TodoList </Link></li>
          <li className="li"><Link to="/forms">Form </Link></li>
          <li className="li"><Link to="/slider">Slider</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/todoList" element={<TodoList />} />
         <Route path="/forms" element={<Form />} />
         <Route path="/slider" element={<Slider />} />
       </Routes>
     </BrowserRouter>       
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
