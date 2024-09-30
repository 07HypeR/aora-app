import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { router } from "expo-router";
import BookmarkButton from "../../components/BookmarkButton";

const Bookmark = () => {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <View className="my-6 px-4 space-y-6 ">
        <View className="flex-row justify-between items-center mb-6">
          <View className="mt-3">
            <Text className="text-2xl font-psemibold text-white">Bookmark</Text>
          </View>
          <View className="mt-1.5">
            <TouchableOpacity onPress={() => router.replace(`/home`)}>
              <Image
                source={images.logoSmall}
                className="w-9 h-10"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        ListEmptyComponent={() => (
          <BookmarkButton
            title="No Saved Videos Found"
            subtitle="Save Your Favorite Videos"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
