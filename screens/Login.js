import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Login Page</Text>
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
});