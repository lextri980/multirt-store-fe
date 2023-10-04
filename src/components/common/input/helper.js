import InputText from "./InputText/InputText"

export const inputType = {
  InputText: 'input-text',
  InputTextArea: 'input-textarea',
  InputNumber: 'input-number',
  InputSearch:'input-search',
  InputPassword: 'input-password',
  InputSelect: 'input-select',
  InputCheckbox: 'input-checkbox',
  InputRadio: 'input-radio',
  InputSwitch: 'input-switch',
  InputDate: 'input-date',
}

export const InputComponent = {
  [inputType.InputText]: {
    Component: InputText
  }
}