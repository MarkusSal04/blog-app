import './App.css';
import { Route, Switch, } from "react-router-dom"


import Navbar from "./components/navbar";
import Posts from "./components/posts"
import Post from "./components/post"
import Footer from "./components/footer"




function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <div>hey</div>
          <div>hmmm</div>
          <div>lets be friends</div>
          <div>we like cheese</div>
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>

        <Route exact path="/posts/:id">
          <Post />
        </Route>

        <div className="footer">
          <Footer />
        </div>
      </Switch>
    </div>
  );
}

export default App;
