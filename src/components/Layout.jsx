import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

export default function Layout({ socials }) {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer socials={socials} />
    </>
  );
}
