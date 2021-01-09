import React from "react";
import { View, StyleSheet, Text, BackHandler } from "react-native";


export default class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    handleBackButton() {
        return true;
    }
    
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Notification Page</Text>
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