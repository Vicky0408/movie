import React ,{ Component}  from 'react'
import store from './redux/store';
import { Provider } from 'react-redux';
import Nav from "./components/Nav";
import SearchArea from "./components/MovieScreen";

class App extends Component {
  
  render() {
    return (
      <>
      <Provider store={store}>
        <Nav />
        <SearchArea />
        </Provider>
      </>
    );
  }
}

export default App;
