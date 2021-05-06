import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Favorites</Text>
            <Icon size={30} name={'favorite-border'} />
        </View>
    );

}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        top: 60,
        bottom: 60,
        right: 20,
        left: 20,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.95)',
        zIndex: 10,
        borderRadius: 40,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        color: 'black'
    }
})