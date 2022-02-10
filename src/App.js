import logo from './logo.svg';
import './App.css';
import './components/Content/Content';

import { Header } from './components/header/Header';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
