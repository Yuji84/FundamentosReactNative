import React from 'react'
import { Text } from 'react-native'

import defaultStyle from './defaultStyle'

export default (props) => {

    console.warn(props)

    return (
        <Text style={defaultStyle.fontM}>
            O número {props.max} é maior que {props.min}
        </Text>
    )
}