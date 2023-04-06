import { QueryClientProvider, QueryClient } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./features/error404";
import DashboardLayout from "./layout/dashboardLayout";
import DashboardMain from "./layout/dashboardMain";
import SignUp from "./features/authentication/signup";
import Login from "./features/authentication/login";
import Subscribe from "./features/subscription";
import ForgotPwd from "./features/authentication/forgotpwd";

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
    path: "/subscribe",
    element: <Subscribe />,
  },
  {
    path: "/home",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/orders",
        element: <DashboardMain />,
        errorElement: <ErrorPage />,
      },
    ],
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
