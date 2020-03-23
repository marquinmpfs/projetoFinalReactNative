import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Preload from './components/Preload'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Sign: createSwitchNavigator({
                Preload,
                SignIn,
                SignUp
            }),
            App: createBottomTabNavigator({
                Dashboard
            })
        },
    ),
);

export default Routes;

