import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";  
import Adopt from "./pages/Adopt";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adopt",
    element: <Adopt/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
]);

export default router;
