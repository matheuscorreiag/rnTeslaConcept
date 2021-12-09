import React from "react";

import { Text } from "./styles";

interface Props {
  active: boolean;
}

const ACLabel: React.FC<Props> = ({ active }) => {
  return (
    <Text>
      {active ? <Text>A/C is turned on</Text> : <Text>A/C is turned off</Text>}
    </Text>
  );
};

export default ACLabel;
