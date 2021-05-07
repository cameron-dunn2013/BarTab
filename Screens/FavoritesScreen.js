import React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import StandardContainer from '../Components/StandardContainer'
const FavoritesScreen = (props) => {
    return (
        <View style={styles.container}>

            <View style={{ alignSelf: 'stretch' }}>
                <Text style={styles.headerText}>Favorites</Text>
                <Icon style={{ textAlign: 'center' }} size={30} name={'favorite'} />
                <View style={{ height: 10 }} />
                <LinearGradient style={{ zIndex: 5, left: 0, right: 0, bottom: -20, position: 'absolute', height: 20 }} colors={['rgba(255, 255, 255, 0.9)', 'rgba(0, 0, 0, 0)']} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ alignSelf: 'center' }}>
                <View style={{ paddingTop: 20 }} />
                <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Strawberry Daiquiri'} imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }} />
                <View style={{ alignSelf: 'center', flexDirection: 'row', paddingTop: 10 }}>
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Strawberry Daiquiri'} imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }} />
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Whiskey Rocks'} imageSource={{ uri: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb1/h95/11941385535518.png' }} />
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', paddingTop: 10 }}>
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Gin and Tonic'} imageSource={{ uri: 'https://d32miag6ta013h.cloudfront.net/master_cocktails/2922/fr-fr/small/st~germain_g_t.png' }} />
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Martini'} imageSource={{ uri: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Ff5e9fd58-1ce6-11e8-aaca-4574d7dabfb6?fit=scale-down&source=next&width=700' }} />
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', paddingTop: 10 }}>
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Strawberry Daiquiri'} imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }} />
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Whiskey Rocks'} imageSource={{ uri: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb1/h95/11941385535518.png' }} />
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', paddingTop: 10 }}>
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Gin and Tonic'} imageSource={{ uri: 'https://d32miag6ta013h.cloudfront.net/master_cocktails/2922/fr-fr/small/st~germain_g_t.png' }} />
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Martini'} imageSource={{ uri: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Ff5e9fd58-1ce6-11e8-aaca-4574d7dabfb6?fit=scale-down&source=next&width=700' }} />
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', paddingTop: 10 }}>
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Strawberry Daiquiri'} imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }} />
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Whiskey Rocks'} imageSource={{ uri: 'https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb1/h95/11941385535518.png' }} />
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', paddingTop: 10 }}>
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Gin and Tonic'} imageSource={{ uri: 'https://d32miag6ta013h.cloudfront.net/master_cocktails/2922/fr-fr/small/st~germain_g_t.png' }} />
                    <StandardContainer isColoredBG={true} containerPadding={2} drinkName={'Martini'} imageSource={{ uri: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Ff5e9fd58-1ce6-11e8-aaca-4574d7dabfb6?fit=scale-down&source=next&width=700' }} />
                </View>
                <View style={{ paddingBottom: 20 }} />
            </ScrollView>
            <LinearGradient style={{ zIndex: 5, left: 0, right: 0, bottom: -0, position: 'absolute', height: 20 }} colors={['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.9)']} />
            {/* Close Button */}
            <View style={{ justifyContent: 'center', alignContent: 'center', position: 'absolute', left: 20, top: 20, zIndex: 10, backgroundColor: '#ff2a00', height: 30, width: 35, borderRadius: 25 }}>
                <TouchableOpacity onPress={() => props.closeMenuFunction()} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Icon name="close" size={15} style={{ textAlign: 'center', alignSelf: 'center', color: 'white' }} />
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,1)',
        zIndex: 10,
        borderRadius: 20,
        alignItems: 'center',
        overflow: 'hidden'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        color: 'black',
        textAlign: 'center'
    }
})