import { StyleSheet } from "react-native";

import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        padding: 20,
    },

    topo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#204181",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E8EDF5",
    },

    avatarText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#204181",
    },

    nome: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#204181",
    },

    badge: {
        marginTop: 6,
        backgroundColor: "#E8EDF5",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        fontSize: 12,
    },

    divisor: {
        height: 1,
        backgroundColor: "#204181",
        opacity: 0.2,
        marginVertical: 20,
    },

    card: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },

    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#204181",
    },

    editar: {
        color: "#F2811D",
        fontWeight: "600",
    },

    bio: {
        fontSize: 14,
        lineHeight: 22,
        color: "#444",
    },

    //
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.primaria,
        marginTop: 25,
        marginBottom: 10,
        },

        vagasContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        },

        vagaCard: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        width: "48%",
        elevation: 2,
        },

        vagaTitulo: {
        fontWeight: "bold",
        color: Colors.primaria,
        marginBottom: 5,
        },

        candidaturasCard: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 15,
        },

        candidaturaLinha: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        },

        avatarEmpresa: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#E8EDF5",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        },

        statusBadge: {
        backgroundColor: "#FFF4D6",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        },

        statusText: {
        fontSize: 12,
        fontWeight: "bold",
        },
        
});