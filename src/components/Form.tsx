import {
  Button,
  FormControl,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { COLORS } from "../core/constants";
import { useNavigate } from "react-router";

interface FormProps {
  type: "login" | "signup" | "credit-card";
}

export const Form: React.FC<FormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creditCard, setCreditCard] = useState<string>("");
  const [nameOnCard, setNameOnCard] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Stack bgColor="white" p={7} borderRadius={10} spacing={3} w="full">
      {type == "login" && (
        <Heading size="lg" fontWeight="bold" mb={5}>
          Login
        </Heading>
      )}
      {type == "credit-card" && (
        <Heading size="lg" fontWeight="bold" mb={5}>
          Credit Card
        </Heading>
      )}{" "}
      {type == "signup" && (
        <Heading size="lg" fontWeight="bold" mb={5}>
          Signup
        </Heading>
      )}
      <form onSubmit={handleSubmit}>
        <SimpleGrid
          w="full"
          spacing={type !== "login" && type !== "signup" ? 5 : 2.5}
        >
          {type == "signup" && (
            <GridItem>
              <FormControl isRequired>
                <Input
                  bgColor="white"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </GridItem>
          )}

          {type == "credit-card" && (
            <>
              <GridItem>
                <FormControl isRequired>
                  <Input
                    bgColor="white"
                    placeholder="Credit Card"
                    value={creditCard}
                    onChange={(e) => setCreditCard(e.target.value)}
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired>
                  <Input
                    bgColor="white"
                    placeholder="Name on Card"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired>
                  <Input
                    bgColor="white"
                    placeholder="Security Code"
                    type="password"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                  />
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isRequired>
                  <Input
                    bgColor="white"
                    placeholder="Expiry Date Ex: 10/22"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </FormControl>
              </GridItem>
            </>
          )}

          {type == "login" && (
            <GridItem>
              <FormControl isRequired>
                <Input
                  bgColor="white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </GridItem>
          )}
          {type == "signup" && (
            <GridItem>
              <FormControl isRequired>
                <Input
                  bgColor="white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </GridItem>
          )}
          {type == "signup" && (
            <GridItem>
              <FormControl isRequired>
                <Input
                  bgColor="white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </GridItem>
          )}
          {type == "login" && (
            <GridItem>
              <FormControl isRequired>
                <Input
                  bgColor="white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </GridItem>
          )}

          <Button
            type="submit"
            bgColor={COLORS.PRIMARY}
            color="white"
            size="md"
            w="full"
            mt={10}
            fontWeight="medium"
            border={"1px"}
            borderColor="gray.300"
          >
            Submit
          </Button>
        </SimpleGrid>
      </form>
      <Stack>
        <Text textAlign="center" color={COLORS.TEXT_LIGHT} pt={2}>
          New to our website ?{" "}
          <Link
            display="inline"
            color={COLORS.PRIMARY}
            onClick={() => navigate(type == "login" ? "/register" : "/login")}
          >
            {type == "login" ? "Register" : "Login"}
          </Link>
        </Text>
      </Stack>
      )
    </Stack>
  );
};
