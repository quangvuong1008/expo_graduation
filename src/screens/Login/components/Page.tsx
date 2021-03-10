import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "@elements/Text";
import { widthScreen } from "@utils/dimensions";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "@utils/colors";

interface Props {
  image?: any;
  title?: string;
  description?: string;
}

const Page = memo(({ image, title, description }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text bold size={22} lineHeight={37} marginTop={16} color={colors.white}>
        {title}
      </Text>
      <Text
        marginHorizontal={51}
        size={16}
        center
        lineHeight={22}
        marginTop={3}
        color={colors.white}
      >
        {description}
      </Text>
    </View>
  );
});

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: getStatusBarHeight() + 24,
  },
  image: {
    resizeMode: "contain",
    width: widthScreen * 0.43,
    height: widthScreen * 0.43,
  },
});
