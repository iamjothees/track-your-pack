import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Package from './components/Package';
import { FlashList } from "@shopify/flash-list";

export default function Packages() {

    const [packs, setPacks] = useState([]);

    return (
        <View>
            <PaginatedFlashList module={'packages'}/>
        </View>
    )
}
