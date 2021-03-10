import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { WALLET_ICON } from "@svg/WalletIcon";
import Text from "@elements/Text";
import SvgCircleChevronRight from "@svg/Icon/SvgCircleChevronRight";
import FONTS from "@utils/fonts";
import colors from "@utils/colors";
import { currencyFormat } from "@utils/formatNumber";
import ButtonIcon from "@elements/Button/ButtonIcon";
import { ICON } from "@svg/Icon";
import { TYPE_WALLET, CURRENCY } from "@store/models";

interface Props {
  style?: object;
  id?: string;
  index?: number;
  name?: string;
  balance?: number;
  typeWallet: TYPE_WALLET;
  currency: CURRENCY;
  imageBackGround?: string;
  defaultWallet?: boolean;
  onPressWallet?: () => void;
  onClickAddWallet?: () => void;
  scrollY?: Animated.Value;
  noneArrow?: boolean;
}

const WalletItem = ({
  style,
  id,
  index,
  name,
  typeWallet,
  balance,
  currency,
  imageBackGround,
  defaultWallet,
  onClickAddWallet,
  onPressWallet,
  scrollY,
  noneArrow,
  ...props
}: Props) => {
  const sourceImage = imageBackGround
    ? { uri: imageBackGround }
    : require("@assets/Dashboard/wallet.png");

  const formatAmount = balance
    ? currencyFormat(balance, currency)
    : currencyFormat(0, currency);

  return defaultWallet ? (
    <TouchableOpacity {...props} onPress={onClickAddWallet} activeOpacity={0.7}>
      <ImageBackground
        source={require("@assets/Dashboard/default.png")}
        style={styles.imageDefault}
      >
        <ButtonIcon icon={ICON.addWallet} onPress={onClickAddWallet} />
        <Text style={styles.textCreate}>Create a new wallet</Text>
      </ImageBackground>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity key={id} onPress={onPressWallet} activeOpacity={0.7}>
      <Animated.View style={[styles.container, style]}>
        <ImageBackground
          style={styles.image}
          source={require("@assets/Dashboard/default.png")}
        >
          <View style={styles.iconView}>
            {WALLET_ICON[`${typeWallet?.icon}`]}
            <Text style={styles.wallet}>{name}</Text>
          </View>
          <Text style={styles.textBalance}>Balance</Text>
          <Text style={styles.textAmount}>{formatAmount}</Text>
        </ImageBackground>
        {noneArrow ? null : <SvgCircleChevronRight style={styles.svgCircle} />}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default WalletItem;

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 140,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    borderRadius: 12,
    paddingHorizontal: 24,
  },
  iconView: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    height: 28,
  },
  wallet: {
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 17,
    color: colors.white,
    marginLeft: 10,
  },
  svgCircle: {
    position: "absolute",
    top: 24,
    right: 24,
  },
  textBalance: {
    marginTop: 30,
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    color: colors.white,
    opacity: 0.7,
  },
  textAmount: {
    fontFamily: FONTS.MUKTA.Bold,
    fontSize: 22,
    lineHeight: 37,
    color: colors.white,
  },
  defaultWallet: {
    width: 280,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  imageDefault: {
    width: 280,
    height: 140,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  textCreate: {
    color: colors.white,
    fontFamily: FONTS.MUKTA.Bold,
    fontSize: 16,
    lineHeight: 21,
    marginTop: 8,
  },
  walletIcon: {
    width: 20,
    height: 20,
  },
});
