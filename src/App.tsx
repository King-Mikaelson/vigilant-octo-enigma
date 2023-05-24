import { QueryClientProvider, QueryClient } from "react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Routes from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./features/authentication/context/AuthContext";
import { AppProvider } from "./context/AppContext";
import Login from "./features/authentication/login";
import SelectStore from "./features/authentication/select-store";
import StyleGuides from "./styleGuides";
import Otp from "./features/authentication/otp";
import SignUp from "./features/authentication/signup";
import { ErrorOutlined } from "@mui/icons-material";
import DashboardAdmin from "./features/admin/dashboard-admin";

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
                <Route path="/dashboard" element={<DashboardAdmin />} />
              </Routes>
            </div>
          </QueryClientProvider>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
