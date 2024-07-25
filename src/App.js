
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NanBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

import {originals,actions} from './constants/constants'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action' url={actions} isSmall/>
    </div>
  );
}

export default App;
