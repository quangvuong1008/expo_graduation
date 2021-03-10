import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Modal, TouchableOpacity } from "react-native";
import colors from "@utils/colors";
import { Calculator } from "@components/Calculator";
import { widthScreen } from "@utils/dimensions";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Animated, { sub } from "react-native-reanimated";
import { runTiming } from "@utils/runTiming";
import { heightScreen } from "@utils/dimensions";

const {
  Value,
  useCode,
  set,
  cond,
  eq,
  block,
  Clock,
  interpolate,
  Extrapolate,
  call,
} = Animated;

interface Props {
  style?: object;
  value?: number;
  visible?: boolean;
  onTextChange?: (text: string) => void;
  onCalc?: (number: number) => void;
  onAccept?: () => void;
  onClose?: () => void;
  onRequestClose?: () => void;
}

export default ({
  style,
  value,
  visible,
  onTextChange,
  onCalc,
  onClose,
  onAccept,
  onRequestClose,
  ...props
}: Props) => {
  const [show, setShow] = useState(false);
  const animation = useMemo(() => new Value(0), []);
  const transY = useMemo(() => new Value(0), []);
  const visibleAnimation = useMemo(() => new Value<number>(1), []);
  const setVisibleAnimation = (bool: number) => visibleAnimation.setValue(bool);
  const clock = useMemo(() => new Clock(), []);

  useEffect(() => {
    if (visible === true) {
      setVisibleAnimation(1);
      setShow((prev) => true);
    }
    if (visible === false) {
      setVisibleAnimation(2);
      setTimeout(() => {
        setShow((prev) => false);
      }, 500);
    }
  }, [visible, setShow]);

  useCode(
    () =>
      block([
        cond(eq(visibleAnimation, 2), [
          set(animation, runTiming(clock)),
          set(
            transY,
            interpolate(animation, {
              inputRange: [0, 1],
              outputRange: [0, -heightScreen],
              extrapolate: Extrapolate.CLAMP,
            })
          ),
        ]),
        cond(eq(visibleAnimation, 1), [
          set(animation, runTiming(clock)),
          set(
            transY,
            interpolate(animation, {
              inputRange: [0, 1],
              outputRange: [-heightScreen, 0],
              extrapolate: Extrapolate.CLAMP,
            })
          ),
        ]),
      ]),
    []
  );

  return (
    <Modal
      visible={show}
      onRequestClose={onRequestClose}
      transparent
      animationType={"none"}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onClose}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            styles.keyBoardView,
            {
              transform: [
                {
                  translateY: sub(0, transY),
                },
              ],
            },
          ]}
        >
          <Calculator
            style={styles.keyBoard}
            hasAcceptButton
            value={value}
            hideDisplay={true}
            displayColor={colors.emerald}
            borderColor={colors.white}
            onTextChange={onTextChange}
            onCalc={onCalc}
            onAccept={onAccept}
          />
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },
  keyBoardView: {
    position: "absolute",
    bottom: 0,
    width: widthScreen,
    paddingBottom: getBottomSpace() + 12,
    borderTopColor: colors.parisWhite,
  },
  keyBoard: {
    paddingTop: 16,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: -1, height: -1 },
    shadowRadius: 4,
    shadowOpacity: 0.05,
  },
});
