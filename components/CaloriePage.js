import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Animated } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const CaloriePage = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Sample data for 1 week of calorie intake
  const calorieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [2000, 2200, 1800, 2400, 2100, 1900, 2300],
      },
    ],
  };

  const handleLogout = () => {
    // Perform logout logic
    // For example, reset isLoggedIn state to false
    navigation.replace('Login');
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Track Every Bit</Text>
        <View style={styles.goalContainer}>
          <Text style={styles.goalTitle}>Calorie Goal: 2800</Text>
          <Text style={styles.goalSubtitle}>Protein, Carb, Fat...</Text>
        </View>
        <LineChart
          data={calorieData}
          width={350} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={500} // optional, adjust based on your data range
          chartConfig={{
            backgroundColor: '#f9f9f9',
            backgroundGradientFrom: '#f9f9f9',
            backgroundGradientTo: '#f9f9f9',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`, // blue color
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // black color
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 20,
            borderRadius: 16,
          }}
        />
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>New Entry</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff', // Change title color
  },
  goalContainer: {
    backgroundColor: '#E3ECFA',
    borderRadius: 10,
    padding: 20, // Increase padding
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  goalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10, // Increase margin bottom
  },
  goalSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CaloriePage;
