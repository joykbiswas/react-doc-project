import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import Root from "./Root";
import ErrorPage from "../ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
        {
            path: "/",
            element: <HomePage />
        }
    ]
  },
]);

export default router;