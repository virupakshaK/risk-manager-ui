
import { AddRule } from './risk-manager/components/AddRule.js';
import Auth  from './risk-manager/components/Auth.js';
import Layout from './risk-manager/components/Layout.js'
import Login from './risk-manager/components/Login.js';
import RuleConditions from './risk-manager/components/RuleConditions.js';
import Test from './risk-manager/components/Test.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import DataTable from './risk-manager/components/DataTable.js';
import { PageNotFound } from './risk-manager/components/PageNotFound.js';

//import Login from './risk-manager/Login.js';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Auth />} />
        <Route path="/main" element={<Layout />}>
          <Route index element={<DataTable />} /> {/* Default route */}
          <Route path="listusers" element={<DataTable />} />
          <Route path="listrules" element={<AddRule />} />
          <Route path="*" element={<PageNotFound />} /> {/* Catch-all for unmatched routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
