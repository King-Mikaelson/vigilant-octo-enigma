import { createBrowserRouter } from "react-router-dom";
import SettingsLayout from "../components/admin/settings/layout";
import Settings from "../components/admin/settings/settings";
import EditProfile from "../components/admin/settings/profile/editProfile";
import ManageUsers from "../components/admin/settings/manageUsers/manageUsers";
import AddUsers from "../components/admin/settings/manageUsers/addUsers";
import UserLists from "../components/admin/settings/manageUsers/userLists";
import ManageSubs from "../components/admin/settings/manageSub/subs";
import AddCard from "../components/admin/settings/manageSub/addCard";
import EditCard from "../components/admin/settings/manageSub/editCard";
import ReportLayout from "../features/report";
import IndividualReport from "../features/report/individual-report";
import ErrorPage from "../features/error404";
import GeneralReport from "../features/report/general-report";
import UserReports from "../features/report/individual-report/user-report/index";
import Admin from "../features/admin/pos-admin";
import DashboardLayout from "../layout/dashboardLayout";
const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Admin />,
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
        ],
      },
    ],
  },
]);

export default router;
