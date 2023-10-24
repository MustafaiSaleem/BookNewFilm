import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { COLORS } from "../../theme/theme";
// import Button from '../components/Button';
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const SignUp = ({ navigation }: any) => {
  // state management
  const [ name , setName ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');
  const [ mobile , setMobile ] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      // requesting permission from the user for the Media Library
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Black }}>
        <View style={{ flex: 1, marginHorizontal: 22, marginVertical: "8%" }}>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.White, // COLORS.black
              }}
            >
              Create Account
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: COLORS.WhiteRGBA75,
              }}
            >
              Connect with your friend today!
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                color: COLORS.WhiteRGBA50,
              }}
            >
              Name
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.WhiteRGBA32,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your Name"
                placeholderTextColor={COLORS.WhiteRGBA50}
                keyboardType="email-address"
                value={name}
                onChangeText={(naam) => setName(naam)}
                style={{
                  width: "100%",
                  color: COLORS.WhiteRGBA75,
                }}
              />
            </View>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                color: COLORS.WhiteRGBA50,
              }}
            >
              Email address
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.WhiteRGBA32,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.WhiteRGBA50}
                keyboardType="email-address"
                style={{
                  width: "100%",
                  color: COLORS.WhiteRGBA75,
                }}
                value={email}
                onChangeText={(mail) => setEmail(mail)}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                color: COLORS.WhiteRGBA75,
              }}
            >
              Mobile Number
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.WhiteRGBA32,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="+91"
                placeholderTextColor={COLORS.WhiteRGBA50}
                keyboardType="numeric"
                style={{
                  width: "12%",
                  borderRightWidth: 1,
                  borderLeftColor: "grey",
                  height: "100%",
                }}
              />

              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={COLORS.WhiteRGBA50}
                keyboardType="numeric"
                style={{
                  width: "80%",
                  color: COLORS.WhiteRGBA75,
                }}
                value={mobile}
                onChangeText={(mob) => setMobile(mob)}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                color: COLORS.WhiteRGBA75,
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.WhiteRGBA32,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.WhiteRGBA50}
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%",
                  color: COLORS.WhiteRGBA75,
                }}
                value={password}
                onChangeText={(pass) => setPassword(pass)}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons
                    name="eye-off"
                    size={24}
                    color={COLORS.WhiteRGBA50}
                  />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.WhiteRGBA50} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                color: COLORS.WhiteRGBA75,
                // textAlign : 'center'
              }}
            >
              Upload Picture
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                // borderColor: COLORS.WhiteRGBA32,
                borderWidth: 1,
                borderRadius: 8,
                // alignItems: "center",
                justifyContent: "center",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Button
                title="Upload Image"
                onPress={() => pickImage()}
                color={COLORS.primary}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
            }}
          >
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#007260" : undefined}
            />

            <Text style={{ color: COLORS.WhiteRGBA75 }}>
              I aggree to the terms and conditions
            </Text>
          </View>

          {/* <Button
            title="Sign Up"
            filled
            style={{
                marginTop: 18,
                marginBottom: 4,
            }}
            /> */}

          {/* Login Button */}
          <View style={styles.loginButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.loginButton}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#CCCCCC",
                marginHorizontal: 10,
              }}
            />
            <Text style={{ fontSize: 14, color: COLORS.WhiteRGBA75 }}>
              Or Sign up with
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#CCCCCC",
                marginHorizontal: 10,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                marginRight: 4,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../../assets/facebook.png")}
                style={{
                  height: 36,
                  width: 36,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />

              <Text
                style={{ color: COLORS.White, fontSize: 16, fontWeight: "600" }}
              >
                Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                marginRight: 4,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../../assets/google.png")}
                style={{
                  height: 36,
                  width: 36,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />

              <Text
                style={{ color: COLORS.White, fontSize: 16, fontWeight: "600" }}
              >
                Google
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text style={{ fontSize: 16, color: COLORS.White }}>
              Already have an account
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#007260",
                  fontWeight: "bold",
                  marginLeft: 6,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  loginButtonContainer: {
    alignItems: "center",
    margin: "5%",
  },
  loginButton: {
    color: "white",
    backgroundColor: "#333",
    padding: "4%",
    borderRadius: 30,
    width: responsiveScreenWidth(40),
    textAlign: "center",
    fontWeight: "700",
  },
});