import './App.css';
import {ThemeProvider} from '@ui5/webcomponents-react';
import {HashRouter} from 'react-router-dom';

import Employees from '../Employees/Employees';
import DetailsPage from '../DetailsPage/DetailsPage';
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import UniversalShell from '../ShellBar/UniversalShell';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <UniversalShell />
        {/* <Employees /> */}
        {/* <DetailsPage /> */}
        {/* <EmployeeDetail /> */}
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
