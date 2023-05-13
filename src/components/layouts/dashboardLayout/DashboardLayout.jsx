import { Outlet } from "react-router";
import NavbarMenu from "../../common/navbar/Navbar";
import AnimatedNavLayout from "../animatedLayout/AnimatedNavLayout";
import { DashboardLayoutContainer } from "./DashboardLayout.style";

function DashboardLayout() {
  return (
    <AnimatedNavLayout>
      <DashboardLayoutContainer>
        <NavbarMenu />
        <Outlet />
      </DashboardLayoutContainer>
    </AnimatedNavLayout>
  );
}

export default DashboardLayout;
