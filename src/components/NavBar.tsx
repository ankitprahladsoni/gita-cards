import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { useChapterContext } from "./ChapterContext";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar({ children }: any) {
  const [chapter, setChapter] = useChapterContext();
  const options = [...Array(18)].map((_, i) => (
    <option key={i} value={`chapter_${i + 1}`}>
      अध्याय {i + 1}
    </option>
  ));
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Select
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
            >
              {options}
            </Select>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
}
