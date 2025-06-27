import React from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";

export function simpleModal({ visible, onClose, children }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    ></Modal>
  );
}
