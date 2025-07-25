import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import GoalsList from "./GoalsList";

export function Goals() {
  const [goals, setGoals] = useState([
    "Faires les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  // Etat pour stocker ce que l'utilisateur tape dans l'input
  const [input, setInput] = useState("");

  // Fonction pour ajouter un objectif
  function ajouterGoal() {
    if (input.trim() !== "") {
      // On ajoute le nouvel objectif à la liste
      setGoals([...goals, input]);
      // On vide le champ de saisie
      setInput("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Mes objectifs</Text>
      <GoalsList data={goals} setGoals={setGoals} />
      <StatusBar style="auto" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Écris ici"
          value={input}
          onChangeText={setInput}
        />
        <Button title="Ajouter" onPress={ajouterGoal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  titre: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#224488",
    marginTop: 30,
    marginBottom: 18,
    letterSpacing: 1,
  },
  ligne: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: 400,
    shadowColor: "#000", // ombre sur iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  text: {
    color: "#224488",
    fontSize: 17,
    flex: 1,
  },
  boutonSupprimer: {
    backgroundColor: "#ff5252",
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 13,
    marginLeft: 12,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
    width: 340,
    marginBottom: 50,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#c2c2c2",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 13,
    fontSize: 16,
    marginRight: 10,
    elevation: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1c3d5a",
    marginBottom: 20,
    textAlign: "center",
  },
  color: "#fff",
  fontWeight: "bold",
  textAlign: "center",
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 6,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#0077cc",
  },
});
