import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonInt {
  value: string;
  colorscheme: string;
  wid: string;
  func: () => void;
}
function UButton({ value, colorscheme, wid, func }: ButtonInt) {
  return (
    <Button
      colorScheme={colorscheme}
      width={wid}
      onClick={func}
      margin={"10px"}
    >
      {value}
    </Button>
  );
}

export default UButton;
