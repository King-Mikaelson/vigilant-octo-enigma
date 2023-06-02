import { QueryClientProvider, QueryClient } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Routes from "./routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './features/authentication/context/AuthContext';
import { AppProvider } from './context/AppContext';
import Login from './features/authentication/login';
import SelectStore from './features/authentication/select-store';
import StyleGuides from './styleGuides';
import Otp from './features/authentication/otp';
import SignUp from './features/authentication/signup';
import { ErrorOutlined } from '@mui/icons-material';
import DashboardAdmin from './features/admin/dashboard-admin';
import DashboardLayout from './layout/dashboardLayout';
import Admin from './features/admin/pos-admin';
import MultiStoreMenuManager from './features/multistore/menu-manager';
import PosWaiters from './features/waiters/pos-waiters';
import SettingsLayout from './components/admin/settings/layout';
import Settings from './components/admin/settings/settings';
import EditProfile from './components/admin/settings/profile/editProfile';
import ManageUsers from './components/admin/settings/manageUsers/manageUsers';
import AddUsers from './components/admin/settings/manageUsers/addUsers';
import UserLists from './components/admin/settings/manageUsers/userLists';
import ManageSubs from './components/admin/settings/manageSub/subs';
import AddCard from './components/admin/settings/manageSub/addCard';
import EditCard from './components/admin/settings/manageSub/editCard';
import ReportLayout from './features/report';
import IndividualReport from './features/report/individual-report';
import GeneralReport from './features/report/general-report';
import UserReports from '../src/features/report/individual-report/user-report/index';
import IndividualReportResults from './features/report/individual-report/individual-report-results';
import GeneralReportResults from './features/report/general-report/general-report-results';
import ForgotPwd from './features/authentication/password/forgotpwd-email';
import LinkSent from './features/authentication/password/forgotpwd-linkSent';
import LinkResent from './features/authentication/password/forgotpwd-resentLink';
import LinkExpired from './features/authentication/password/forgotpwd-linkExpired';
import ChangePassword from './features/authentication/password/changePwd';
import ProfileChangePassword from './components/admin/settings/profile/changePassword';
import PwdUpdated from './features/authentication/password/pwdUpdated';
import Subscribe from './features/subscription';
import CancelSubscription from './components/admin/settings/manageSub/cancelSub';
import ConfirmDelete from './components/admin/settings/profile/deleteAccount/ConfirmDelete';
import DeleteAccount from './components/admin/settings/profile/deleteAccount';
import MigrateStore from './components/admin/settings/profile/migrateStore';
import MobileReportPage from './features/report/mobile-report-page';
import Catalogue from './features/admin/items-catalogue';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <QueryClientProvider client={queryClient}>
            <div className="App">
              <Routes>
                <Route path="/test" element={<StyleGuides />} />
                <Route path="/" element={<Login />} />
                <Route path="/select-store" element={<SelectStore />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<ErrorOutlined />} />
                <Route path="/input-email" element={<ForgotPwd />} />
                <Route path="/forgot-pwdlink" element={<LinkSent />} />
                <Route
                  path="/forgot-pwdlink-expired"
                  element={<LinkExpired />}
                />
                <Route path="/forgot-pwdlink-resent" element={<LinkResent />} />
                <Route path="/change-pwd" element={<ChangePassword />} />
                <Route
                  path="/settings/profile/changepassword"
                  element={<ProfileChangePassword />}
                />
                <Route path="/pwd-updated" element={<PwdUpdated />} />
                <Route path="/subscribe" element={<Subscribe />} />
                <Route
                  path="/cancel_subscription"
                  element={<CancelSubscription />}
                />
                <Route
                  path="/confirm_delete_account"
                  element={<ConfirmDelete />}
                />
                <Route path="/delete_account" element={<DeleteAccount />} />
                <Route path="/migrate_store" element={<MigrateStore />} />

                <Route element={<DashboardLayout />}>
                  <Route path="/dashboard" element={<DashboardAdmin />} />
                  <Route path="/menu_manager" element={<Admin />} />
                  <Route path="/items-catalogue" element={<Catalogue />} />
                  <Route
                    path="/multistore_menu_manager"
                    element={<MultiStoreMenuManager />}
                  />
                  <Route path="/pos-waiters" element={<PosWaiters />} />

                  <Route element={<SettingsLayout />}>
                    <Route path="/settings/profile" element={<Settings />} />
                    <Route
                      path="/settings/profile/editprofile"
                      element={<EditProfile />}
                    />
                    <Route
                      path="/settings/manageusers"
                      element={<ManageUsers />}
                    />
                    <Route
                      path="/settings/manageusers/add-users"
                      element={<AddUsers />}
                    />
                    <Route
                      path="/settings/manageusers/users-list"
                      element={<UserLists />}
                    />
                    <Route
                      path="/settings/managesubscriptions"
                      element={<ManageSubs />}
                    />
                    <Route
                      path="/settings/managesubscriptions/add_card"
                      element={<AddCard />}
                    />
                    <Route
                      path="/settings/managesubscriptions/edit_card"
                      element={<EditCard />}
                    />
                  </Route>

                  <Route element={<ReportLayout />}>
                    <Route path="/reports" element={<MobileReportPage />} />
                    <Route
                      path="/reports/individual-report"
                      element={<IndividualReport />}
                    />
                    <Route
                      path="/reports/general-report"
                      element={<GeneralReport />}
                    />
                    <Route
                      path="/reports/individual-report/:id"
                      element={<UserReports />}
                    />
                    <Route
                      path="/reports/individual-report/results"
                      element={<IndividualReportResults />}
                    />
                    <Route
                      path="/reports/general-report/results"
                      element={<GeneralReportResults />}
                    />
                  </Route>
                </Route>
              </Routes>
            </div>
          </QueryClientProvider>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
