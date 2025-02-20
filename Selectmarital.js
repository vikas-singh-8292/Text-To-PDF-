import React, { useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'



const Selectmarital = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');
    const selectOption = (status) => {
        setSelectedStatus(status);
        setModalVisible(false);
    };
    const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
    return (
        <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                 >
                    <Text style={styles.buttonText}>
                      {selectedStatus || 'Select Marital Status'}
                    </Text>
                  </TouchableOpacity>
        
                  <TextInput
                    style={styles.input}
                    value={selectedStatus}
                    placeholder="Your marital status will appear here"
                    editable={false}
                  />
                  {/* Modal */}
                  <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                  >
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Marital Status</Text>
                        <FlatList
                          data={maritalStatusOptions}
                          keyExtractor={(item) => item}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              style={styles.option}
                              onPress={() => selectOption(item)}
                            >
                              <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                          )}
                        />
                        <TouchableOpacity
                          style={styles.closeButton}
                          onPress={() => setModalVisible(false)}>
                          <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </View>
    )
}
export default Selectmarital;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  button: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});