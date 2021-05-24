import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PaymentIcon from 'react-native-ico-payment-method';
import BackgroundDark from '../Assets/Background_dark.jpg'




const ChangePaymentMethodScreen = ({ navigation, cartNavigation }) => {

    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            {/* Close Button */}
            <View style={{ elevation: 10, justifyContent: 'center', alignContent: 'center', position: 'absolute', left: 20, top: 20, zIndex: 10, backgroundColor: 'rgba(255,255,255,1)', height: 30, width: 35, borderRadius: 25 }}>
                <TouchableOpacity onPress={(props) => navigation.pop()} style={{ elevation: 5, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Icon name="arrow-back" size={15} style={{ textAlign: 'center', alignSelf: 'center', color: 'black' }} />
                </TouchableOpacity>
            </View>
            <ImageBackground source={BackgroundDark} style={{ height: screenHeight, width: screenWidth * 0.9, bottom: 0, left: 0, right: 0, alignContent: 'center' }}>
                <View style={{ justifyContent: 'center', alignSelf: 'stretch', marginTop: 30 }}>
                    <Icon size={30} name={'credit-card'} style={{ textAlign: 'center', color: 'white' }} />
                    <Text style={{ textAlign: 'center', color: 'white' }}>{'Change Payment Method'}</Text>

                    <View style={{ overflow: 'hidden', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgba(255,255,255,0.5)', height: screenHeight * 0.825, width: screenWidth * 0.8, borderRadius: 20 }} >
                        <ScrollView showsVerticalScrollIndicator={false} style={{ alignSelf: 'stretch' }}>
                            <CardContainer cardType={'mastercard-1'} cardHolderName={'Mark Suckerberg'} cardNumber={'6789'} cardExpiration={'04/20'} />
                            <CardContainer cardType={'visa'} cardHolderName={'Mark Suckerberg'} cardNumber={'6789'} cardExpiration={'04/20'} />
                            <CardContainer cardType={'american-express'} cardHolderName={'Mark Suckerberg'} cardNumber={'6789'} cardExpiration={'04/20'} />

                            <View style={styles.addPaymentMethodContainer}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={styles.spacer} />
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
                                    <TouchableOpacity style={{ elevation: 5, backgroundColor: 'rgba(201,201,201,1)', borderRadius: 20, paddingHorizontal: 10 }}>
                                        <Icon name={'add'} size={40} style={{ width: 100, color: 'white', textAlign: 'center', paddingTop: 10 }} />
                                        <Text style={{ width: 100, color: 'white', textAlign: 'center', paddingBottom: 10 }}>{'New Payment\nMethod'}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.spacer} />
                                    <View style={styles.spacer} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const CardContainer = (props) => {
    return (
        <View style={styles.paymentMethodContainer}>
            <View style={{ flexDirection: 'row' }}>
                <PaymentIcon name={props.cardType} width='90' height='70' style={{ marginTop: -10, flex: 1 }} />
                <Icon name='more-vert' size={25} style={{ position: 'absolute', right: 10, top: 10 }} />
            </View>
            <Text style={{ paddingLeft: 10, fontSize: 18, marginTop: 10 }}>{'•••• •••• •••• ' + props.cardNumber}</Text>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, alignSelf: 'stretch', marginHorizontal: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text>CARD HOLDER</Text>
                    <Text>{props.cardHolderName}</Text>
                </View>
                <View >
                    <Text style={{ textAlign: 'right' }}>Expires</Text>
                    <Text style={{ textAlign: 'right' }}>{props.cardExpiration}</Text>
                </View>
            </View>
        </View>
    )
}

export default ChangePaymentMethodScreen;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'white',
        zIndex: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    paymentMethodContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 5
    },
    addPaymentMethodContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        height: 160,
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 20,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 2
    },
    spacer: {
        flex: 1
    }
})