import './App.css';
import {ThemeProvider} from '@ui5/webcomponents-react';
import {HashRouter} from 'react-router-dom';

import Employees from '../Employees/Employees';
import DetailsPage from '../DetailsPage/DetailsPage';
import IndividualItem from '../EmployeeItem/EmployeeItem';
import UniversalShell from '../ShellBar/UniversalShell';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <UniversalShell />
        {/* <Employees /> */}
        {/* <DetailsPage /> */}
        {/* <IndividualItem /> */}
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
