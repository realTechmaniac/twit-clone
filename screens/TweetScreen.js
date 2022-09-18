import { View, StyleSheet, Text } from "react-native";

function TweetScreen() {
  return (
    <View style={styles.root}>
      <Text>Tweet Screen</Text>
    </View>
  );
}

export default TweetScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
