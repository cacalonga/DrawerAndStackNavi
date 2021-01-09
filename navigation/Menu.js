import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text, View
} from "react-native";

class CustomDrawerContent extends React.Component {
    constructor(props) {
        super(props);
    }
    homeNavi = () => {
        this.props.navigation.navigate("AppStack", {
            screen: "HomeStack",
            params: {
                screen: "HomeStack"
            },
        })
    }
    notificationNavi = () => {
        this.props.navigation.navigate("AppStack", {
            screen: "NotificationStack",
            params: {
                screen: "NotificationStack"
            },
        })
    }
    settingsNavi = () => {
        this.props.navigation.navigate("AppStack", {
            screen: "SettingsStack",
            params: {
                screen: "SettingsStack"
            },
        })
    }
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.homeNavi} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.notificationNavi} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Notification</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.settingsNavi} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10
    },
    button: {
        alignItems: "flex-start",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginBottom:5
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default CustomDrawerContent;
