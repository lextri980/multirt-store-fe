import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useSelector } from "react-redux";
import { titlePage } from "utils/titlePage.util";
import { DashboardContainer } from "./Dashboard.style";

function Dashboard() {
  titlePage("Multirt | Dashboard");
  //* Declare global variables

  //* Redux hooks
  const { loading } = useSelector((state) => state.auth);

  //* Local state

  //* Hooks

  //* Other

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
