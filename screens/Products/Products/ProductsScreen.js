import React from "react";
import {
    View,
    Text
} from "react-native";
import MainHeader from "../../../shared/components/MainHeader";

export default class ProductsScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Produtos",
        backButton: false
    });

    render() {
        return (
            <View>
                <Text>
                    ProductsScreen
                </Text>
            </View>
        );
    }
}