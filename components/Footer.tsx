import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import SvgXml from "react-native-svg";
import FacebookPNG from "../assets/images/facebook.png";
import TwitterPNG from "../assets/images/twitter.png";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ color: "#fff" }}>Anasayfa</Text>
        <Text style={{ color: "#fff" }}> | </Text>
        <Text style={{ color: "#fff" }}>Kullanıcı Sözleşmesi</Text>
        <Text style={{ color: "#fff" }}> | </Text>
        <Text style={{ color: "#fff" }}>Gizlilik Sözleşimesi</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity style={{ color: "#fff" }}>
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
    // Add any additional styling you want for the footer
  },
  socialPNG: {
    width: 30,
    height: 30,
  },
});
