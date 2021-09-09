import React from "react";
import { SafeAreaView, View, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useDispatch } from "react-redux";

import { Text, Button, StickersImage } from "components";
import { userPreferences } from "ducks";
import { t } from "utils";

import styles from "./IntroScreen.styles";
import { Preferences } from "../../constant";

const IntroScreen: React.FC = () => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(userPreferences.actions.acceptTermsOfUse(Preferences.currentTermsOfUseVersion));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}></View>
      <View style={styles.termsOfUseView}>
        <Text.H2 style={styles.text}>플라스틱 탐지기</Text.H2>
        <Text.Tertiary style={styles.text}>
          앱 사용을 위해서는 이용약관에 동의하셔야합니다.
        </Text.Tertiary>
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync("http://nmf.earth/terms-of-use.pdf")}
        >
          <Text.Tertiary green>이용약관 보기</Text.Tertiary>
        </TouchableOpacity>
        <View style={styles.buttonView}>
          <Button.Primary fullWidth onPress={onPress} textType={"Primary"}>
            <Text.Primary white center bold>
              이용약관에 동의하고 시작하기
            </Text.Primary>
          </Button.Primary>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
