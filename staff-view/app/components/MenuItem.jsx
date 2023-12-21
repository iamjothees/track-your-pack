import { StyleSheet, Text, View } from "react-native"

export default function MenuItem({label="Hello", style={}, isActive=false}) {
    return (
        <View style={{ ...styles.container, ...(isActive ? styles.activeContainer : {} ), ...style }} >
            <Text style={{ ...styles.container.label, ...(isActive ? styles.activeContainer.label : {} ), ...style }} >{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        label: {
            color: "white",
            fontSize: 18,
        }
    },
    activeContainer: {
        backgroundColor: "white",
        label: {
            color: "black",
        }
    },
});
