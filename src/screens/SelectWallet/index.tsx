import React, { memo, useState } from "react";
import { View, StyleSheet } from "react-native";
import colors from "@utils/colors";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import HeaderButton from "@elements/Header/HeaderButton";
import WalletTypeItem from "@components/WalletTypeItem";
import ROUTES from "@utils/routes";
import { WALLET_ALL } from "@data/index";

const SelectWallet = memo(({ route }: any) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);

  const [wallets, setWallets] = useState<any>({});
  const [walletType, setWalletType] = useState<any>([]);

  const disabled = wallets.id === undefined;

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.wallet) {
        console.log('passrams: ', route.params?.wallet)
        setWalletType(route.params?.wallet);
      } else {
        initialized();
      }
    }, [route.params?.wallet])
  );

  const initialized = async () => {
    try {
      setWallets([
        {
          id: "0",
          name: "All wallets",
          walletIcon: "wallet",
        },
        ...WALLET_ALL,
      ]);
      setLoading(false);
    } catch (e) {}
  };

  React.useLayoutEffect(() => {
    const textDoneStyle = disabled
      ? { color: colors.grey3 }
      : { color: colors.purplePlum };

    const onDone = () => {
      const wallet = { wallet: wallets };
      navigation.navigate(ROUTES.Transaction, wallet);
    };

    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          disabled={disabled}
          onPress={onDone}
          titleStyle={textDoneStyle}
          title={"Done"}
        />
      ),
    });
  }, [disabled]);

  return (
    <View style={styles.container}>
      <View style={styles.contentView}>
        {walletType.map((item: any, index: number) => {
          const onPress = () => {
            setWallets(item);
          };
          return (
            <WalletTypeItem
              isChose={wallets.id}
              onPress={onPress}
              {...item}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
});

export default SelectWallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.snow,
    paddingHorizontal: 31,
  },
  contentView: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 18,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
});