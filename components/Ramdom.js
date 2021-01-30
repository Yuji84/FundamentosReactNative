import React from 'react'
import { Text } from 'react-native'

import defaultStyle from './defaultStyle'

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
}

export default ({min, max}) => // Destructuring
    <Text style={defaultStyle.fontL}>
        Um número aletório entre {min} e {max}: {getRandom(min, max)}
    </Text>