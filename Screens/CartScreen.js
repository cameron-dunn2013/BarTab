import React from 'react'
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CartListingContainer from '../Components/CartListingContainer'
import LinearGradient from 'react-native-linear-gradient'

const CartScreen = (props) => {
    return (
        <View style={styles.container}>
            {/* Close Button */}
            <View style={{ elevation: 10, justifyContent: 'center', alignContent: 'center', position: 'absolute', left: 20, top: 20, zIndex: 10, backgroundColor: '#ff1b6b', height: 30, width: 35, borderRadius: 25 }}>
                <TouchableOpacity onPress={() => props.closeMenuFunction()} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                    <Icon name="close" size={15} style={{ textAlign: 'center', alignSelf: 'center', color: 'white' }} />
                </TouchableOpacity>
            </View>

            <Icon style={{ paddingTop: 30 }} size={30} name={'shopping-cart'} />
            <Text>My Cart</Text>
            <View>
                <LinearGradient style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 20, zIndex: 100 }} colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View>
                        {/* View containing Scroll View with items */}
                        <View style={styles.itemsContainer}>


                            {/* One example product */}
                            <View style={{ paddingTop: 10 }} />
                            <CartListingContainer imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }}></CartListingContainer>

                            <CartListingContainer imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }}></CartListingContainer>

                            <CartListingContainer imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }}></CartListingContainer>

                            <CartListingContainer imageSource={{ uri: 'https://oskars.ie/wp-content/uploads/frozen-strawberry-daiquiri.png' }}></CartListingContainer>

                            <View style={{ paddingBottom: 10 }} />

                        </View>

                        {/* View containing current location info */}
                        <View style={styles.paymentInfoContainer}>
                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 4 }}>
                                <Icon name='place' size={25} style={{ paddingTop: 2 }} />
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', paddingTop: 2 }}>Current Location</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 20, elevation: 10, marginHorizontal: 10 }}>
                                <View style={{ marginLeft: 20, marginVertical: 10 }}>
                                    <Text>{'720 E Market St.\nLouisville, KY 40202'}</Text>

                                </View>
                                <TouchableOpacity style={{ position: 'absolute', right: 8, marginTop: 15, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 30, shadowRadius: 4, shadowOpacity: 1, elevation: 8, backgroundColor: 'white', alignContent: 'center', justifyContent: 'center' }}>
                                    <View>
                                        <Icon name='arrow-forward-ios' size={20} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* View containing payment info */}
                        <View style={styles.paymentInfoContainer}>
                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 4 }}>
                                <Icon name='credit-card' size={25} style={{ paddingTop: 2 }} />
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', paddingTop: 2 }}>Payment Method</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 20, elevation: 10, marginHorizontal: 10 }}>
                                <View style={{ marginLeft: 20, marginVertical: 10 }}>
                                    <Text>{'MARK ZUCKERBERG\nVisa •6789'}</Text>

                                </View>
                                <TouchableOpacity style={{ position: 'absolute', right: 8, marginTop: 15, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 30, shadowRadius: 4, shadowOpacity: 1, elevation: 8, backgroundColor: 'white', alignContent: 'center', justifyContent: 'center' }}>
                                    <View>
                                        <Icon name='arrow-forward-ios' size={20} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* View containing Order Summary */}
                        <View style={styles.orderSummaryContainer}>
                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 4 }}>
                                <Icon name='local-mall' size={25} style={{ paddingTop: 2 }} />
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', paddingTop: 2 }}>Order Summary</Text>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <View style={{ flexDirection: 'row', marginTop: 8, marginRight: 8, backgroundColor: 'white', borderRadius: 10, paddingVertical: 4, paddingHorizontal: 8 }}>
                                    <Text>{'•4x Strawberry Daiquiri'}</Text>
                                    <Text style={{ textAlign: 'right', flex: 1 }}>{'$23.96'}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 8, marginRight: 8 }}>
                                    <Text>{'Subtotal'}</Text>
                                    <Text style={{ textAlign: 'right', flex: 1, marginRight: 8 }}>{'$23.96'}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: 8 }}>
                                    <Text>{'Tax'}</Text>
                                    <Text style={{ textAlign: 'right', flex: 1, marginRight: 8 }}>{'$1.44'}</Text>
                                </View>

                                {/* Total */}
                                <View style={{ flexDirection: 'row', marginVertical: 8, marginRight: 8 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{'Total'}</Text>
                                    <Text style={{ fontWeight: 'bold', textAlign: 'right', flex: 1, marginRight: 8 }}>{'$25.40'}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Button */}
                        <TouchableOpacity style={{ marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', height: 45, left: 0, right: 0, marginTop: 20, shadowRadius: 4, shadowOpacity: 1, elevation: 5 }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ borderRadius: 20, top: 0, left: 0, bottom: 0, right: 0, position: 'absolute' }} colors={['#ff1b6b', '#45caff']} />
                            <Text style={{ alignSelf: 'center', textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>Confirm Purchase</Text>
                        </TouchableOpacity>

                        {/* View to add spacing between final component and bottom of page */}
                        <View style={{ height: 100 }} />

                    </View>
                </ScrollView>
            </View>

        </View >
    );

}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,1)',
        zIndex: 100,
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
    },
    itemsContainer: {
        backgroundColor: 'rgba(0,0,0,0.07)',
        width: Dimensions.get('window').width * 0.85,
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden'
    },
    paymentInfoContainer: {
        backgroundColor: 'rgba(0,0,0,0.07)',
        height: Dimensions.get('window').height * 0.125,
        width: Dimensions.get('window').width * 0.85,
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },
    orderSummaryContainer: {
        backgroundColor: 'rgba(0,0,0,0.07)',
        minHeight: Dimensions.get('window').height * 0.125,
        width: Dimensions.get('window').width * 0.85,
        marginTop: 10,
        borderRadius: 20,
        overflow: 'hidden'

    }
})