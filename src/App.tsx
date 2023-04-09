import { QueryClientProvider, QueryClient } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layout/dashboardLayout";
import ErrorPage from "./features/error404";
import SignUp from "./features/authentication/signup";
import Login from "./features/authentication/login";
import Subscribe from "./features/subscription";
import ForgotPwd from "./features/authentication/password/forgotpwd-email";
import Pos from "./features/pos";
import LinkSent from "./features/authentication/password/forgotpwd-linkSent";
import LinkExpired from "./features/authentication/password/forgotpwd-linkExpired";
import ChangePassword from "./features/authentication/password/changePwd";
import PwdUpdated from "./features/authentication/password/pwdUpdated";

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

//TO BE TRANSFERRED TO ROUTES FOLDER
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot-pwd",
    element: <ForgotPwd />,
  },
  {
    path: "/forgot-pwdlink",
    element: <LinkSent />,
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
    path: "/dashboard",
    element: <Pos />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
