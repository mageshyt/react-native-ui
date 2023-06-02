import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <Stack.Screen options={{ headerShown: false }} />

      {/* animated btn */}

      <TouchableOpacity
        onPress={() => router.push("/welcome")}
        className="bg-gray-900 w-[190px]  p-3 rounded-xl "
      >
        <Text className="text-2xl font-bold text-center text-blue-400">
          welcome
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;
