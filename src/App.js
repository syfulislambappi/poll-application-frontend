import CreatePoll from "./components/CreatePoll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllPoll from "./components/AllPoll";
import SinglePoll from "./components/SinglePoll";

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
    {
      path: "/poll/:pollId",
      element: <SinglePoll />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
