import React, { memo, useCallback, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import colors from "@utils/colors";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import HeaderButton from "@elements/Header/HeaderButton";
import ROUTES from "@utils/routes";
import FocusAwareStatusBar from "@elements/StatusBar/FocusAwareStatusBar";
import SearchBar from "@elements/SearchBar";
import { LIST_CATEGORY } from "@data/index";
import keyExtractor from "@utils/keyExtractor";
import LoadingView from "@elements/LoadingView";
import AnimatedDropSelectItem from "@components/AnimatedDropSelectItem";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { useSelector } from "react-redux";
import { IMasterState } from "@store/models/reducers/master";
import { ILoading } from "@store/models/reducers/loading";
import changeAlias from "@utils/stringAlias";
import { CATEGORY } from "@store/models";

interface IState {
  masterReducer: IMasterState;
  loadingReducer: ILoading;
}

const AddTransactionCategory = memo(({ route }: any) => {
  const navigation = useNavigation();

  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<any>({});
  const [dataSearch, setDataSearch] = useState<Array<object>>([]);

  const disabled = category.name === undefined;
  const [goback, setGoBack] = useState<string>(ROUTES.CreateTransaction);

  const loading = useSelector(
    (state: IState) => state.loadingReducer.isLoading
  );

  const categories = useSelector(
    (state: IState) => state.masterReducer.categories
  );

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.route) {
        setGoBack(route.params?.route);
      } else {
        setGoBack(ROUTES.CreateTransaction);
      }
      if (route.params?.category) {
        setCategory(route.params?.category);
      }
      console.log('route: ', route.params)
      //setWalletName(route.params?.name || "");
      initialized();
    }, [route.params?.category, route.params?.route])
  );

  const initialized = async () => {
    try {
      setDataSearch(categories);
    } catch (e) { }
  };

  React.useLayoutEffect(() => {
    const onPressDone = () => {
      const params = { category: category };
      navigation.navigate(goback, params);
    };

    const textDoneStyle = disabled
      ? { color: colors.grey3 }
      : { color: colors.purplePlum };

    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={onPressDone}
          disabled={disabled}
          titleStyle={textDoneStyle}
          title={"Done"}
        />
      ),
    });
  }, [category]);

  const onChooseCategory = (item: any) => {
    setCategory(item);
  };
  const onPressSearch = useCallback((text) => {
    let data = dataSearch;
    if (text === "" || text === null || text === undefined) {
      setDataSearch(categories);
    } else {
      data = [];
      categories.map((item) => {
        if (
          changeAlias(item.name).includes(changeAlias(text))
        ) {
          let iemmArr: Array<CATEGORY> = [];
          item.children.map((itemChildren) => {
            if (changeAlias(itemChildren.name).includes(changeAlias(text))) {
              iemmArr.push(itemChildren)
            }
          })
          let dataTemp = {
            id: item.id,
            name: item.name,
            icon: item.icon,
            type: item.type,
            children: iemmArr
          }
          data.push(dataTemp);
        }
      });
      setDataSearch(data);
    }
    setSearch(text);
  }, []);


  const renderListCategory = useCallback(
    ({ item, index }) => {
      const style =
        index === 0
          ? styles.borderTop
          : index + 1 === dataSearch.length
            ? styles.borderBottom
            : null;

      return (
        <AnimatedDropSelectItem
          style={style}
          onChooseCategories={(category) => onChooseCategory(category)}
          isCategoriesChose={category.id}
          {...item}
        />
      );
    },
    [category, dataSearch]
  );

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
            <View style={styles.searchView}>
              <SearchBar
                placeholder={"Search category"}
                inputStyle={styles.inputStyle}
                style={styles.textInput}
                placeholderTextColor={colors.greySuit}
                value={search}
                onChangeText={(text: string) => onPressSearch(text)}
              />
            </View>
            <FlatList
              data={dataSearch}
              renderItem={renderListCategory}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            />
          </>
        )}
    </View>
  );
});

export default AddTransactionCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.snow,
  },
  textEdit: {
    color: colors.purplePlum,
  },
  searchView: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  textInput: {
    width: "100%",
    backgroundColor: colors.greySuitOpacity,
    borderRadius: 10,
    fontSize: 16,
  },
  inputStyle: {
    fontSize: 16,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 16,
  },
  borderTop: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 16,
  },
  borderBottom: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingBottom: 16,
  },
});
