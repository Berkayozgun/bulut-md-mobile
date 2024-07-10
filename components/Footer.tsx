import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SvgXml from "react-native-svg";
import FacebookPNG from "../assets/images/facebook.png";
import TwitterPNG from "../assets/images/twitter.png";

// Footer component
export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.textContainer}>
        <Text style={{ color: "#fff" }}>Anasayfa</Text>
        <Text style={{ color: "#fff" }}> | </Text>
        <Text style={{ color: "#fff" }}>Kullanıcı Sözleşmesi</Text>
        <Text style={{ color: "#fff" }}> | </Text>
        <Text style={{ color: "#fff" }}>Gizlilik Sözleşimesi</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Image
            style={styles.socialPNG}
            source={FacebookPNG}
            width='100'
            height='100'
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ color: "#fff" }}>
          <Image
            style={styles.socialPNG}
            source={TwitterPNG}
            width='100'
            height='100'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Style definitions for the footer
const styles = StyleSheet.create({
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#000",
    textColor: "#fff",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footerText: {
    color: "#fff",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    color: "#fff",
  },
  socialPNG: {
    width: 30,
    height: 30,
  },
});
