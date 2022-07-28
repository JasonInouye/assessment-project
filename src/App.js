import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@ui5/webcomponents-react';
import Home from './Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
