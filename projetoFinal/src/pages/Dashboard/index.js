import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

import firebase from '../../services/fibaseConnection';

export default function Dashboard(){
    return(
        <View>
            <Text>DASHBOARD.</Text>
            <TouchableOpacity onPress={() => {firebase.auth().signOut()}}> 
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}