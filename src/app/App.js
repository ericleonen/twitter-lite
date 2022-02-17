import './App.css';
import '../components/Content/Content';

import { Header } from '../components/header/Header';
import { Content } from '../components/Content/Content';
import { SearchBar } from '../components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Content />
    </div>
  );
}

export default App;
