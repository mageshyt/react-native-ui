import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
const login = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const handleLogin = () => {};
  const handleSocialLogin = () => {};
  return (
    <View className="flex-1 bg-[#877dfa]">
      <SafeAreaView className="flex android:mt-10">
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
            className="w-[180px] h-[180px] "
            source={require("../../assets/images/login.png")}
          />
        </View>
      </SafeAreaView>

      {/* form */}
      <View className="bg-white flex-1 px-8 pt-8  rounded-tl-[50px] rounded-tr-[50px]">
        {/* form */}

        <View className="space-y-3">
          <Text className=" text-lg font-bold text-gray-900">Email</Text>
          <TextInput
            placeholder="Enter your email"
            value="itachi@gmai.com"
            className=" bg-gray-100 text-gray-700  rounded-2xl  p-4"
          />
          {/* password */}
          <Text className=" text-lg font-bold text-gray-900">password</Text>
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
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* social login */}

        <Text className="text-lg my-4 font-bold text-center text-gray-900">
          Or Login with
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
        {/* dont have account */}
        <View className="flex-row mt-4 space-x-2 justify-center">
          <Text className="text-sm  font-bold text-center text-gray-900">
            Don't have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/auth/signup")}>
            <Text className="text-sm font-semibold text-center text-gray-900">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default login;
