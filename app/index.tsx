import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showText}>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.checkbox}
          >
            <Text style={{ fontSize: 18, color: "#fff" }}>
              {rememberMe ? "☑" : "☐"}
            </Text>
          </TouchableOpacity>
          <Text style={styles.optionText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Sign in with</Text>

      <View style={styles.socialIcons}>
        <Image
          source={{ uri: "https://img.icons8.com/color/48/facebook-new.png" }}
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://img.icons8.com/color/48/twitter--v1.png" }}
          style={styles.icon}
        />
        <Image
          source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
          style={styles.icon}
        />
        <Image
          source={{
            uri: "https://img.icons8.com/color/48/instagram-new.png",
          }}
          style={styles.icon}
        />
      </View>

      <Text style={styles.bottomText}>
        Don't have an account?{" "}
        <Text style={styles.signUp} onPress={() => router.push('/sing_up')}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5F66A4",
    padding: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF3D71",
    borderRadius: 30,
    paddingHorizontal: 20,
    color: "#fff",
    marginBottom: 15,
    height: 50,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  showText: {
    color: "#FF3D71",
    marginLeft: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 5,
  },
  optionText: {
    color: "#fff",
  },
  forgotText: {
    color: "#FF3D71",
  },
  loginButton: {
    backgroundColor: "#FF3D71",
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#999",
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
  },
  bottomText: {
    textAlign: "center",
    color: "#999",
  },
  signUp: {
    color: "#FF3D71",
    fontWeight: "bold",
  },
});
