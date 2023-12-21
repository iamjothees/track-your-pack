import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, View } from "react-native";

export default function CloseIcon({onPress, style={}}) {
    return (
        <View style={style}>
            <TouchableHighlight  onPress={ onPress } >
                <Ionicons name="close" size={38} color="white"/>
            </TouchableHighlight>
        </View>
    )
}
