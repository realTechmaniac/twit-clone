import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { DATA } from "../data/tweets";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function HomeScreen({ navigation }) {
  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToTweetScreen = () => {
    navigation.navigate("Tweet");
  };

  const goToNewTweet = () => {
    navigation.navigate("New Tweet");
  };
  const renderItemHandler = ({ item }) => {
    return (
      <View style={styles.tweetContainer}>
        <TouchableOpacity onPress={() => goToTweetScreen()}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.flexRow}
            onPress={() => goToTweetScreen()}
          >
            <Text numberOfLines={1} style={styles.tweetName}>
              {item.title}
            </Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>
              @Aboki4code
            </Text>
            <Text>&middot;</Text>
            <Text numberOfLines={1} style={styles.tweetHandle}>
              9m
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.alignment}>
              Used to truncate the text with an ellipsis after computing the
              text layout, including line wrapping, such that the total number
              of lines does not exceed this number.
            </Text>
          </TouchableOpacity>
          <View style={styles.tweetEngagement}>
            <TouchableOpacity style={styles.flexRow}>
              <EvilIcons
                name="comment"
                size={24}
                color="gray"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.textGray}>34</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flexRow, styles.spaceRight]}>
              <EvilIcons
                name="retweet"
                size={24}
                color="gray"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.textGray}>594</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flexRow, styles.spaceRight]}>
              <EvilIcons
                name="heart"
                size={24}
                color="gray"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.textGray}>400</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.flexRow, styles.spaceRight]}>
              <EvilIcons
                name={
                  Platform.OS === "android" ? "share-google" : "share-apple"
                }
                size={24}
                color="gray"
                style={{ marginRight: 4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItemHandler}
        ItemSeparatorComponent={() => (
          <View style={styles.tweetSeperator}></View>
        )}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => goToNewTweet()}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  flexRow: {
    flexDirection: "row",
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    marginHorizontal: 8,
    color: "gray",
  },
  tweetContentContainer: {
    lineHeight: 22,
  },
  tweetContent: {
    marginTop: 4,
  },
  alignment: {
    textAlign: "justify",
    color: "black",
    fontWeight: "450",
  },
  textGray: {
    color: "gray",
  },
  tweetEngagement: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  spaceRight: {
    marginLeft: 16,
  },
  tweetSeperator: {
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d9bf1",
    position: "absolute",
    bottom: 20,
    right: 12,
  },
});
