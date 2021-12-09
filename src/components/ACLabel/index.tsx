import React from "react";

import { Container, Text } from "./styles";

interface Props {
  active: boolean;
}

const ACLabel: React.FC<Props> = ({ active }) => {
  return (
    <Container>
      <Text>
        {active ? (
          <Text>A/C is turned on</Text>
        ) : (
          <Text>A/C is turned off</Text>
        )}
      </Text>
    </Container>
  );
};

export default ACLabel;
