import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import firebase from '../../services/fibaseConnection';

export default function Dashboard({navigation}){
    return(
        <View>
            <Text>DASHBOARD.</Text>
            <TouchableOpacity onPress={() => {firebase.auth().signOut()}}> 
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (
        <Icon name="equalizer"  size={24} color={tintColor}/>
    )
}