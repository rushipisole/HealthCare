import React, { useCallback } from "react";
import { Image, View, StyleSheet, BackHandler } from "react-native";
import { Colors } from "../constant/styles";
import { useFocusEffect } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {

    const backAction = () => {
        BackHandler.exitApp();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    setTimeout(() => {
        navigation.push('Welcome')
    }, 2000);

    return (
        <View style={styles.pageStyle}>
            <Image
                source={require('../assets/images/icon.png')}
                style={{ height: 100.0, width: 100.0, borderRadius: 70.0 }}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pageStyle: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SplashScreen;