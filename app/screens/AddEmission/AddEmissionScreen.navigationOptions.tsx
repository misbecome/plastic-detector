import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";

import { Text, InfoButton } from "components";
import { t } from "utils";
import { Colors, ComponentsStyle } from "style";

const navigationOptions = (): StackNavigationOptions => ({
  ...ComponentsStyle.transitionBetweenScreenPresets,
  headerStyle: {
    ...ComponentsStyle.header,
  },
  headerBackTitleVisible: false,
  headerTintColor: Colors.grey100,
  headerRight: () => <InfoButton />,
  headerTitle: () => <Text.H1>.</Text.H1>,
});

export default navigationOptions;
