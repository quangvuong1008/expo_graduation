import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { heightScreen, widthScreen } from "@utils/dimensions";
import TotalTransactionItem from "@components/TotalTransactionItem";
import HighchartsReactNative from "@lib/highcharts-react-native";
import colors from "@utils/colors";
import { useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import ROUTES from "@utils/routes";

interface Props {
  walletId?: number;
  tabLabel?: string;
  data?: any;
  income?: number;
  expense?: number;
  currency?: string;
  category?: any;
  incomeArr?: any;
  expenseArr?: any;
  isNull?: boolean;
}

const StatisticPage = memo(
  ({
    walletId,
    income,
    expense,
    data,
    currency,
    category,
    incomeArr,
    expenseArr,
    isNull,
  }: Props) => {
    const navigation = useNavigation();
    const options = {
      chart: {
        type: "column",
        scrollablePlotArea: {
          minWidth: widthScreen,
          scrollPositionX: 10,
        },
      },
      legend: {
        enabled: false,
      },
      xAxis: {
        categories: category,
        crosshair: true,
      },
      yAxis: {
        labels: {
          format: "{value}",
        },
        min: 0,
        title: {
          text: "",
        },
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Income",
          color: colors.bleuDeFrance,
          data: incomeArr,
        },
        {
          name: "Expense",
          color: colors.redCrayola,
          data: expenseArr,
        },
      ],
    };

    const onPressIncome = () => {
      // TODO: navigation.navigate(ROUTES.ChartAnalysis, { walletId, type: "income" });
    };

    const onPressExpense = () => {
      // TODO: navigation.navigate(ROUTES.ChartAnalysis, { walletId, type: "expense" });
    };

    return (
      <View style={styles.container}>
        <View
          style={{
            borderRadius: 12,
            overflow: "hidden",
            justifyContent:'center',
            alignItems:'center',
            height: heightScreen / 2.2,
            width: widthScreen,
          }}
        >
          {!isNull && (
            <HighchartsReactNative
              useSSL={true}
              useCDN={true}
              styles={styles.chart}
              options={options}
            />
          )}
        </View>
        <TotalTransactionItem
          style={styles.transactionEmpty}
          income={income}
          expense={expense}
          currency={currency}
          onPressIncome={onPressIncome}
          onPressExpense={onPressExpense}
        />
      </View>
    );
  }
);

export default StatisticPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: widthScreen,
  },
  chart: {
    height: heightScreen / 2.2,
    width: widthScreen,
    alignSelf: "center",
    marginTop: 16,
  },
  transactionEmpty: {
    marginHorizontal: 16,
    bottom: 0,
    marginTop: 16,
  },
});
