import React from "react";

import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { Button } from "./styles";

interface Props {
  type: string;
  screenName: string;
}

const StaticButtons: React.FC<Props> = ({ type }) => {
  return (
    <TouchableOpacity>
      <Button>
        {type === "settings" && (
          <Icon name="settings" size={16} color="#7F8489" />
        )}
        {type === "stats" && (
          <Icon name="align-left" size={16} color="#7F8489" />
        )}
        {type === "user" && <Icon name="user" size={16} color="#7F8489" />}
      </Button>
    </TouchableOpacity>
  );
};

export default StaticButtons;
