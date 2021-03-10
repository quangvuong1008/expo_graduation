import React, { memo, useCallback, useEffect, useState, useRef } from "react";
import {
  View,
  Platform,
  StyleSheet,
  Alert,
  ScrollView,
  Animated,
} from "react-native";
import colors from "@utils/colors";
import { heightScreen, widthScreen } from "@utils/dimensions";
// @ts-ignore
import { getBottomSpace, getStatusBarHeight, } from "react-native-iphone-x-helper";
import FocusAwareStatusBar from "@elements/StatusBar/FocusAwareStatusBar";
import ButtonPrimaryIcon from "@elements/Button/ButtonPrimaryIcon";
import { LOGIN_SCREEN } from "@svg/Login";
import { useDispatch } from "react-redux";
// @ts-ignore
import firebase from "firebase";
// @ts-ignore
import * as Google from "expo-google-app-auth";
// @ts-ignore
import * as Facebook from "expo-facebook";
import { apiSignIn, apiGetUserByToken } from "@api/index";
import {
  saveToken,
  saveUuidUser,
  getUuidUser,
  saveGuestFlag,
} from "../../utils/store/Store";
// @ts-ignore
import { navigateToBottomMain } from "@actions/navigationActions";
// @ts-ignore
import * as loginActions from "@actions/loginActions";
// @ts-ignore
import * as dashboardActions from "@actions/dashboardActions";
import LoadingView from "@elements/LoadingView";
import Page from "./components/Page";
import Dots from "./components/Dots";
import { LOGIN_DATA } from "@data/index";
import { onGetCurrencyResponse } from "../../store/actions/currencyAction";

