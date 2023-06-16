import {
  FormControl,
  Input,
  HStack,
  Button,
  FormLabel,
  Text,
  Heading,
  Container,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../store/userSlice";
import { AppDispatch } from "../../store";
import useLocaleStorage from "../../hooks/useLocaleStorage";
import { IUser } from "../../interfaces/store";

interface ISignInProps {}

interface IFormData {
  name: string;
  pass: string;
}

const SignIn: FunctionComponent<ISignInProps> = () => {
  const navigate = useNavigate();
  const dispath = useDispatch<AppDispatch>();
  const [signErr, setSignErr] = useState<boolean>(false);
  const [_, setUserLocale] = useLocaleStorage<IUser | null>("user", null);
  const [userLoading, setUserLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    pass: "",
  });

  const handleChangeForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setUserLoading(true);
    const data = await dispath(
      getUser({ name: formData.name, pass: formData.pass })
    );
    setSignErr(!!!data.payload);
    setUserLoading(false);
    if (!!data?.payload) {
      setUserLocale(data?.payload);
      navigate(`/user/:${data?.payload.userName}`);
    }
  };

  return (
    <>
      <HStack
        width="full"
        flex="1 1 auto"
        minH="100vh"
        display="flex"
        alignItems="center"
        bg="#eee"
      >
        <Container
          w="full"
          bg="white"
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
          px="10"
          py="5"
          borderRadius="xl"
        >
          <Heading as="h2" size="xl" color="#4a4a4a" mb="4">
            Sign In
          </Heading>
          <FormControl
            onSubmit={handleSubmit}
            gap="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <FormLabel w="full" m="0" htmlFor="userName">
              <Text color="#4a4a4a" mb="1">
                User name
              </Text>
              <Input
                id="userName"
                h="32px"
                fontSize="12px"
                focusBorderColor="#FF9900"
                value={formData.name}
                onChange={(e) => handleChangeForm("name", e.target.value)}
              />
            </FormLabel>
            <FormLabel w="full" m="0" htmlFor="password">
              <Text color="#4a4a4a" mb="1">
                Password
              </Text>
              <Input
                id="password"
                h="32px"
                fontSize="12px"
                focusBorderColor="#FF9900"
                value={formData.pass}
                type="password"
                onChange={(e) => handleChangeForm("pass", e.target.value)}
              />
            </FormLabel>
            <Text hidden={!signErr} color="red">
              User name or Password entered incorrectly
            </Text>
            <Button
              h="32px"
              isLoading={userLoading}
              _loading={{
                background: "#F8FAFC",
                cursor: "auto",
              }}
              onClick={handleSubmit}
              type="submit"
              w="max-content"
              px="32px"
              color="#4a4a4a"
              fontSize="14px"
              _hover={{
                background: userLoading ? "#EDF2F7" : "#FF9900",
                color: "white",
              }}
            >
              Sign in
            </Button>
          </FormControl>
        </Container>
      </HStack>
    </>
  );
};

export default SignIn;
