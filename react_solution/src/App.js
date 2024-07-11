import './scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Header from '../src/components/Header.jsx';
import Content from '../src/components/Content.jsx';
import Footer from '../src/components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer FontAwesomeIcon = {FontAwesomeIcon} faChevronUp={faChevronUp} faChevronRight={faChevronRight} faChevronDown={faChevronDown}/>
    </div>
  );
}

export default App;