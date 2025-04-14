import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button
  } from "react-native";
  import React, { useState } from "react";
  
  const AboutUS = () => {
    const [showText, setShowText] = useState(false);
    const [inputText, setInputText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
  
    return (
      <View style={styles.container}>
        <Button
          title={showText ? "Sembunyikan" : "Tampilkan"}
          onPress={() => setShowText(!showText)}
        />
  
        {showText && <Text style={styles.aboutUS}>About Us</Text>}
        {showText && <Text style={styles.aboutUS}>Krisna Bayu Saputra_2201020028</Text>}
        {showText && <Text style={styles.aboutUS}>Ni Luh Gede Yasningsih_2201020032</Text>}
        {showText && <Text style={styles.aboutUS}>Ni Putu Ayu Sri Laksmi_2201020037</Text>}
        {showText && <Text style={styles.aboutUS}>Luh Komang Sri Siti Sundari_2001020021</Text>}
  
        <TextInput
          style={styles.input}
          placeholder="Masukkan teks..."
          value={inputText}
          onChangeText={setInputText}
        />
  
        <Button
          title="Submit"
          onPress={() => setSubmittedText(inputText)}
        />
  
        {submittedText !== "" && (
          <Text style={styles.resultText}>{submittedText}</Text>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#5F66A4",
      alignItems: "center",
      padding: 20,
    },
    aboutUS: {
      fontSize: 35,
      marginVertical: 10,
      fontWeight: "bold",
    },
    input: {
      width: "80%",
      borderWidth: 1,
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    resultText: {
      fontSize: 30,
      color: "blue",
      marginTop: 10,
    },
  });
  
  export default AboutUS;
  