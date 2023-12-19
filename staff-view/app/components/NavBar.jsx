import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Menu from './Menu';

export default function NavBar() {
    return (
        <View>
            <View style={styles.navbar}>
                <Menu />
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
