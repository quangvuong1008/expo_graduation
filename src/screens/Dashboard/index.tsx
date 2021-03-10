import React, { memo, useCallback, useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FONTS from "@utils/fonts";
import Text from "@elements/Text";
import colors from "@utils/colors";
import FocusAwareStatusBar from "@elements/StatusBar/FocusAwareStatusBar";
import ButtonPrimary from "@elements/Button/ButtonPrimary";
// @ts-ignore
import { useNavigation, useFocusEffect } from "@react-navigation/native";
// @ts-ignore
import ROUTES from "@utils/routes";
import HeaderList from "@screens/Dashboard/components/HeaderList";
import ButtonPrimaryIcon from "@elements/Button/ButtonPrimaryIcon";
import { ICON } from "@svg/Icon";
import { widthScreen } from "@utils/dimensions";
import SvgBell from "@svg/Icon/SvgBell";
import SvgClose from "@svg/Icon/SvgClose";
import ButtonIcon from "@elements/Button/ButtonIcon";
import ButtonIconBig from "@elements/Button/ButtonIconBig";
import LoadingView from "@elements/LoadingView";
import TransactionItem from "@components/BoxTransactionItem/TransactionItem";
// @ts-ignore
import * as dashboardActions from "@actions/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import { IMasterState } from "@store/models/reducers/master";
import { IDataState } from "@store/models/reducers/data";
import { ILoading } from "@store/models/reducers/loading";
import AdBanner from "@components/AdBanner";
import { currencyFormat } from "@utils/formatNumber";
import { WALLET } from "@store/models";
import TransactionEmpty from "@components/TransactionEmpty";

interface IState {
  loadingReducer: ILoading;
  masterReducer: IMasterState;
  dataReducer: IDataState;
}

const Dashboard = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showNotification, setShowNotification] = useState<boolean>(false);

  const loading = useSelector(
    (state: IState) => state.loadingReducer.isLoading
  );

  const user = useSelector((state: IState) => state.masterReducer.user);

  const wallets = useSelector((state: IState) => state.dataReducer.wallets);

  const walletData = [...wallets, { defaultWallet: true }];

  const latestTransactions = useSelector(
    (state: IState) => state.dataReducer.latestTransactions
  );

  const onCreateAssets = useCallback(() => {
    const params = { route: ROUTES.Dashboard }
    navigation.navigate(ROUTES.CreateAssets, params);
  }, []);

  const onAddTransaction = useCallback(() => {
    const params = { route: ROUTES.Dashboard }
    navigation.navigate(ROUTES.CreateTransaction, params);
  }, []);

  const onNotification = useCallback(() => { }, []);

  const onCloseNotification = useCallback(() => {
    setShowNotification(false);
  }, []);

  const onPressWallet = useCallback((item: WALLET) => {
    let params = { wallet: item };
    navigation.navigate(ROUTES.Transaction, params);
  }, [wallets, latestTransactions]);

  const onClickAddWallet = useCallback(() => {
    navigation.navigate(ROUTES.CreateAssets);
  }, [navigation]);

  const onPressSeeAll = useCallback(() => {
    navigation.navigate(ROUTES.MyWallets);
  }, []);

  const onPressSeeAllTransaction = useCallback(() => {
    navigation.navigate(ROUTES.Transaction);
  }, []);

  const assetsNone = () => {
    return (
      <View style={styles.assetsNone}>
        <Text style={styles.textTitle}>You don’t have any wallets!</Text>
        <ButtonPrimary
          onPress={onCreateAssets}
          title={"Create Now"}
          titleStyle={styles.textCreateNow}
          style={styles.buttonCreate}
        />
      </View>
    );
  };

  const renderNoneTransactions = () => {
    return (
      <TransactionEmpty onPress={() => onAddTransaction()} />
    );
  };

  const renderLatestTransactions = () => {
    return (
      <View style={styles.latestTransactions}>
        <View style={styles.setRowLine}>
          <Text style={styles.textLatestTransactions}>Latest Transactions</Text>
          <TouchableOpacity onPress={onPressSeeAllTransaction} activeOpacity={0.7}>
            <Text style={styles.textSeeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          {latestTransactions.map((item: any, index: number) => {
            if (!user) return null;
            return <TransactionItem {...item} key={index} currency={user.currency} />;
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
      />
      {loading ? (
        <LoadingView isLoading={loading} />
      ) : (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.topView}>
                <Text style={styles.textMyWallet}>My Wallet</Text>
                {wallets.length !== 0 && (
                  <TouchableOpacity onPress={onPressSeeAll} activeOpacity={0.7}>
                    <Text style={styles.textSeeAll}>See All</Text>
                  </TouchableOpacity>
                )}
              </View>
              {wallets.length === 0 ? (
                assetsNone()
              ) : (
                  <>
                    {user &&
                      <HeaderList
                        onClickAddWallet={onClickAddWallet}
                        onPressWallet={onPressWallet}
                        walletData={walletData}
                        currency={user.currency}
                      />
                    }
                    {latestTransactions.length === 0
                      ? renderNoneTransactions()
                      : // : renderNoneTransactions()
                      renderLatestTransactions()}
                  </>
                )}
              <View style={styles.bottomView}></View>
            </ScrollView>
            {showNotification && wallets.length !== 0 && (
              <View style={styles.notificationBox}>
                <Text style={styles.textDesNotification}>
                  Turn On Notifications consectetur adipiscing elit.{" "}
                </Text>
                <ButtonPrimaryIcon
                  underlayColor={colors.mediumAquamarine}
                  onPress={onNotification}
                  titleStyle={styles.textNotification}
                  style={styles.buttonNotification}
                  title={"Turn on notifications"}
                  iconRight={<SvgBell />}
                />
                <TouchableOpacity
                  style={styles.svgClose}
                  onPress={onCloseNotification}
                  activeOpacity={1}
                >
                  <SvgClose />
                </TouchableOpacity>
              </View>
            )}
            {latestTransactions.length !== 0 && (
              <ButtonIconBig
                onPress={onAddTransaction}
                icon={ICON.add}
                style={styles.buttonAddTransaction}
              />
            )}
          </>
        )}
      <AdBanner />
    </View>
  );
});

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.snow,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 18,
    alignItems: "center",
  },
  textMyWallet: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    color: colors.grey1,
    fontFamily: FONTS.MUKTA.Bold,
  },
  textSeeAll: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: colors.purplePlum,
    fontFamily: FONTS.MUKTA.Bold,
  },
  assetsNone: {
    backgroundColor: colors.white,
    alignItems: "center",
    paddingBottom: 16,
    paddingTop: 23,
    borderRadius: 8,
    marginTop: 16,
    marginHorizontal: 16,
  },
  textTitle: {
    paddingHorizontal: 38,
    fontSize: 22,
    lineHeight: 37,
    fontWeight: "600",
    textAlign: "center",
    color: colors.grey1,
    fontFamily: FONTS.MUKTA.Bold,
  },
  buttonCreate: {
    width: 172,
    marginTop: 16,
  },
  textCreateNow: {
    fontFamily: FONTS.MUKTA.Bold,
    fontSize: 17,
  },
  setRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.snow,
    paddingBottom: 7,
  },
  noneTransactions: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  textTransactions: {
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    marginTop: 16,
    marginLeft: 16,
  },
  buttonAdd: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginTop: 8,
    marginRight: 8,
    alignItems: "center",
  },
  textDescription: {
    textAlign: "center",
    marginTop: 24,
    marginBottom: 33,
    paddingHorizontal: 60,
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: colors.grey3,
  },
  bottomView: {
    position: "absolute",
    width: widthScreen,
    bottom: 0,
  },
  notificationBox: {
    backgroundColor: colors.honeyDrew,
    paddingTop: 21,
    paddingBottom: 12,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  textDesNotification: {
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 22,
    color: colors.grey1,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  textNotification: {
    fontFamily: FONTS.MUKTA.Regular,
    fontWeight: "500",
    fontSize: 14,
  },
  buttonNotification: {
    marginTop: 13,
    width: 172,
    height: 36,
  },
  svgClose: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
  latestTransactions: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  textLatestTransactions: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "600",
    color: colors.grey1,
    fontFamily: FONTS.MUKTA.Bold,
  },
  setRowLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.snow,
    paddingBottom: 16,
  },
  buttonAddTransaction: {
    position: "absolute",
    width: 56,
    height: 56,
    right: 16,
    bottom: 16,
  },
});
