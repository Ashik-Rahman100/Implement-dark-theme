import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { FaMoon, FaSun } from "react-icons/fa";

const LightDarkButon = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <div>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <FaSun size="1.1rem" /> : <FaMoon size="1.1rem" />}
      </ActionIcon>
    </div>
  );
};

export default LightDarkButon;
