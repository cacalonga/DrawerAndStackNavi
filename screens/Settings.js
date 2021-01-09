import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    settingsNavi = () => {
        this.props.navigation.navigate("SettingsStack", {
            screen: "ToolsScreen",
            params: {
                screen: "ToolsScreen"
            },
        })
    }
    render() {

        return (
            <View style={styles.container}>
                <Text>Settings Page</Text>
                <TouchableOpacity onPress={this.settingsNavi} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go Tools Screen</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#EEEEEE",
        padding: 10,
        marginBottom:5
    },
});