import { createBrowserRouter } from "react-router-dom";
import Login from "../features/authentication/login";
import SignUp from "../features/authentication/signup";
import LinkSent from "../features/authentication/password/forgotpwd-linkSent";
import LinkResent from "../features/authentication/password/forgotpwd-resentLink";
import LinkExpired from "../features/authentication/password/forgotpwd-linkExpired";
import ChangePassword from "../features/authentication/password/changePwd";
import PwdUpdated from "../features/authentication/password/pwdUpdated";
import ForgotPwd from "../features/authentication/password/forgotpwd-email";
import Subscribe from "../features/subscription";
import Admin from "../features/admin/pos-admin";
import ErrorPage from "../features/error404";
import StyleGuides from "../styleGuides";
import PosWaiters from "../features/waiters/pos-waiters";
import DashboardAdmin from "../features/admin/dashboard-admin";
import ReportLayout from "../features/report/index";
import DashboardLayout from "../layout/dashboardLayout";
import IndividualReport from "../features/report/individual-report/index";
import GeneralReport from "../features/report/general-report/index";
import Settings from "../components/admin/settings";
import EditProfile from "../components/admin/settings/profile/EditProfile";
import ManageUsers from "../components/admin/settings/manageUsers";
import ManageSubs from "../components/admin/settings/manageSub";
import SettingsLayout from "../components/admin/settings/layout";
import AddUsers from "../components/admin/settings/manageUsers/addUsers";
import UserLists from "../components/admin/settings/manageUsers/userLists";
// Always navigate the "/test" path in your browser and render your component in "styleGuides.tsx" to TEST while building before importing for use where it's needed as discussed.

const router = createBrowserRouter([
  {
    path: "/test",
    element: <StyleGuides />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/input-email",
    element: <ForgotPwd />,
  },
  {
    path: "/forgot-pwdlink",
    element: <LinkSent />,
  },
  {
    path: "/forgot-pwdlink-resent",
    element: <LinkResent />,
  },
  {
    path: "/forgot-pwdlink-expired",
    element: <LinkExpired />,
  },
  {
    path: "/change-pwd",
    element: <ChangePassword />,
  },
  {
    path: "/settings/profile/changepassword",
    element: <ChangePassword />,
  },
  {
    path: "/pwd-updated",
    element: <PwdUpdated />,
  },
  {
    path: "/subscribe",
    element: <Subscribe />,
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard-admin",
        element: <DashboardAdmin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pos-waiters",
        element: <PosWaiters />,
        errorElement: <ErrorPage />,
      },

      {
        element: <SettingsLayout />,
        children: [
          {
            path: "/settings/profile",
            element: <Settings />,
          },
          {
            path: "/settings/profile/editprofile",
            element: <EditProfile />,
          },
          {
            path: "/settings/manageusers",
            element: <ManageUsers />,
          },

          {
            path: "/settings/manageusers/add-users",
            element: <AddUsers />,
          },
          {
            path: "/settings/manageusers/users-list",
            element: <UserLists />,
          },
          {
            path: "/settings/managesubscriptions",
            element: <ManageSubs />,
          },
        ],
      },

      {
        element: <ReportLayout />,
        children: [
          {
            path: "/reports/individual-report",
            element: <IndividualReport />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/reports/general-report",
            element: <GeneralReport />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
