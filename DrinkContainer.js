import React from 'react'
import { View, Image, Text } from 'react-native'

const DrinkContainer = (props) => {
    return (
        <View>
            <Image source={{ uri: props.imageSource }} style={{ resizeMode: 'contain', height: 200, width: 150 }} />
        </View>
    );
}

export default DrinkContainer;