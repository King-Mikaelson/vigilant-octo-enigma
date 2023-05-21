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
import Settings from "../components/admin/settings/settings";
import EditProfile from "../components/admin/settings/profile/editProfile";
import ManageUsers from "../components/admin/settings/manageUsers/manageUsers";
import ManageSubs from "../components/admin/settings/manageSub/subs";
import SettingsLayout from "../components/admin/settings/layout";
import UserReports from "../features/report/individual-report/user-report/index";
import AddUsers from "../components/admin/settings/manageUsers/addUsers";
import UserLists from "../components/admin/settings/manageUsers/userLists";
import ProfileChangePassword from "../components/admin/settings/profile/changePassword";
import SelectStore from "../features/authentication/select-store";
import SignUp2 from "../features/authentication/signup/SignUp2";
import AddCard from "../components/admin/settings/manageSub/addCard";
import EditCard from "../components/admin/settings/manageSub/editCard";
import CancelSubscription from "../components/admin/settings/manageSub/cancelSub";
import DeleteAccount from "../components/admin/settings/profile/deleteAccount";
import Otp from "../features/authentication/otp";
import ConfirmDelete from "../components/admin/settings/profile/deleteAccount/ConfirmDelete";
import MigrateStore from "../components/admin/settings/profile/migrateStore";
import IndividualReportResults from "../features/report/individual-report/individual-report-results/index";
import GeneralReportResults from "../features/report/general-report/general-report-results/index";
import MultistoreDashboard from "../features/multistore/dashboard";
import StoresCard from "../features/multistore/dashboard/storesCard";
import MultistoreMenuManager from "../features/multistore/menu-manager";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <StyleGuides />,
  },
  {
    path: "/",
    element: <SelectStore />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signup2",
    element: <SignUp2 />,
  },
  {
    path: "/otp",
    element: <Otp />,
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
    element: <ProfileChangePassword />,
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
    path: "/cancel_subscription",
    element: <CancelSubscription />,
  },
  {
    path: "/confirm_delete_account",
    element: <ConfirmDelete />,
  },
  {
    path: "/delete_account",
    element: <DeleteAccount />,
  },
  {
    path: "/migrate_store",
    element: <MigrateStore />,
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/menu_manager",
        element: <Admin />,
        errorElement: <ErrorPage />,
      },

      {
        path: "/multistore_menu_manager",
        element: <MultistoreMenuManager />,
        errorElement: <ErrorPage />,
      },

      // MULTISTORES LINKS
      // {
      //   path: "/multistore_dashboard",
      //   element: <MultistoreDashboard />,
      // },
      // {
      //   path: "/stores/add_store",
      //   element: <StoresCard />,
      // },
      {
        path: "/dashboard",
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
          {
            path: "/settings/managesubscriptions/add_card",
            element: <AddCard />,
          },
          {
            path: "/settings/managesubscriptions/edit_card",
            element: <EditCard />,
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
          {
            path: "/reports/individual-report/:id",
            element: <UserReports />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/reports/individual-report/results",
            element: <IndividualReportResults />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/reports/general-report/results",
            element: <GeneralReportResults />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
