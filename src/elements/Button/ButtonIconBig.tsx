import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  style?: any;
  icon?: any;
  onPress?: () => void;
}

const ButtonIconBig = ({ style, icon, onPress, ...props }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} {...props} activeOpacity={0.7} style={[style, { marginBottom: 30 }]} >
      <ImageBackground style={[styles.container, style]} source={require('@assets/Icon/Samsung.png')} >
        {icon}
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default ButtonIconBig;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
})
