import './App.css';
import {ThemeProvider} from '@ui5/webcomponents-react';
import Home from './Home';
import DetailsPage from './DetailsPage';
import IndividualItem from './IndividualItem';
import UniversalShell from './UniversalShell';

function App() {
  return (
    <ThemeProvider>
      <UniversalShell />
      {/* <Home /> */}
      {/* <DetailsPage /> */}
      <IndividualItem />
    </ThemeProvider>
  );
}

export default App;
