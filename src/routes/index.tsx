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
import Admin from "../features/pos-admin";
import ErrorPage from "../features/error404";
import StyleGuides from "../styleGuides";
import PosWaiters from "../features/pos-waiters";
import DashboardAdmin from "../features/dashboard-admin";
import Settings from "../components/settings/adminSettings";
import EditProfile from "../components/settings/adminSettings/profile/EditProfile";
import ManageUsers from "../components/settings/adminSettings/manageUsers";
import ManageSubs from "../components/settings/adminSettings/manageSub";

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
    path: "/admin",
    element: <Admin />,
    children: [],
  },
  {
    path: "/dashboard-admin",
    element: <DashboardAdmin />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings/profile",
    element: <Settings />,
  },
  {
    path: "/settings/editprofile",
    element: <EditProfile />,
  },
  {
    path: "/settings/manageusers",
    element: <ManageUsers />,
  },
  {
    path: "/settings/managesubscriptions",
    element: <ManageSubs />,
  },
  {
    path: "/pos-waiters",
    element: <PosWaiters />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
