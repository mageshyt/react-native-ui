import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const welcome = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#877dfa]  flex-1">
      <View className="flex-1  justify-around my-4">
        <Text className="text-3xl font-bold text-center text-white">
          Let's Get started
        </Text>
        {/* image */}
        <View className="flex-row justify-center">
          <Image
            className="w-[300px] h-[300px] "
            source={require("../assets/images/welcome.png")}
          />
        </View>

        {/* btn to auth */}
        <View className="space-y-4 ">
          <TouchableOpacity
            onPress={() => router.push("/auth/signup")}
            className="bg-gray-900  mx-7   py-3 rounded-xl"
          >
            <Text className="text-2xl font-bold text-center text-white">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* login */}
          <View className="flex-row items-center space-x-2 justify-center">
            <Text className="  font-semibold text-center text-white">
              Already have an account?
            </Text>

            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text className="text-sm font-bold text-center text-gray-950">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default welcome;
