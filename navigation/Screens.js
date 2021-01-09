import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Notification from "../screens/Notification";
import Settings from "../screens/Settings";
import Tools from "../screens/Tools";
const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

import CustomDrawerContent from './Menu';

function LoginStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen" initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={Login}
                options={({ ...props }) => ({
                    title: 'Login',
                    headerLeft: null
                })}
            />
        </Stack.Navigator>
    )
}
function HomeStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen" initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={({ ...props }) => ({
                    title: 'Home',
                    headerLeft: null
                })}
            />
        </Stack.Navigator>
    );
}
function NotificationStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen" initialRouteName="NotificationScreen">
            <Stack.Screen
                name="NotificationScreen"
                component={Notification}
                options={({ ...props }) => ({
                    title: 'Notification',
                    headerLeft: null
                })}
            />
        </Stack.Navigator>
    );
}
function SettingsStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="screen" initialRouteName={props.route.params.child}>
            <Stack.Screen
                name="SettingsScreen"
                component={Settings}
                options={({ ...props }) => ({
                    title: 'Settings',
                    headerLeft: null
                })}
            />
            <Stack.Screen
                name="ToolsScreen"
                component={Tools}
                options={({ ...props }) => ({
                    title: 'Tools'
                })}
            />
        </Stack.Navigator>
    );
}
function AppStack(props) {
    return (
        <Stack.Navigator
            style={{ flex: 1 }}
            initialRouteName={props.route.params.panelRoots.initialRootNamePanel}
            headerMode="none"
        >
            <Stack.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen
                name="NotificationStack"
                component={NotificationStack}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Stack.Screen
                name="SettingsStack"
                initialParams={{ child: props.route.params.panelRoots.initialRootNameChild }}
                component={SettingsStack}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    )
}

function DrawerStack(props) {
    return (
        <Drawer.Navigator
            style={{ flex: 1 }}
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
                width: width * 0.8
            }}
            options={{
                gestureEnabled: false,
            }}
            initialRouteName="AppStack">
            <Drawer.Screen name="AppStack" component={AppStack} initialParams={{ panelRoots: props.route.params.params.initialRoots }} />
        </Drawer.Navigator>
    )
}

export default function MainStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="none" initialRouteName={props.initialRootNameKey}>
            <Stack.Screen name="DrawerStack"
                options={{
                    gestureEnabled: false,
                }}
                initialParams={{ params: { initialRoots: props } }}
                component={DrawerStack} />
            <Stack.Screen name="LoginStack" component={LoginStack} initialParams="LoginScreen" />
        </Stack.Navigator>
    )
}