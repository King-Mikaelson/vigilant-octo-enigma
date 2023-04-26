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
import Settings from "../components/admin/settings/adminSettings";
import EditProfile from "../components/admin/settings/adminSettings/profile/EditProfile";
import ReportLayout from "../features/report/index";
import DashboardLayout from "../layout/dashboardLayout";
import IndividualReport from "../features/report/individual-report/index";
import GeneralReport from "../features/report/general-report/index";
// Always navigate the "/test" path in your browser and render
// your component in "styleGuides.tsx" to TEST while building
// before importing for use where it's needed as discussed.

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
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/editprofile",
        element: <EditProfile />,
      },
      {
        path: "/pos-waiters",
        element: <PosWaiters />,
        errorElement: <ErrorPage />,
      },

      {
        element: <ReportLayout />,
        children: [
          {
            path: "/individual-report",
            element: <IndividualReport />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/general-report",
            element: <GeneralReport />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
