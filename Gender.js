import React, { useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Gender = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const selectOption = (status) => {
    setSelectedStatus(status);
    setModalVisible(false);
  };
  const maritalStatusOptions = ['Male', 'Female', 'Oters'];
  return (
    <View style={{
      flex: 1,
      marginTop: 20,
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',
    }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          marginBottom: 20,
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{
          fontSize: 16,
          color: 'grey',
          fontWeight: '700',
        }}>
          {selectedStatus || 'Select Gender'}
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 20,
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>Select Marital Status</Text>
            <FlatList
              data={maritalStatusOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    padding: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    width: '100%',
                  }}
                  onPress={() => selectOption(item)}
                >
                  <Text style={{
                    fontSize: 16,
                    color: 'black',
                  }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: '#007BFF',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
              }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Gender;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f2f2f2',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'grey',
//     fontWeight: '700',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   option: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     width: '100%',
//   },
//   optionText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   closeButton: {
//     marginTop: 20,
//     backgroundColor: '#007BFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });