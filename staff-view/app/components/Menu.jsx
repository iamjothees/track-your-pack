import React, { useState } from 'react';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import CloseIcon from './CloseIcon';
import MenuItem from './MenuItem';
import Divider from './Divider';

let ScreenHeight = Dimensions.get("window").height;
export default function Menu() {
    const [ menuOpen, setMenuOpen] = useState(false);
    const [ activeMenuSlug, setActiveMenuSlug] = useState(null);
    const toggleMenu = ()=>{
        setMenuOpen( prev => !prev );
    };
    const handleMenuClose = ()=>{
        setMenuOpen( false );
    };
    const handleItemPress = (slug) => {
        setActiveMenuSlug(slug);
        handleMenuClose();
        router.replace(`/${slug}`);
    };
    return (
        <>
            <TouchableHighlight  onPress={ toggleMenu } >
                <Ionicons name="menu" size={48} color="white"/>
            </TouchableHighlight>
            {
                menuOpen &&
                (
                    <>
                    <View style={styles.sidebarBackdrop}></View>
                    <View style={styles.sidebar}>
                        <CloseIcon  onPress={handleMenuClose} style={styles.closeIcon}/>
                        <View style={styles.menuItems}>
                            <MenuItem 
                                label={"Current Delivery"} icon={""} isActive={activeMenuSlug === 'currentDelivery'} 
                                onPress={ () => handleItemPress('currentDelivery') }
                            />
                            <MenuItem 
                                label={"Packages"} icon={""} isActive={activeMenuSlug === 'packages'} 
                                onPress={ () => handleItemPress('packages') }
                            />
                            <MenuItem 
                                label={"Deliveries"} icon={""} isActive={activeMenuSlug === 'deliveries'} 
                                onPress={ () => handleItemPress('deliveries') }
                            />
                            <Divider />
                            <MenuItem 
                                label={"Settings"} icon={""} isActive={activeMenuSlug === 'settings'} 
                                onPress={ () => handleItemPress('settings') }
                            />
                        </View>
                    </View>
                    </>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    sidebarBackdrop:{
        width: "100%",
        height: ScreenHeight,
        backgroundColor: "rgba(0, 0, 0, 0.38)",
        position: 'absolute',
        top:0,
        left: 10,
        zIndex: 10,
    },
    sidebar:{
        width: "70%",
        height: ScreenHeight,
        backgroundColor: "black",
        color:"red",
        position: 'absolute',
        top:0,
        left: 0,
        borderRightWidth: 1,
        borderRightColor: 'white',
        zIndex: 20,
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
