import React from "react";
import {
    View,
    Text
} from "react-native";
import MainHeader from "../../../shared/components/MainHeader";

export default class ClientsScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Clientes",
        backButton: false
    });

    render() {
        return (
            <View>
                <Text>
                    ClientsScreen
                </Text>
            </View>
        );
    }
}