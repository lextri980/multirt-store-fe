import React from 'react'
import { InputTextContainer } from './InputText.style'
import { Input } from '@nextui-org/react'

function InputText(props) {
  return (
    <InputTextContainer>
      <Input placeholder="Next UI" />
    </InputTextContainer>  
  )
}

export default InputText