import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from './Menu';
import Logo from './Logo';


export default function NavBar({style}) {
    return (
        <View>
            <View style={{...style,...styles.navbar}}>
                <Menu />
                <Logo />
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    navbar: {
        backgroundColor: 'black',
        height: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
});
