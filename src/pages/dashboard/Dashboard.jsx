import { AnimatedLayout } from "components/layouts";

import { useSelector } from "react-redux";
import { titlePage } from "utils/titlePage.util";
import { DashboardContainer } from "./Dashboard.style";

function Dashboard() {
  titlePage("Multirt | Dashboard");

  //* Redux hooks --------------------------------------------------------------------------------------------
  const { loading } = useSelector((state) => state.auth);

  //* Declare global variables -------------------------------------------------------------------------------
  //* Local state --------------------------------------------------------------------------------------------
  //* Form and validate --------------------------------------------------------------------------------------
  //* Hooks --------------------------------------------------------------------------------------------------
  //* Effects ------------------------------------------------------------------------------------------------

  //! Condition rendering --------------------------------------------------------------------------------------------------
  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <DashboardContainer>
        <p>Dashboard</p>
        <p>{loading}</p>
      </DashboardContainer>
    </AnimatedLayout>
  );
}

export default Dashboard;
