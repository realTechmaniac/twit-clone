import { View, StyleSheet, Text } from "react-native";

function ProfileScreen() {
  return (
    <View style={styles.root}>
      <Text>Home Screen/Feed</Text>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
