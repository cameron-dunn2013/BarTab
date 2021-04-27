import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import DrinkContainer from './DrinkContainer'
import Icon from 'react-native-vector-icons/MaterialIcons'
const HomeScreen = () => {
    const [isMenuOpen, setMenuStatus] = useState(false);

    const moveAmount = useRef(new Animated.Value(0)).current;


    const xyValues = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const moveAnim = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.spring(moveAmount, {
            toValue: isMenuOpen ? 0 : -75,
            duration: 200,
            useNativeDriver: true
        }).start();
    };

    const moveCornerAmount = useRef(new Animated.Value(0)).current;

    const moveCornerAnim = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.spring(xyValues, {
            toValue: isMenuOpen ? { x: 0, y: 0 } : { x: -57, y: -50 },
            duration: 200,
            useNativeDriver: false
        }).start();
    };


    try {
        const response = changeNavigationBarColor('transparent');
        console.log(response)// {success: true}
    } catch (e) {
        console.log(e)// {success: false}
    }
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.backgroundGradient} colors={['#ff1b6b', '#45caff']} />
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>BarTab</Text>
                <Text style={styles.subHeaderText}>Welcome back, Cameron!</Text>

            </View>
            <View style={{ marginTop: 60, position: 'absolute', top: 70, left: 0, right: 0 }}>
                <View style={{ alignSelf: 'stretch' }}>
                    <Text style={{ paddingLeft: 20, textAlign: 'left', color: 'white', fontWeight: 'bold', fontSize: 16 }}>Recently Ordered:</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ paddingTop: 20 }}>
                        <DrinkContainer drinkName={'Strawberry Daiquiri'} imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }} />
                        <DrinkContainer drinkName={'Whiskey Rocks'} imageSource={{ uri: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb1/h95/11941385535518.png' }} />
                        <DrinkContainer drinkName={'Gin and Tonic'} imageSource={{ uri: 'https://d32miag6ta013h.cloudfront.net/master_cocktails/2922/fr-fr/small/st~germain_g_t.png' }} />
                        <DrinkContainer drinkName={'Martini'} imageSource={{ uri: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Ff5e9fd58-1ce6-11e8-aaca-4574d7dabfb6?fit=scale-down&source=next&width=700' }} />

                    </ScrollView>


                </View>

            </View>
            <TouchableOpacity style={{ zIndex: 2, position: 'absolute', bottom: 25, right: 20, alignContent: 'center', justifyContent: 'center', width: 50, height: 35, borderRadius: isMenuOpen ? 20 : 25, backgroundColor: 'rgba(255,255,255, 1)' }} onPress={() => { moveCornerAnim(); moveAnim(); setMenuStatus(!isMenuOpen) }}>
                <Icon name={isMenuOpen ? "close" : "menu"} size={30} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }} />
            </TouchableOpacity>
            <Animated.View style={{ transform: [{ translateX: moveAmount }], zIndex: 1, position: 'absolute', bottom: 25, right: 20, alignContent: 'center', justifyContent: 'center', width: 50, height: 35, borderRadius: isMenuOpen ? 20 : 25, backgroundColor: 'rgba(255,255,255, 1)' }}>
                <TouchableOpacity style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }}>
                    <Icon name={"favorite-border"} size={30} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[{ transform: xyValues.getTranslateTransform(), position: 'absolute', bottom: 25, right: 20, zIndex: 1, alignContent: 'center', justifyContent: 'center', width: 50, height: 35, borderRadius: isMenuOpen ? 20 : 25, backgroundColor: 'rgba(255,255,255, 1)' }]}>
                <TouchableOpacity style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }}>
                    <Icon name={"lock"} size={30} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{ transform: [{ translateY: moveAmount }], zIndex: 1, position: 'absolute', bottom: 25, right: 20, alignContent: 'center', justifyContent: 'center', width: 50, height: 35, borderRadius: isMenuOpen ? 20 : 25, backgroundColor: 'rgba(255,255,255, 1)' }}>
                <TouchableOpacity style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }}>
                    <Icon name={"shopping-cart"} size={30} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, textAlign: 'center', opacity: 1 }} />
                </TouchableOpacity>
            </Animated.View>
        </View >
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    backgroundGradient: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },
    headerText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    subHeaderText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    headerContainer: {
        top: 40,
        position: 'absolute'
    },
    subText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        textAlign: 'center'
    }
})