import './scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Header from '../src/components/Header.jsx';
import Content from '../src/components/Content.jsx';
import Footer from '../src/components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer FontAwesomeIcon = {FontAwesomeIcon} faChevronUp={faChevronUp} />
    </div>
  );
}

export default App;