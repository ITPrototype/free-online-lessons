import React, { Dispatch, SetStateAction } from "react";
import { Input } from "@chakra-ui/react";

interface InputItems {
  value: string;
  placeholder: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

function UInput({ value, placeholder, setEmail }: InputItems) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => setEmail(e.target.value)}
      margin={"10px"}
    />
  );
}

export default UInput;
