import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";

import { View, Text } from "react-native";

interface Props {
  type: string;
  size: number;
}

import { Button } from "./styles";

const LiveButtons: React.FC<Props> = ({ type, size }) => {
  const [pressed, setOnPressed] = useState(false);
  const iconActive = pressed ? "#fff" : "#7F8489";
  return (
    <TouchableOpacity
      onPress={() => {
        pressed ? setOnPressed(false) : setOnPressed(true);
      }}
    >
      <Button active={pressed} size={size}>
        {type === "power" && <Icon name="power" size={16} color={iconActive} />}
        {type === "clock" && <Icon name="clock" size={16} color={iconActive} />}
        {type === "cool" && (
          <Icon name="codesandbox" size={16} color={iconActive} />
        )}
        {type === "wind" && <Icon name="wind" size={16} color={iconActive} />}

        {type === "lock" && <Icon name="lock" size={24} color={iconActive} />}
        {type === "unlock" && pressed && (
          <Icon name="unlock" size={24} color={iconActive} />
        )}
      </Button>
    </TouchableOpacity>
  );
};

export default LiveButtons;
