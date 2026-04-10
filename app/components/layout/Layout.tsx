import { Outlet } from "react-router";
import Footer from "./footer/Footer";
import Header from "./header/Header";

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