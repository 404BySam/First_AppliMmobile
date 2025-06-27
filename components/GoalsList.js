import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";

export default function GoalsList({ data, setGoals }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState();

  function suppGoal(indexASupprimer) {
    const nouveauxObjectifs = [];
    for (let i = 0; i < data.length; i++) {
      if (i !== indexASupprimer) {
        nouveauxObjectifs.push(data[i]);
      }
    }
    setGoals(nouveauxObjectifs);
  }

  // Fonction qui affiche chaque ligne (impératif, pas de fonction fléchée)
  function afficherLigne({ item, index }) {
    setIndex(index);
    return (
      <View style={styles.ligne}>
        <Text style={styles.text}>• {item}</Text>
        <TouchableOpacity
          onPress={function () {
            suppGoal(index);
          }}
          style={styles.boutonSupprimer}
        >
          <Text style={{ color: "white" }}>Supprimer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.boutonSupprimer}
        >
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Êtes vous sur de vouloir modifier ?
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Oui</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Retour</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={{ color: "blue" }}>Modifier</Text>
        </TouchableOpacity>
      </View>
    );
    // // Fonction pour donner une clé unique à chaque ligne
    // function cleLigne(index) {
    //   return index.toString();
    // }
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={afficherLigne}
    />
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
