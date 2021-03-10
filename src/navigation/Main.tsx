import * as React from "react";
import { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { navigationRef } from "./NavigationService";
import { StyleSheet } from "react-native";
import { ICON } from "@svg/Icon";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import ROUTES from "@utils/routes";
import WalkThrough from "@screens/WalkThrough";
import Login from "@screens/Login";
import HeaderButton from "@elements/Header/HeaderButton";
import BottomMainTab from "@navigation/BottomMainTab";
import DrawerNavigator from "@navigation/DrawerNavigator";
import CreateAssets from "@screens/CreateAssets";
import CreateAssetsName from "@screens/CreateAssetsName";
import CreateAssetsBalance from "@screens/CreateAssetsBalance";
import CreateAssetsType from "@screens/CreateAssetsType";
import Transaction from "@screens/Transaction";
import HeaderBackGround from "@elements/Header/HeaderBackGround";
import SelectWallet from "@screens/SelectWallet";
import CreateTransaction from "@screens/CreateTransaction";
import AddTransactionWallets from "@screens/AddTransactionWallets";
import AddTransactionNote from "@screens/AddTransactionNote";
import AddTransactionCategory from "@screens/AddTransactionCategory";
import EditTransaction from "@screens/EditTransaction";
import MyWallets from "@screens/MyWallets";
import Currency from "@screens/Currency";
import GetPremium from "@screens/GetPremium";
import GetPremiumSuccessful from "@screens/GetPremiumSuccessful";
import MyWalletsEdit from "@screens/MyWalletsEdit";
import ChartAnalysis from "@screens/ChartAnalysis";
import ChartTransaction from "@screens/ChartTransaction";
import Splash from "@screens/Splash";

const Stack = createStackNavigator();

const Main = memo(() => {
  const headerHide = { headerShown: false };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={ROUTES.Splash}>
        <Stack.Screen
          name={ROUTES.Splash}
          component={Splash}
          options={headerHide}
        />
        <Stack.Screen
          name={ROUTES.WalkThrough}
          component={WalkThrough}
          options={headerHide}
        />
        <Stack.Screen
          name={ROUTES.Login}
          component={Login}
          options={headerHide}
        />
        <Stack.Screen
          name={ROUTES.BottomMainTab}
          component={BottomMainTab}
          options={headerHide}
        />
        <Stack.Screen
          name={ROUTES.DrawerNavigator}
          component={DrawerNavigator}
          options={headerHide}
        />
        <Stack.Screen
          name={ROUTES.GetPremiumSuccessful}
          component={GetPremiumSuccessful}
          options={headerHide}
        />
        <Stack.Screen
          name={ROUTES.CreateAssets}
          component={CreateAssets}
          options={() => ({
            headerTitle: "Create Wallet",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.CreateAssetsName}
          component={CreateAssetsName}
          options={() => ({
            headerTitle: "Wallet Name",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.CreateAssetsBalance}
          component={CreateAssetsBalance}
          options={() => ({
            headerTitle: "Wallet Balance",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.CreateAssetsType}
          component={CreateAssetsType}
          options={() => ({
            headerTitle: "Wallet Type",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.Transaction}
          component={Transaction}
          options={() => ({
            headerTitle: "",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerBackground: () => (
              <HeaderBackGround style={styles.headerBackGround} />
            ),
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton icon={ICON.whiteBackArrow} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.SelectWallet}
          component={SelectWallet}
          options={() => ({
            headerTitle: "Select Wallet",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.CreateTransaction}
          component={CreateTransaction}
          options={() => ({
            headerTitle: "Create Transaction",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerNonBorder,
          })}
        />
        <Stack.Screen
          name={ROUTES.EditTransaction}
          component={EditTransaction}
          options={() => ({
            headerTitle: "Edit Transaction",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerNonBorder,
          })}
        />
        <Stack.Screen
          name={ROUTES.AddTransactionWallets}
          component={AddTransactionWallets}
          options={() => ({
            headerTitle: "Wallet",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.AddTransactionNote}
          component={AddTransactionNote}
          options={() => ({
            headerTitle: "Note",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.AddTransactionCategory}
          component={AddTransactionCategory}
          options={() => ({
            headerTitle: "Categories",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.MyWallets}
          component={MyWallets}
          options={() => ({
            headerTitle: "My Wallets",
            headerTitleAlign: "center",
            headerTintColor: colors.white,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerBackground: () => (
              <HeaderBackGround style={styles.headerBackGround} />
            ),
          })}
        />
        <Stack.Screen
          name={ROUTES.Currency}
          component={Currency}
          options={() => ({
            headerTitle: "Currency",
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.GetPremium}
          component={GetPremium}
          options={() => ({
            headerTitle: "Get Premium",
            headerTitleAlign: "center",
            headerTintColor: colors.white,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerBackground: () => (
              <HeaderBackGround style={styles.headerBackGround} />
            ),
            headerLeft: () => <HeaderButton icon={ICON.whiteBackArrow} />,
          })}
        />
        <Stack.Screen
          name={ROUTES.MyWalletsEdit}
          component={MyWalletsEdit}
          options={() => ({
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
          })}
        />
        <Stack.Screen
          name={ROUTES.ChartAnalysis}
          component={ChartAnalysis}
          options={() => ({
            headerTitleAlign: "center",
            headerTintColor: colors.grey2,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton />,
          })}
        />
        <Stack.Screen
          name={ROUTES.ChartTransaction}
          component={ChartTransaction}
          options={() => ({
            headerTitleAlign: "center",
            headerTintColor: colors.white,
            headerTitleStyle: styles.headerTitleStyle,
            headerStyle: styles.headerStyle,
            headerLeft: () => <HeaderButton icon={ICON.whiteBackArrow} />,
            headerBackground: () => (
              <HeaderBackGround style={styles.headerBackGround} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontFamily: FONTS.MUKTA.SemiBold,
    fontSize: 17,
    fontWeight: "600",
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomColor: colors.snow,
  },
  headerBackGround: {
    backgroundColor: colors.emerald,
  },
  headerNonBorder: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});
