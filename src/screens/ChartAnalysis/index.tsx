import React, { memo, useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import Text from "@elements/Text";
import colors from "@utils/colors";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import ScrollableTab from "@elements/ScrollableTab";
import HeaderButton from "@elements/Header/HeaderButton";
import { ICON } from "@svg/Icon";
import FocusAwareStatusBar from "@elements/StatusBar/FocusAwareStatusBar";
import LoadingView from "@elements/LoadingView";
import AnalysisPage from "./components/AnalysisPage";
import { currencyFormat } from "@utils/formatNumber";
import ModalSlideBottom from "@elements/ModalSlideBottom";
import useModalAnimation from "@hooks/useModalAnimation";
import ModalFrequency from "@components/ModalFrequency";
import { CURRENCY } from "@store/models";

const ChartAnalysis = memo(({ route }: any) => {
  const navigation = useNavigation();

  const [currency, setCurrency] = useState<CURRENCY>();
  const [loading, setLoading] = useState<boolean>(true);
  const [frequency, setFrequency] = useState<object>({});

  const { visible, open, close, transY } = useModalAnimation();

  useFocusEffect(
    React.useCallback(() => {
      initialized();
    }, [])
  );

  const initialized = async () => {
    try {
      // TODO: GET FROM USER STATE
      // setCurrency("USD");
      setLoading(false);
    } catch (e) {}
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Income Analysis",
      headerRight: () => <HeaderButton icon={ICON.calendar} onPress={open} />,
    });
  }, []);

  const onChangeFrequency = (frequency) => {
    close();
    setFrequency(frequency);
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
        <ScrollableTab
          titles={["November 2020", "December 2020", "January 2021"]}
        >
          <AnalysisPage
            balance={12123}
            currency={currency}
            typeTransaction={"expense"}
          />
          <AnalysisPage
            balance={12123}
            currency={currency}
            typeTransaction={"income"}
          />
        </ScrollableTab>
      )}
      <Modal
        visible={visible}
        onRequestClose={close}
        transparent
        animationType={"none"}
      >
        <ModalSlideBottom onClose={close} transY={transY}>
          <ModalFrequency
            onChangeFrequency={(frequency) => onChangeFrequency(frequency)}
          />
        </ModalSlideBottom>
      </Modal>
    </View>
  );
});

export default ChartAnalysis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.snow,
  },
});
