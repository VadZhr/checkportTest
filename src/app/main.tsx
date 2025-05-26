import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

import "@/shared/styles/global.css";  
import "@radix-ui/themes/styles.css";


import { ReduxProvider } from "@/app/providers/ReduxProvider";
import { router } from "@/app/router/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </ReduxProvider>
  </StrictMode>
);
