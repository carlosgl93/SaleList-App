import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Suspense = () => {
  return (
    <View>
      <ActivityIndicator style={Styles.loading} size="large" />
      <Text>Loading, please wait</Text>
    </View>
  );
};

export default Suspense;
