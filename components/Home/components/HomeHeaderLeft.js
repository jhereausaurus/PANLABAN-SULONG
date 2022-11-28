import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../../Svg/Logo";

import { externalStyle } from "../../../styles/externalStyle";

export default function HomeHeaderLeft() {
  return (
    <View>
      <View
        style={[
          {
            flexDirection: "row",
            // alignItems: "center",
          },
        ]}
      >
        {/* <Logo /> */}
        <Image
                source={require('../../../assets/icon.png')}
                style={styles.Iconlogo}
              />
        <Text numberOfLines={1} style={[styles.semibold17, { marginLeft: 7, top: 5 }]}>
          Sulong
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(externalStyle);
