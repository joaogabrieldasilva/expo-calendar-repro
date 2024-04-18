import {
  getCalendarPermissionsAsync,
  getCalendarsAsync,
  requestCalendarPermissionsAsync,
} from "expo-calendar";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [calendars, setCalendars] = useState([]);

  const getCalendars = async () => {
    const permission = await requestCalendarPermissionsAsync();

    if (permission.granted) {
      const calendars = await getCalendarsAsync();

      setCalendars(calendars);
    }
  };

  useEffect(() => {
    getCalendars();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={{ marginTop: 50 }}>
        <Text>{JSON.stringify(calendars, undefined, 2)}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
