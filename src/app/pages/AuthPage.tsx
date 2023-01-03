import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import logo from "../../assets/mohirdev-white.png";
import { UInput, UButton } from "../utils/exports";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [isReg, setIsReg] = useState<boolean>(false);
  const showval = () => {
    alert(email);
  };
  useEffect(() => {
    if (location.pathname == "/register") setIsReg(true);
    if (location.pathname == "/login") setIsReg(false);
  }, [location]);
  return (
    <Flex flexDirection={"row"} alignItems={"center"} width={"100%"}>
      <Flex
        bgColor={"#5390d9"}
        height={"100vh"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"50%"}
      >
        <img src={logo} width={"450px"} />
      </Flex>
      <Flex
        width={"50%"}
        flexDirection={"column"}
        justifyContent={"center"}
        padding={"12"}
        alignItems={"center"}
      >
        <UInput placeholder={"Emailingiz"} value={email} setEmail={setEmail} />
        <UInput placeholder={"Parol"} value={pass} setEmail={setPass} />
        <UButton
          colorscheme="blue"
          wid="100%"
          value={isReg ? "Ro'yhatdan o'tish" : "Kirish"}
          func={showval}
        />
        {isReg ? "Ro'yhatdan o'tganmisiz?" : "Ro'yhatdan o'tmaganmisiz?"}
        <NavLink to={isReg ? "/login" : "/register"} style={{ color: "blue" }}>
          {isReg ? "Kirish" : "Ro'yhatdan o'tish"}
        </NavLink>
      </Flex>
    </Flex>
  );
}

export default AuthPage;
