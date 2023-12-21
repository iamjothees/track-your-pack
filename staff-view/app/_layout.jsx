import React from 'react'
import NavBar from './components/NavBar'
import { Text, View } from 'react-native'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function Layout(  ) {
    return (
        <SafeAreaView >
            <NavBar />
            <Slot />
        </SafeAreaView>
    )
}