const Login = memo(() => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setData(LOGIN_DATA);
    setLoading(false);
  }, []);

  const checkLogin = async (firebaseToken: string) => {
    const { user, token, typeWallets, categories, currencies } = await apiSignIn({
      firebaseToken,
      isGuest: false,
    });
    await saveToken(token);
    await saveGuestFlag(false);

    dispatch(
      loginActions.onLoginResponse(
        user,
        categories,
        currencies,
        typeWallets,
      )
    );
    dispatch(dashboardActions.onDashboardRequest());
    navigateToBottomMain({});
  };

  const signInWithFacebookAsync = async () => {
    try {
      await Facebook.initializeAsync({
        appId: "167982964704055",
        appName: "monsy",
      });

      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
      });

      if (result.type === "success") {
        setLoading(true);

        const { token } = result;
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
          token
        );

        // Sign-in the user with the credential
        await firebase.auth().signInWithCredential(facebookCredential);

        const currentUser = firebase.auth().currentUser;
        if (!currentUser) {
          return;
        }

        const firebaseToken = await currentUser
          .getIdToken()
          .then((data) => data);

        await checkLogin(firebaseToken);

        setLoading(false);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      setLoading(false);
      // DEBUG
      console.log("DEBUG ERROR: Login Facebook ", e);
      // Handle error
      Alert.alert("Login facebook failed");
      return { error: true };
    }
  };

  const onLogInFacebook = useCallback(async () => {
    signInWithFacebookAsync();
  }, []);

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "280779779846-ad99f5v8fkrg4svq426g4p44a9f0qujr.apps.googleusercontent.com",
        iosClientId: "280779779846-d4tnr702rak190ij6agpt3hqma6c7cq1.apps.googleusercontent.com",
        iosStandaloneAppClientId: "280779779846-24okspdsirbmh7rkkpd829ledai1op20.apps.googleusercontent.com",
        androidStandaloneAppClientId: "280779779846-8l3kkpbsqdlhufme2t771srmuslmq72p.apps.googleusercontent.com",
        scopes: ["profile"],
      });

      if (result.type === "success") {
        setLoading(true);

        const { idToken } = result;

        // Thong tin push len de xu ly login
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(
          idToken
        );

        // Sign-in the user with the credential
        await firebase.auth().signInWithCredential(googleCredential);

        const currentUser = firebase.auth().currentUser;
        if (!currentUser) {
          return;
        }

        const firebaseToken = await currentUser
          .getIdToken()
          .then((data) => data);

        await checkLogin(firebaseToken);

        setLoading(false);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      setLoading(false);

      // DEBUG
      console.log("DEBUG ERROR: Login Google ", e);

      // Handle error
      Alert.alert("Login google failed");
      return { error: true };
    }
  };

  const onLoginGoogle = useCallback(async () => {
    try {
      signInWithGoogleAsync();
    } catch (e) {
      console.log("Error: Login Google ", e);
    }
  }, []);

  const onLoginApple = useCallback(() => { }, []);

  const onLoginAsGuest = useCallback(async () => {
    try {
      //const uuid = await getUuidUser();
      //console.log("DEBUG: uuid", uuid);

      // DEBUG
      //const uuid = "8d2cda0f-c199-4132-a2b6-befdc77d5410";
      const uuid = "5b9d01b5-e458-40b1-8b49-fd0504636a6f";
      
      // Send login request to server
      const {
        user,
        token,
        typeWallets,
        categories,
        currencies,
      } = await apiSignIn({ uuid, isGuest: true });

      // Save token
      await saveToken(token);
      // Update uuid for new user case
      await saveUuidUser(user.uuid);
      await saveGuestFlag(true);

      // Update store
      dispatch(
        loginActions.onLoginResponse(
          user,
          categories,
          currencies,
          typeWallets,
        )
      );
      dispatch(dashboardActions.onDashboardRequest());

      // Navigate to dashboard
      navigateToBottomMain({});
    } catch (e) {
      Alert.alert("Login Guest failed");
      console.log("Error: Login Guest", e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={colors.emerald}
        barStyle={"light-content"}
      />
      {loading ? (
        <LoadingView isLoading={loading} />
      ) : (
          <>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              contentContainerStyle={styles.contentContainerStyle}
              scrollEventThrottle={16}
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            >
              {data.map((item: any, index: number) => {
                return <Page {...item} key={index} />;
              })}
            </ScrollView>
            <View style={styles.contentView}>
              <Dots scrollX={scrollX} />
              <ButtonPrimaryIcon
                onPress={onLogInFacebook}
                style={styles.buttonFacebook}
                colorFocus={colors.navyBlue}
                colorBlur={colors.bleuDeFrance}
                iconLeft={LOGIN_SCREEN.facebook}
                underlayColor={colors.mayaBlue}
                title={"Login with Facebook"}
              />
              <ButtonPrimaryIcon
                onPress={onLoginGoogle}
                style={styles.buttonGoogle}
                colorFocus={colors.bitterSweet}
                colorBlur={colors.redCrayola}
                iconLeft={LOGIN_SCREEN.google}
                underlayColor={colors.monaLisa}
                title={"Login with Google"}
              />
              { false &&
              <ButtonPrimaryIcon
                onPress={onLoginApple}
                style={styles.buttonAppleID}
                colorFocus={colors.black}
                colorBlur={colors.grey1}
                iconLeft={LOGIN_SCREEN.apple}
                underlayColor={colors.timberGreen}
                title={"Login with Apple"}
              />
              }
              <ButtonPrimaryIcon
                onPress={onLoginAsGuest}
                style={styles.buttonSkip}
                titleStyle={styles.textLoginAsGuest}
                underlayColor={colors.white}
                title={"Login as Guest"}
              />
            </View>
          </>
        )}
    </View>
  );
});

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.emerald,
  },
  image: {
    width: 125,
    height: 125,
    marginTop: Platform.OS === "ios" ? getStatusBarHeight() + 110 : 110,
    alignSelf: "center",
  },
  description: {
    paddingHorizontal: 40,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 19,
    textAlign: "center",
    fontWeight: "400",
  },
  contentView: {
    position: "absolute",
    width: widthScreen,
    alignItems: "center",
    bottom: 0,
    paddingBottom: getBottomSpace(),
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingTop: 24,
  },
  buttonPhoneNumber: {
    backgroundColor: colors.black,
    marginTop: 24,
  },
  buttonFacebook: {
    marginTop: 24,
  },
  buttonGoogle: {
    marginTop: 24,
  },
  buttonAppleID: {
    marginTop: 24,
  },
  buttonSkip: {
    backgroundColor: "transparent",
    marginTop: 10,
  },
  textLoginAsGuest: {
    color: colors.emerald,
  },
  backgroundVideo: {
    width: widthScreen,
    height: heightScreen,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoContainer: {
    position: "absolute",
    height: heightScreen,
    width: widthScreen,
  },
  loadingScreen: {
    flex: 1,
    backgroundColor: "rgba(51, 51, 51, 0.7)",
    height: heightScreen,
    width: widthScreen,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainerStyle: {
    width: widthScreen * 3,
    height: heightScreen,
  },
});
