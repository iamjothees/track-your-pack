import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableHighlight } from 'react-native';

export default function Menu() {
    const [ menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setMenuOpen( prev => !prev );
    };
    return (
        <>
            <TouchableHighlight  onPress={ toggleMenu } >
                <Ionicons name="menu" size={48} color="white"/>
            </TouchableHighlight>
            {
                menuOpen &&
                (<Text style={{  color: 'red'}}> Menu </Text>)
            }
        </>
    )
}
