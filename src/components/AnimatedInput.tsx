import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Text from '@elements/Text';
import colors from "@utils/colors";
import SvgRightArrow from "@svg/Icon/SvgRightArrow";
import FONTS from '@utils/fonts'

interface Props {
  style?: any;
  icon?: any;
  imageIcon?: any;
  nonBorder?: boolean;
  placeholder?: string;
  value?: string;
  currency?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const AnimatedInput = ({ disabled, style, onPress, icon, imageIcon, nonBorder, currency, placeholder, value }: Props) => {

  const borderStyle = nonBorder ? null : styles.borderStyle

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[styles.container, borderStyle, style]}>
      <View style={styles.setRow} >
        {imageIcon ? <Image style={styles.imageIcon} source={imageIcon} /> :
          icon ? <View style={styles.icon} >{icon}</View> : <View style={styles.defaultIcon} />}
        {value === '' ?
          <Text style={styles.textPlaceholder}>{placeholder}</Text> :
          <Text style={styles.textValue} >{value}</Text>}
      </View>
      <View style={styles.setRow}>
        {!!currency && currency !== '' ? (
          <View style={styles.currencyView} >
            <Text style={styles.textCurrency}>{currency}</Text>
          </View>) : null}
        <SvgRightArrow style={styles.svgRightArrow} />
      </View>
    </TouchableOpacity>
  )
}

export default AnimatedInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  imageIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  setRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  defaultIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.grey5,
    marginRight: 12,
  },
  textPlaceholder: {
    fontFamily: FONTS.MUKTA.Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: colors.grey3,
  },
  textValue: {
    fontFamily: FONTS.MUKTA.Regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: colors.grey1,
  },
  svgRightArrow: {
    alignSelf: 'center',
  },
  currencyView: {
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: colors.grey5,
    marginRight: 14,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  textCurrency: {
    fontFamily: FONTS.MUKTA.Regular,
    fontWeight: '500',
    fontSize: 14,
    color: colors.grey1,
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderColor: colors.snow
  }
})
