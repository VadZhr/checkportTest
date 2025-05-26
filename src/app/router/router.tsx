import { createBrowserRouter } from "react-router-dom";
import { LayOut } from "@/app/layout";
import { FilialMenuLayout } from "@/widgets/FilialMenuLayout/ui/FilialMenuLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "/menu", element: <FilialMenuLayout/> },
      { path: "*", element: <div>В работе</div> },
    ],
  },
]);
