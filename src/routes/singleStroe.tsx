import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout";
import DashboardAdmin from "../features/admin/dashboard-admin";
import ErrorPage from "../features/error404";
import Admin from "../features/admin/pos-admin";
import PosWaiters from "../features/waiters/pos-waiters";

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
        path: "/menu_manager",
        element: <DashboardAdmin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pos-waiters",
        element: <PosWaiters />,
        errorElement: <ErrorPage />,
      },

      // {
      //   element: <SettingsLayout />,
      //   children: [
      //     {
      //       path: "/settings/profile",
      //       element: <Settings />,
      //     },
      //     {
      //       path: "/settings/profile/editprofile",
      //       element: <EditProfile />,
      //     },
      //     {
      //       path: "/settings/manageusers",
      //       element: <ManageUsers />,
      //     },

      //     {
      //       path: "/settings/manageusers/add-users",
      //       element: <AddUsers />,
      //     },
      //     {
      //       path: "/settings/manageusers/users-list",
      //       element: <UserLists />,
      //     },
      //     {
      //       path: "/settings/managesubscriptions",
      //       element: <ManageSubs />,
      //     },
      //     {
      //       path: "/settings/managesubscriptions/add_card",
      //       element: <AddCard />,
      //     },
      //     {
      //       path: "/settings/managesubscriptions/edit_card",
      //       element: <EditCard />,
      //     },
      //   ],
      // },

      // {
      //   element: <ReportLayout />,
      //   children: [
      //     {
      //       path: "/reports/individual-report",
      //       element: <IndividualReport />,
      //       errorElement: <ErrorPage />,
      //     },
      //     {
      //       path: "/reports/general-report",
      //       element: <GeneralReport />,
      //       errorElement: <ErrorPage />,
      //     },
      //     {
      //       path: "/reports/individual-report/:id",
      //       element: <UserReports />,
      //       errorElement: <ErrorPage />,
      //     },
      //   ],
      // },
    ],
  },
]);

export default router;
