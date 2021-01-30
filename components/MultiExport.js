import React from 'react'
import {Text} from 'react-native'

import defaultStyle from './defaultStyle'

function ComponentExportDefault(){
    return <Text style={defaultStyle.fontM}># Componente exportado por padrão</Text>
}

function ComponentExport1(){
    return <Text style={defaultStyle.fontM}># Componente exportado 01</Text>
}

function ComponentExport2(){
    return <Text style={defaultStyle.fontM}># Componente exportado 02</Text>
}

export { ComponentExport1, ComponentExport2 }

export default ComponentExportDefault