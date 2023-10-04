import { AnimatedLayout } from "components/layouts";

import { useSelector } from "react-redux";
import { titlePage } from "utils/titlePage.util";
import { DashboardContainer } from "./Dashboard.style";
import { inputType } from "components/common/input/helper";
import { FormInput } from "components/common";
import { useForm } from "react-hook-form";

function Dashboard() {
  titlePage("Multirt | Dashboard");

  //* Redux hooks --------------------------------------------------------------------------------------------
  const { loading } = useSelector((state) => state.auth);
  const {
    register,
    control,
    handleSubmit,
    getValues,
    trigger,
    resetField,
    formState: { errors },
  } = useForm();

  //* Declare global variables -------------------------------------------------------------------------------
  //* Local state --------------------------------------------------------------------------------------------
  //* Form and validate --------------------------------------------------------------------------------------
  //* Hooks --------------------------------------------------------------------------------------------------
  //* Effects ------------------------------------------------------------------------------------------------

  const onSubmit = (form) => {
    console.log(form);
  };

  //! Condition rendering --------------------------------------------------------------------------------------------------
  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <DashboardContainer>
        <p>Dashboard</p>
          {/* <FormInput
            type={inputType.InputText}
            control={control}
            name="dashboard"
          /> */}
          {/* <Controller></Controller> */}
          <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
      </DashboardContainer>
    </AnimatedLayout>
  );
}

export default Dashboard;
