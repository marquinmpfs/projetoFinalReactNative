import React, { useState } from 'react';
import { Keyboard, Picker } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Input, PickerItem, SubmitButton, SubmitText } from './styles';


export default function New(){

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('receita');

    return(
        <Container>
            <Input 
                placeholder="Valor desejado"
                keyboardType="numeric"
                value={valor}
                onChangeText={ (valor) => setValor(valor)}
                returnKeyType="next"
                onSubmitEditing={() => Keyboard.dismiss()}
            />

            <PickerItem
                selectedValue={tipo}
                onValueChange={ (itemValue, itemIndex) => setTipo(itemValue)}
            >
                <Picker.Item label="Receita" value="receita"/>
                <Picker.Item label="Despesa" value="despesa"/>
            </PickerItem>

            <SubmitButton onPress={ () => {} }>
                <SubmitText>Registrar</SubmitText>
            </SubmitButton>
        </Container>
    )
}

New.navigationOptions = {
    tabBarLabel: 'Registrar',
    tabBarIcon: ({tintColor}) => (
        <Icon name="edit"  size={24} color={tintColor}/>
    )
}