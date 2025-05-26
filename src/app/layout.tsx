import type { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { MainPageSidebar } from "@/widgets/MainPageSidebar/MainPageSidebar";

import classes from "@/app/layout.module.scss";

export const LayOut: FC = (): ReactElement => (
    <div className={classes.layout}>
      <MainPageSidebar />
      <div className={classes.divider}></div>
      <main className={classes.pageContent}>
        <Outlet />
      </main>
    </div>
);
