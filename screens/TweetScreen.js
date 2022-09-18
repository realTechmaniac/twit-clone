import { View, StyleSheet, Text, Image, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

function TweetScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View>
            <Text style={styles.tweetName}>Master Togan</Text>
            <Text style={styles.tweetHandle}>@getRealdude</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContentBox}>
        <Text style={styles.tweetContent}>
          payment page so you can quickly collect payments on desktop and mobile
          devices. Checkout supports one-time payments and subscriptions for
          your global customer base with coverage across over twenty local arena
        </Text>
      </View>
      <View style={styles.tweetEngagement}>
        <View style={styles.flexRow}>
          <Text style={styles.tweetCount}>628</Text>
          <Text style={styles.tweetText}>Retweets</Text>
        </View>
        <View style={[styles.flexRow, styles.marginUtility]}>
          <Text style={styles.tweetCount}>38</Text>
          <Text style={styles.tweetText}>Quote Retweets</Text>
        </View>
        <View style={[styles.flexRow, styles.marginUtility]}>
          <Text style={styles.tweetCount}>2,934</Text>
          <Text style={styles.tweetText}>Likes</Text>
        </View>
      </View>
      <View style={[styles.tweetEngagement, styles.spaceAround]}>
        <TouchableOpacity>
          <EvilIcons name="comment" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="retweet" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="heart" size={32} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons
            name={Platform.OS === "android" ? "share-google" : "share-apple"}
            size={32}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  marginUtility: {
    marginLeft: 16,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  avatar: {
    height: 45,
    width: 45,
    marginRight: 8,
    borderRadius: 21,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    color: "gray",
    marginTop: 4,
  },
  tweetContentBox: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingTop: 10,
  },
  tweetContent: {
    lineHeight: 30,
    fontSize: 20,
    textAlign: "justify",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  tweetText: {
    color: "gray",
  },
  tweetCount: {
    fontWeight: "bold",
    marginRight: 5,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
});
