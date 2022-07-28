import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@ui5/webcomponents-react';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <ThemeProvider>
      {/* <Home /> */}
      <DetailsPage />
    </ThemeProvider>
  );
}

export default App;
