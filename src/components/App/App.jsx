import "./App.css";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { HashRouter, Navigate, Routes, Route } from "react-router-dom";

import Employees from "../Employees/Employees";
import SkillList from "../SkillList/SkillList";
import EmployeeDetail from "../EmployeeDetail/EmployeeDetail";
import UniversalShell from "../ShellBar/UniversalShell";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <UniversalShell />
        <Routes>
          <Route path="/skills/:id" element={<SkillList />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employeeDetail/:id" element={<EmployeeDetail />} />
          {/* <Route path="/edit/:id" element={<EmployeeSkillDialog />} /> */}
          <Route path="/" element={<Navigate replace to="/employees" />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
