import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className=" flex-1 bg-white items-center justify-center">
      <Text className="text-3xl font-pblack text-blue-400">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to profile
      </Link>
    </View>
  );
};

export default index;
