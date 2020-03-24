import React, { useState } from 'react';
import { Keyboard, Picker, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import firebase from '../../services/fibaseConnection';


import { Container, Input, PickerItem, SubmitButton, SubmitText } from './styles';


export default function New({navigation}){

    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('receita');

    function handleSubmit(){
        Keyboard.dismiss();

        const valorNumerico = parseFloat(valor);

        if(isNaN(valorNumerico)){
            alert("Por favor, digite um valor válido.");
            return ;
        }

        Alert.alert(
            "Confirmar ação",
            `Você informou que possui a ${tipo} no valor de R$ ${valorNumerico}, deseja confirmar?`,
            [
                {
                    text: "Cancelar",
                    style: "cancelar"
                },
                {
                    text: "Confirmar",
                    onPress: () => handleAdd()
                }
            ]
        );      

    }

    async function handleAdd(){
        const history = firebase.database().ref('history');

        let uid = firebase.auth().currentUser.uid;

        let key = history.child(uid).push().key;

        await history.child(uid).child(key).set({
            tipo: tipo,
            valor: parseFloat(valor),
            date: new Date().toLocaleDateString()
        });

        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then((snapshot) => {
            let saldo = parseFloat(snapshot.val().saldo);

            tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

            user.child('saldo').set(saldo);
        });

        setValor('');
        Keyboard.dismiss();
        navigation.navigate('Dashboard');        
    }

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

            <SubmitButton onPress={ handleSubmit }>
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