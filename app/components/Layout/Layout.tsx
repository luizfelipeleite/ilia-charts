import { Outlet } from "react-router";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container flex-1 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}