import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

import About from "./routes/about";
import Resume from "./routes/resume";
import Portfolio from "./routes/portfolio";
import Connect from "./routes/connect";
import ErrorPage from "./routes/error-page";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <About /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "connect",
        element: <Connect />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
