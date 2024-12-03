
import { AddRule } from './risk-manager/components/AddRule.js';
import Auth  from './risk-manager/components/Auth.js';
import Layout from './risk-manager/components/Layout.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './risk-manager/components/DataTable.js';
import { PageNotFound } from './risk-manager/components/PageNotFound.js';
import { ResearchActivitiesTable } from './risk-manager/components/case-management/ResearchActivitiesTable.js';
import { TransferList } from './risk-manager/components/TransferList.js';
import { ResearchActivities } from './risk-manager/components/case-management/ResearchActivities.js';
import { AddUser } from './risk-manager/components/access-management/AddUser.js';
import UserListDetails from './risk-manager/components/access-management/UserListDetails.js';

//import Login from './risk-manager/Login.js';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />

        {/* Access Management Section */}
        <Route path="/accessmanagement" element={<Layout />}>
          <Route index element={<UserListDetails />} /> {/* Default route */}
          <Route path="users" element={<UserListDetails />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="useActivities" element={<ResearchActivitiesTable />} />
          <Route path="groups" element={<DataTable />} />
          <Route path="orgs" element={<TransferList />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Case Management Section */}
        <Route path="/casemanagement" element={<Layout />}>
          <Route index element={<AddRule />} /> {/* Default route */}
          <Route path="processqueue" element={<ResearchActivitiesTable />} />
          <Route path="customqueue" element={<TransferList />} />
          <Route path="lookupuser" element={<DataTable />} />
          <Route path="researchActivities" element={<ResearchActivities />} />
          <Route path="manage" element={<AddRule />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Back Office Section */}
        <Route path="/backoffice" element={<Layout />}>
          <Route index element={<DataTable />} /> {/* Default route */}
          <Route path="listusers" element={<DataTable />} />
          <Route path="listrules" element={<AddRule />} />
          <Route path="useActivities" element={<ResearchActivitiesTable />} />
          <Route path="permissionsList" element={<TransferList />} />
          <Route path="audittrail" element={<TransferList />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Catch-All for Unmatched Routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
