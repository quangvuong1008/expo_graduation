import React from "react";
import moment from "moment";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import FONTS from "@utils/fonts";
import Text from "@elements/Text";
import colors from "@utils/colors";
import { currencyFormat, truncateString } from "@utils/formatNumber";
import { CATEGORY, CURRENCY } from "@store/models";
import { IMAGE_ICON_CATEGORY } from "@assets/IconCategory";

interface Props {
  style?: object;
  id?: string;
  icon?: string;
  note?: string;
  date?: string;
  balance: number;
  income?: boolean;
  expense?: boolean;
  type?: string;
  category?: CATEGORY;
  currency: CURRENCY;
}

const TransactionItem = ({
  style,
  icon,
  date,
  balance,
  note,
  income,
  expense,
  category,
  currency,
  type,
  ...props
}: Props) => {

  const sourceIcon = IMAGE_ICON_CATEGORY[`${category?.icon}`];

  const title = note && note.length > 0 ? note : category ? category.name : "";

  let displayDate = "";
  if (date) {
    displayDate = moment(date).format("L");
  }

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, style]}
      activeOpacity={0.7}
    >
      <Image source={sourceIcon} style={styles.imageIcon} />
      <View>
        <Text style={styles.textTitle}>{truncateString(title, 23)}</Text>
        <Text style={styles.textDate}>{displayDate}</Text>
      </View>
      {type == "income" ? (
        <Text style={styles.textIncome}>{currencyFormat(balance, currency)}</Text>
      ) :

        type == "expense" ? (
          <Text style={styles.textExpense}>-{currencyFormat(balance, currency)}</Text>
        )
          :
          (
            <Text style={styles.textTransfer}>{currencyFormat(balance, currency)}</Text>
          )
      }
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.snow,
    paddingTop: 16,
    paddingBottom: 10,
    height: 70,
  },
  imageIcon: {
    position: "absolute",
    top: 18,
  },
  textTitle: {
    fontFamily: FONTS.MUKTA.Regular,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    maxWidth: 200,
    flex: 1,
    color: colors.grey1,
  },
  textDate: {
    fontFamily: FONTS.MUKTA.Regular,
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: colors.grey3,
  },
  textIncome: {
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    width: 100,
    color: colors.bleuDeFrance,
    textAlign: "right",
  },
  textExpense: {
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    width: 100,
    color: colors.redCrayola,
    textAlign: "right",
  },
  textTransfer: {
    fontFamily: FONTS.MUKTA.Bold,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    width: 100,
    color: colors.emerald,
    textAlign: "right",
  },
});
