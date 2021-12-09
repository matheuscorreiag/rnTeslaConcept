import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { View, Text } from "react-native";

interface Props {
  type: string;
  active: boolean;
}

import { Button } from "./styles";

const ConfigButton: React.FC<Props> = ({ type, active }) => {
  const iconActive = active ? "#fff" : "#7F8489";
  return (
    <Button active={active}>
      {type === "settings" && (
        <Icon name="settings" size={16} color="#7F8489" />
      )}
      {type === "stats" && (
        <Icon name="align-left" size={16} color={iconActive} />
      )}
      {type === "user" && <Icon name="user" size={16} color={iconActive} />}
      {type === "power" && <Icon name="power" size={16} color={iconActive} />}
      {type === "clock" && <Icon name="clock" size={16} color={iconActive} />}
      {type === "cool" && (
        <Icon name="codesandbox" size={16} color={iconActive} />
      )}
      {type === "wind" && <Icon name="wind" size={16} color={iconActive} />}
      {type === "lock" && <Icon name="lock" size={16} color={iconActive} />}
      {type === "unlock" && <Icon name="unlock" size={16} color={iconActive} />}
    </Button>
  );
};

export default ConfigButton;
