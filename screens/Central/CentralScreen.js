import React from "react";
import {
    View,
    Text
} from "react-native";
import MainHeader from "../../shared/components/MainHeader";

export default class CentralScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Central de Relacionamento",
        backButton: false
    });

    render() {
        return (
            <View>
                <Text>
                    CentralScreen
                </Text>
            </View>
        );
    }
}