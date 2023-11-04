import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../header";
import Footer from "../footer";

function VisitorLayout(): ReactElement {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { VisitorLayout };
