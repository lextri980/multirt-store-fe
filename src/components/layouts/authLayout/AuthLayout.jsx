import NavbarAuth from "components/common/navbar/NavbarAuth";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AnimatedNavLayout from "../animatedLayout/AnimatedNavLayout";
import { AuthLayoutContainer } from "./AuthLayout.style";

function AuthLayout() {
  const [isActive, setIsActive] = useState(true);

  return (
    <AnimatedNavLayout>
      <AuthLayoutContainer>
        <NavbarAuth isActive={isActive} setIsActive={setIsActive} />
        <Outlet context={[isActive]} />
      </AuthLayoutContainer>
    </AnimatedNavLayout>
  );
}

export default AuthLayout;
