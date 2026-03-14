import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
    name: keyof typeof MaterialIcons.glyphMap;
    isActive?: boolean; 
}

export function BotoesIcones({ name, isActive, style, ...rest }: Props) {      
    return (
        <TouchableOpacity
            style={[styles.button, isActive ? styles.active : styles.inactive, style]}
            {...rest}
        >
            <MaterialIcons 
                name={name} 
                size={28} 
               
                color={isActive ? Colors.fundoSuave :Colors.escura} 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    inactive: {
        backgroundColor: Colors.fundoSuave, 
    },
    active: {
        backgroundColor: Colors.destaque, 
    }
});