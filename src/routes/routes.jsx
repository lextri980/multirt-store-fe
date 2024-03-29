import AuthLayout from "components/layouts/authLayout/AuthLayout";
import DashboardLayout from "components/layouts/dashboardLayout/DashboardLayout";
import Auth from "pages/auth/Auth";
import Dashboard from "pages/dashboard/Dashboard";
import NotFound from "pages/notFound/NotFound";
import Profile from "pages/profile/Profile";
import User from "pages/user/User";
import AuthenticatedRoute from "./guards/AuthenticatedRoute";
import AuthorizedRoute from "./guards/AuthorizedRoute";
import Landing from "./guards/Landing";

const routes = () => {
  return [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/authentication",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Auth />,
        },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: (
            <AuthenticatedRoute>
              <Profile />
            </AuthenticatedRoute>
          ),
        },
        {
          path: "/user",
          element: (
            <AuthenticatedRoute>
              <AuthorizedRoute role={["Admin"]}>
                <User />
              </AuthorizedRoute>
            </AuthenticatedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};

export default routes;

const a = '1'