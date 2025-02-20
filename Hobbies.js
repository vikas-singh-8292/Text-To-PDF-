/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Hobbies = () => {
    return (
        <View>
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
                        borderWidth: 1
                      }}
                    >
                      <Text style={{ fontSize: 16, color: 'grey', fontWeight: '700', elevation: 5 }}>
                        Select Your Gender
                      </Text>
                    </TouchableOpacity>
        </View>
    )
}
export default Hobbies;