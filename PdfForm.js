/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';

import {
    Text,
    View,
    Modal,
    TouchableOpacity,
    TextInput,
    Linking,
    ScrollView,
    FlatList,
} from 'react-native';
import reactNativeHTMLToPdf from 'react-native-html-to-pdf';
import FileViewer from 'react-native-file-viewer';
import { launchImageLibrary } from 'react-native-image-picker';// Install this library for viewing files
import DateTimePickerModal from "react-native-modal-datetime-picker";

const PdfForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [education, setEducation] = useState('');
    const [address, setAddress] = useState('');
    const [pdfPath, setPdfPath] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectdate, setSelectdate] = useState('');
    const [modalVisible1, setModalVisible1] = useState(false);
        const [selectedStatus, setSelectedStatus] = useState('');
        const selectOption = (status) => {
            setSelectedStatus(status);
            setModalVisible1(false);
        };
    const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const formattedDate = `${dt.getDate().toString().padStart(2, '0')}/${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getFullYear()}`;
        setSelectdate(formattedDate);
        hideDatePicker();
    };






    const generate = async () => {
        const imageTag = profilePhoto
            ? `<img src="${profilePhoto}" alt="Profile Photo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid #02005c; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); margin-bottom: 15px; margin-top: -150px; margin-left: 20px;">`
            : '';

        const options = {
            html: `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Resume</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #e0e0e0;
        }

        .resume-container {
            max-width: 900px;
            margin: 30px auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            color: #333;
        }

        .header {
            text-align: center;
            justify-content: center;
            margin-bottom: 30px;
            background-color: #02005c;
            height: 180px;
            align-items: center;
        }

        .header h1 {
            margin: 0;
            font-size: 32px;
            color: #fff;
        }

        .header p {
            margin: 5px 0;
            font-size: 18px;
            color: white;
            margin-top: 20px;
        }

        .section {
            margin-bottom: 20px;
        }

        .section-title {
            font-size: 17px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
            padding-bottom: 5px;
            background-color: #02005c;
            height: 30px;
        }

        .section-content p {
            margin: 8px 0;
            line-height: 1.6;
        }

        ul {
            padding-left: 20px;
            list-style: disc;
        }

        ul li {
            margin-bottom: 5px;
        }

        .personal-info span {
            font-weight: bold;
            color: #333;
        }
    </style>
</head>

<body>
    <div class="resume-container">
        <div class="header">
            <h1>${name}</h1>
            <p>Dedicated Software Engineer</p>
        </div>
        ${imageTag}
        <div style="flex-direction: row;
        display: flex;
        ">
            <div style="width: 45%;
            margin-right: 20px;
            margin-left: 60px;">
                <div class="section personal-info">
                    <div class="section-title">Personal Information</div>
                    <div class="section-content">
                        <p><span>Email:</span>${email} </p>
                        <p><span>Phone:</span> ${number}</p>
                        <p><span>Address:</span>${address} </p>
                        <p><span>Date of Birth:</span> ${selectdate}</p>
                        <p><span>Marital Status:</span> ${selectedStatus}</p>
                        <p><span>Hobbies:</span> Reading, Traveling</p>
                    </div>
                </div>

                <div class="section personal-summary">
                    <div class="section-title">Personal Summary</div>
                    <div class="section-content">
                        <p>A dedicated software engineer with experience in various domains.</p>
                    </div>
                </div>
                <div class="section language">
                    <div class="section-title">Language Known</div>
                    <div class="section-content">
                        <p>English</p>
                        <p>Hindi</p>
                    </div>
                </div>
            </div>
            <div style="
            margin-right: 120px;">
                <div class="section education">
                    <div class="section-title">Education</div>
                    <div class="section-content">
                        <p>${education}</p>
                    </div>
                </div>

                <div class="section experience">
                    <div class="section-title">Work Experience</div>
                    <div class="section-content">
                        <ul>
                            <li>Samar Enterprise - Software Engineer</li>
                            <li>Company A - Junior Developer</li>
                        </ul>
                    </div>
                </div>

                <div class="section skills">
                    <div class="section-title">Personal Skills</div>
                    <div class="section-content">
                        <p>Programming, Design</p>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;
        height: 40px;
        background-color: #02005c;
        margin-top: 20%;">

        </div>
    </div>
</body>

</html>
      `  ,
            fileName: 'Resume_Styled',
            directory: 'Documents',
        };


        try {
            const file = await reactNativeHTMLToPdf.convert(options);
            setPdfPath(file.filePath);
            setModalVisible(true);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };
    const openPdf = () => {
        setModalVisible(false);
        if (pdfPath) {
            FileViewer.open(pdfPath)
                .then(() => {
                    console.log('PDF opened successfully');
                })
                .catch((error) => {
                    console.error('Error opening PDF:', error);
                    Linking.openURL(pdfPath);
                });
        }
    };
    const selectProfilePhoto = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (response.assets && response.assets.length > 0) {
                setProfilePhoto(response.assets[0].uri);
            }
        });
    };
    return (
        <View style={{flex: 1 }}>
            <View style={{backgroundColor:'#fff',width:'100%',height:60,alignItems:'center',justifyContent:'center',elevation:5}}>
                <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: '600' }}>Make Resume PDF</Text>
            </View>
            <ScrollView style={{ width: '100%' ,padding:20}}>
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#f9f9f9',
                    }}
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={setName}
                    multiline
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#f9f9f9',
                    }}
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={setEmail}
                    multiline
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#f9f9f9',
                    }}
                    placeholder="Enter Your Number"
                    value={number}
                    onChangeText={setNumber}
                    multiline
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#f9f9f9',
                    }}
                    placeholder="Enter Your Education"
                    value={education}
                    onChangeText={setEducation}
                    multiline
                />
                <TextInput
                    style={{
                        width: '100%',
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#f9f9f9',
                    }}
                    placeholder="Enter Your Address"
                    value={address}
                    onChangeText={setAddress}
                    multiline
                />
                <TouchableOpacity style={{ width: '100%', height: 50, backgroundColor: '#fff', flexDirection: 'row', borderWidth: 1, borderRadius: 10,marginBottom:20 }} onPress={showDatePicker}>
                    <Text style={{ width: '83%', fontSize: 15, marginTop: 12, marginLeft: '5%', fontFamily: 'InterMedium' }}>{selectdate ? `Your Birthdate : ${selectdate}` : "Select Your Birthday" }</Text>
                </TouchableOpacity>
                <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
                <View style={{
                      flex: 1,
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
                          
                          borderWidth: 1,
                        }}
                        onPress={() => setModalVisible1(true)}
                      >
                        <Text style={{
                          fontSize: 15,
                          color: 'grey',
                          
                        }}>
                          {selectedStatus || 'Select Marital'}
                        </Text>
                      </TouchableOpacity>
                
                      {/* Modal */}
                      <Modal
                        transparent={true}
                        visible={modalVisible1}
                        animationType="slide"
                        onRequestClose={() => setModalVisible1(false)}
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
                              onPress={() => setModalVisible1(false)}
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

                <TouchableOpacity
                    style={{
                        width: '100%',
                        height: 50,
                        marginBottom: 20,
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: 'green',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={selectProfilePhoto}
                >
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700', elevation: 5 }}>
                        Select Profile Photo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: '100%',
                    height: 50,
                    marginBottom: 20,
                    padding: 10,
                    borderRadius: 10,
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={generate}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700', elevation: 5 }}>Generate PDF</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                        <View style={{
                            width: '80%',
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{ fontSize: 18, marginBottom: 20 }}>PDF Generated Successfully!</Text>
                            <TouchableOpacity style={{
                                backgroundColor: '#007BFF',
                                padding: 10,
                                borderRadius: 5,
                            }} onPress={openPdf}>
                                <Text style={{ color: 'white' }}>Open PDF</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[{
                                    backgroundColor: '#007BFF',
                                    padding: 10,
                                    borderRadius: 5,
                                }, { backgroundColor: 'grey', marginTop: 10 }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ color: 'white' }}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};
export default PdfForm;