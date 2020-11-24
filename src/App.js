import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Post from './component/Post';
import Comments from './component/Comments';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Todos from './component/Todos';
import Users from './component/Users'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Post} />
        <Link path="/Comments" exact component={Comments} />
        <Link path="/Albums" exact component={Albums} />
        <Link path="/Photos" exact component={Photos} />
        <Link path="/Todos" exact component={Todos} />
        <Link path="/Users" exact component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;