import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {Icon} from "react-native-elements";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

export default ({title, backButton}) => ({navigation}) => {
    const configs = {
        headerStyle,
        headerTitle: renderTitle(title)
    }

    if (backButton) {
        configs.headerLeft = renderBackButton(navigation)
        configs.headerRight = <View/>
    }
    return configs
}

export const renderBackButton = (navigation) => (
    <TouchableOpacity
        style={styles.touchable}
        onPress={() => {navigation.goBack()}}
    >
        <Icon
            iconStyle={styles.backIcon}
            name="arrow-left"
            type="entypo"
            size={17}
            color={Colors.white}
        />
    </TouchableOpacity>
);

export const renderTitle = (title) => (
    <Text style={styles.headerTitle}>
        {title}
    </Text>
);

export const headerStyle = {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white50,
    shadowOpacity: 0,
    shadowOffset: { height: 0 },
    shadowRadius: 0,
    elevation: 0,
    justifyContent: "center",
    backgroundColor: Colors.primaryBlue,
}

const styles = StyleSheet.create({
    touchable: {
        paddingTop: 5,
        paddingRight: 30,
    },
    headerTitle: {
        ...Fonts.header,
        paddingTop: 5
    },
    backIcon: {
        marginLeft: 16,
    }
});