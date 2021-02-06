
import { StyleSheet } from 'react-native'

const defaultFontSize = 20

export default StyleSheet.create({
    fontL: {
        fontSize: defaultFontSize + 5,
        textAlign: "center"
    },
    fontM: {
        fontSize: defaultFontSize,
        textAlign: "center"
    },
    fontS: {
        fontSize: defaultFontSize - 5,
        textAlign: "center"
    }   
})