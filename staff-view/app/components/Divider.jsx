import { View } from 'react-native'

export default function Divider( {backgroundColor = 'white'} ) {
    return (
        <View style={{
            width: '100',
            height: 1,
            backgroundColor: backgroundColor,
        }}/>
    )
}
