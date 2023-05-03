import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "./styles"

export const Search = () => {

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="O que vamos buscar?" />
            </View>

        </View>
    )
}