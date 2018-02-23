import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font } from "expo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import RootNavigation from "./screens/RootNavigation";

const httpLink = new HttpLink({ uri: "http://192.168.0.20:4000" });

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default class App extends React.Component {
    state = {
        isLoadingComplete: false
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <ApolloProvider client={client}>
                    <View style={styles.container}>
                        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                        {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
                        <RootNavigation />
                    </View>
                </ApolloProvider>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require("./assets/images/robot-dev.png"),
                require("./assets/images/robot-prod.png")
            ]),
            Font.loadAsync({
                "noto_serif--regular": require("./assets/fonts/Noto_Serif/NotoSerif-Regular.ttf"),
                "noto_serif--bold": require("./assets/fonts/Noto_Serif/NotoSerif-Bold.ttf"),
                "noto_serif--italic": require("./assets/fonts/Noto_Serif/NotoSerif-Italic.ttf"),
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: "rgba(0,0,0,0.2)"
    },
});
