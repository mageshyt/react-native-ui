import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const signup = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const handleLogin = (event: GestureResponderEvent): void => {
    throw new Error("Function not implemented.");
  };

  const handleSocialLogin = (event: GestureResponderEvent): void => {
    throw new Error("Function not implemented.");
  };

  return (
    <View className="flex-1 bg-[#877dfa]">
      <SafeAreaView className="flex">
        {/* back btn */}
        <View className="flex-row justify-start mt-4 ">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" bg-gray-900 rounded-tr-2xl rounded-bl-2xl ml-4  p-2"
          >
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/*  */}
        <View className="flex-row  justify-center">
          <Image
            className="w-[170px] h-[110px] "
            source={require("../../assets/images/signup.png")}
          />
        </View>
      </SafeAreaView>

      {/* form */}
      <View className="bg-white flex-1 px-8 pt-8 rounded-tl-[50px] rounded-tr-[50px]">
        {/* form */}

        <View className="space-y-3">
          {/* First name */}
          <Text className="  font-bold text-gray-900">First Name</Text>
          <TextInput
            placeholder="Enter your email"
            value="itachi"
            className=" bg-gray-100 text-gray-700  rounded-2xl  p-4"
          />

          <Text className="   font-bold text-gray-900">Email</Text>
          <TextInput
            placeholder="Enter your email"
            value="itachi@gmai.com"
            className=" bg-gray-100 text-gray-700  rounded-2xl  p-4"
          />
          {/* password */}
          <Text className="font-bold text-gray-900">password</Text>
          <TextInput
            value="demo@gma"
            placeholder="Enter your password"
            secureTextEntry={true}
            className=" bg-gray-100 text-gray-700  rounded-2xl  p-4"
          />
          {/* forget password */}

          <TouchableOpacity className="items-end mb-4">
            <Text className="text-sm font-bold text-center text-gray-700">
              Forget Password?
            </Text>
          </TouchableOpacity>

          {/* login btn */}

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-gray-900 py-3 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Sing Up
            </Text>
          </TouchableOpacity>
        </View>

        {/* social login */}

        <Text className="text-lg my-4 font-bold text-center text-gray-900">
          Or sing up with
        </Text>

        <View className="flex-row justify-center space-x-4">
          {/* google */}
          <TouchableOpacity
            onPress={handleSocialLogin}
            className="bg-gray-900   p-2 rounded-2xl "
          >
            <Image
              className="w-10 h-10"
              source={require("../../assets/icons/google.png")}
            />
          </TouchableOpacity>

          {/* facebook */}

          <TouchableOpacity
            onPress={handleSocialLogin}
            className="bg-gray-900   p-2 rounded-2xl "
          >
            <Image
              className="w-10 h-10"
              source={require("../../assets/icons/facebook.png")}
            />
          </TouchableOpacity>

          {/* twitter */}

          <TouchableOpacity
            onPress={handleSocialLogin}
            className="bg-gray-900   p-2 rounded-2xl "
          >
            <Image
              className="w-10 h-10"
              source={require("../../assets/icons/google.png")}
            />
          </TouchableOpacity>
        </View>

        <View className="flex-row mt-4 space-x-2 justify-center">
          <Text className="text-sm  font-bold text-center text-gray-900">
            Do you have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text className="text-sm font-semibold text-center text-gray-900">
              login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default signup;
