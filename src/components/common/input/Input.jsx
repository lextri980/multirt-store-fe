import React from "react";
import { Controller } from "react-hook-form";
import { InputComponent } from "./helper";

function FormInput(props) {
  const {
    control,
    name,
    defaultValue,
    type,
    hasError,
    errorMessage,
    ...inputProps
  } = props;

  //* Redux hooks --------------------------------------------------------------------------------------------

  //* Declare global variables -------------------------------------------------------------------------------

  //* Local state --------------------------------------------------------------------------------------------

  //* Form and validate --------------------------------------------------------------------------------------

  //* Hooks --------------------------------------------------------------------------------------------------

  //* Effects ------------------------------------------------------------------------------------------------

  //* Other --------------------------------------------------------------------------------------------------

  //@ (renderComponent): Render Input type -------------------------------------------------------
  const renderComponent = (field) => {
    const { ref,...rest } = field;
    const Input = InputComponent[type];
    return (
      <Input.Component
        {...rest}
        {...inputProps}
        error={hasError || null}
        helperText={hasError ? errorMessage : null}
      />
    );
  };

  //! Condition rendering --------------------------------------------------------------------------------------------------
  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ""}
      render={({ field }) => renderComponent(field)}
    />
  );
}

export default FormInput;
