import React from "react";
import {
    View,
    Text
} from "react-native";
import MainHeader from "../../../shared/components/MainHeader";

export default class OrdersScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Encomendas",
        backButton: false
    });

    render() {
        return (
            <View>
                <Text>
                    OrdersScreen
                </Text>
            </View>
        );
    }
}