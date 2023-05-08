import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native'
import { cats } from './breeds'
import Item from './Item'
import { SafeAreaView } from 'react-native'


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {cats.map((item, index) => {
          return <Item title={`${index}. ${item.breed}`} />
        })}
      </ScrollView>
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
