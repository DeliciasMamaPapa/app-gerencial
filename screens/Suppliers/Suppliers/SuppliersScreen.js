import React from "react";
import {
    View,
    Text
} from "react-native";
import MainHeader from "../../../shared/components/MainHeader";

export default class SuppliersScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Fornecedores",
        backButton: false
    });

    render() {
        return (
            <View>
                <Text>
                    SuppliersScreen
                </Text>
            </View>
        );
    }
}