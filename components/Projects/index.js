/* eslint-disable react/no-unescaped-entities */
import { Box } from "@chakra-ui/react";
import Projects from "./Projects";
import { useState } from "react";
import Experiences from "./Experiences";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      filter={`${isModalOpen ? "blur(10px)" : null}`}
      p="50"
      pt="10"
      bg="white"
      h="100vh"
      transition="filter 0.1s"
    >
      <Projects setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <Experiences />
    </Box>
  );
}