import React, { memo, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
// TODO: import ProfilePremium from "./components/ProfilePremium";
import ProfileNormal from "./components/ProfileNormal";
import ProfileGuest from "./components/ProfileGuest";
import AdBanner from "@components/AdBanner";
import { getGuestFlag, getUuidUser } from "@utils/store/Store";

const Profile = memo(() => {
  const [isGuest, setIsGuest] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useFocusEffect(React.useCallback(() => {
    initialized();
  }, []));

  const initialized = async () => {
    let guestFlag = await getGuestFlag();
    if (guestFlag == "guest") {
      setIsGuest(true);
    } else {
      setIsGuest(false);
    }
    setLoaded(true);
  }

  if (!loaded) {
    return <View style={styles.container}></View>
  }

  return (
    <View style={styles.container}>
      { isGuest ? <ProfileGuest /> : <ProfileNormal /> }
      {/* TODO: <ProfilePremium /> */}
      <AdBanner/>
    </View>
  );
});

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
