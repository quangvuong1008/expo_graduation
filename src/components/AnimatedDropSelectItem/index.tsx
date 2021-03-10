import React, { memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import FONTS from "@utils/fonts";
import Text from "@elements/Text";
import colors from "@utils/colors";
import { IMAGE_ICON } from "@assets/Icon";
import WalletTypeItem from "@components/WalletTypeItem";
import { IMAGE_ICON_CATEGORY } from "@assets/IconCategory";
import CategoryTypeItem from "@components/CategoryTypeItem";

interface Props {
  style?: object;
  id?: string;
  name?: string;
  icon?: string;
  children?: Array<any>;
  isCategoriesChose?: number;
  onChooseItem?: (item: any) => void;
  onChooseCategories?: (category: any) => void;
}

export default memo(
  ({
    style,
    name,
    icon,
    children,
    isCategoriesChose,
    onChooseCategories,
  }: Props) => {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.setRow}>
          {icon !== undefined ? (
            <Image style={styles.imageIcon} source={IMAGE_ICON_CATEGORY[`${icon}`]} />
          ) : (
            <Image
              style={styles.imageIcon}
              source={IMAGE_ICON_CATEGORY[`${icon}`]}
            />
          )}
          <Text style={styles.textTitle}>{name}</Text>
        </View>
        <View style={styles.box}>
          {children &&
            children.map((item: any, index: number) => {
              return (
                <CategoryTypeItem
                  isChose={isCategoriesChose}
                  // @ts-expect-error
                  onPress={() => onChooseCategories(item)}
                  {...item}
                  key={index}
                />
              );
            })}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  textTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.grey1,
    fontFamily: FONTS.MUKTA.Bold,
    marginLeft: 12,
  },
  setRow: {
    flexDirection: "row",
  },
  box: {
    paddingLeft: 12,
  },
  arrowDown: {
    position: "absolute",
    right: 0,
    top: 7,
    transform: [{ rotate: "90deg" }],
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
});
