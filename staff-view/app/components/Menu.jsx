import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CloseIcon from './CloseIcon';
import MenuItem from './MenuItem';
import Divider from './Divider';

let ScreenHeight = Dimensions.get("window").height;
export default function Menu() {
    const [ menuOpen, setMenuOpen] = useState(false);
    const [ activeMenuIndex, setActiveMenuIndex] = useState(null);
    const toggleMenu = ()=>{
        setMenuOpen( prev => !prev );
    };
    const handleMenuClose = ()=>{
        setMenuOpen( false );
    };
    const handleItemPress = (index) => {
        setActiveMenuIndex(index);
        handleMenuClose();
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
                            <MenuItem 
                                label={"Current Delivery"} icon={""} isActive={activeMenuIndex === 0} 
                                onPress={ () => handleItemPress(0) }
                            />
                            <MenuItem 
                                label={"Packages"} icon={""} isActive={activeMenuIndex === 1} 
                                onPress={ () => handleItemPress(1) }
                            />
                            <MenuItem 
                                label={"Deliveries"} icon={""} isActive={activeMenuIndex === 2} 
                                onPress={ () => handleItemPress(2) }
                            />
                            <Divider />
                            <MenuItem 
                                label={"Settings"} icon={""} isActive={activeMenuIndex === 3} 
                                onPress={ () => handleItemPress(3) }
                            />
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
