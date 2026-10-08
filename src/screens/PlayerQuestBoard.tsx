import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";

export function PlayerQuestBoard() {
    return(
        <View style={styles.background}>
            <Text>Mural de Missões</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: #0883ff,
    },
})