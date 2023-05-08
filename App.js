import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native'
import { cats } from './breeds'
import Item from './Item'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native'




export default function App() {
  return (
    <SafeAreaView>
      <FlatList
        data={cats}
        renderItem={({ item, index }) => {
          return <Item title={`${index}. ${item.breed}`} />
        }}
        keyExtractor={item => item.breed}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
