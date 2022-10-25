import CreatePoll from "./components/CreatePoll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllPoll from "./components/AllPoll";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CreatePoll />,
    },
    {
      path: "/polls",
      element: <AllPoll />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
