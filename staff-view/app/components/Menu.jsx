import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CloseIcon from './CloseIcon';
import MenuItem from './MenuItem';

let ScreenHeight = Dimensions.get("window").height;
export default function Menu() {
    const [ menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setMenuOpen( prev => !prev );
    };
    const handleMenuClose = ()=>{
        setMenuOpen( false );
    };
    return (
        <>
            <TouchableHighlight  onPress={ toggleMenu } >
                <Ionicons name="menu" size={48} color="white"/>
            </TouchableHighlight>
            {
                menuOpen &&
                (
                    <View style={styles.sidebar}>
                        <CloseIcon  onPress={handleMenuClose} style={styles.closeIcon}/>
                        <View style={styles.menuItems}>
                            <MenuItem label={"Settings"} icon={""} />
                            <MenuItem label={"Settings"} icon={""} isActive={true} />
                            <MenuItem label={"Settings"} icon={""} />
                            <Divider />
                        </View>
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    sidebar:{
        width: "70%",
        height: ScreenHeight,
        backgroundColor: "black",
        color:"red",
        position: 'absolute',
        top:0,
        left: 0,
    },
    closeIcon:{
        position:'absolute',
        top: 20,
        right: 10,
    },
    menuItems:{
        paddingHorizontal: 10,
        top: 80,
        gap:15,
    }
});
