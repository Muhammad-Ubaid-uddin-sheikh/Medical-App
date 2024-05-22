import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Fonts } from '../components/style'
import Icon from 'react-native-vector-icons/FontAwesome6'
import Button from '../components/common/Button'
import DocumentPicker from 'react-native-document-picker';
import { BASE_URL, uploadFile } from '../api/apihandler'
import { updateAppoinment } from '../api/doctor'
const ParticularPatientScreen = ({ route, navigation }) => {

    const {item} = route.params

    const appointmentId = item._id 

    console.log("+++++++++++++++++++++++++++++++++++")
    console.log("PATIENT PERTICULAR SCREEN", item)
    console.log("PATIENT PERTICULAR SCREEN", item['patientId']?.email.split('@')?.[0] || item['patientId']?.username)
    console.log("+++++++++++++++++++++++++++++++++++")

    const [isLoading, setIsLoading] = useState(false)

    const [prescriptionFile, setPrescriptionFile] = useState(null)
    const [reportsFile, setReportsFile] = useState(null)
    const [notesFile, setNotesFile] = useState(null)

    const [prescriptionText, setPrescriptionText] = useState('')
    const [reportsText, setReportText] = useState('')
    const [NotesText, setNotesText] = useState('')
    console.log("PRESCRIPTION File", prescriptionFile, reportsFile, notesFile)
    console.log("PRESCRIPTION Text", prescriptionText, reportsText, NotesText)

    const handleDocumentPicker = async (type) => {
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            const formData = new FormData()

            const selectedFile = doc?.[0]
            const file = { // Edit Here
                uri: selectedFile.uri,// Edit Here,
                name: 'file', // Edit Here, Image Name with Extension very important
                type: selectedFile.type // Edit Here
            }
            formData.append('Media', file)
            const responce = await uploadFile(formData)
            console.log("RESPONSE", responce.data?.url)


            if (type === 'prescription') {
                if (!!prescriptionFile) {

                    setPrescriptionFile([...prescriptionFile, BASE_URL + responce?.data?.url])
                } else {
                    setPrescriptionFile([BASE_URL + responce?.data?.url])
                }
            }
            if (type === 'report') {
                if (!!reportsFile) {
                    setReportsFile([...reportsFile, BASE_URL + responce?.data?.url])
                } else {
                    setReportsFile([BASE_URL + responce?.data?.url])
                }
            }
            if (type === 'notes') {
                if (!!notesFile) {
                    setNotesFile([...notesFile, BASE_URL + responce?.data?.url])
                } else {
                    setNotesFile([BASE_URL + responce?.data?.url])
                }
            }

        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User cancel the upload', err);
            } else {
                console.log(err);
            }
        }
    }

    const handleUpdateAppointment = async () => {
        setIsLoading(true)
        let body = {
            appointmentId,
            prescription: prescriptionText,
            doctorNotes: NotesText,
            doctorReport: reportsText,
            prescriptionMedia: prescriptionFile,
            doctorNotesMedia: notesFile,
            doctorReportsMedia: reportsFile
        }
        try {
            const response = await updateAppoinment(body)
            console.log("RESPONSE", response)
            setIsLoading(false)
            navigation.navigate('NurseList',{item:body})
            
        } catch (error) {
            setIsLoading(false)
            console.log('Error in Update Appointment =>', error.response)
        }

        
    }

    useEffect(()=>{
        if(item){
            setNotesFile(item.doctorNotesMedia)
            setNotesText(item.doctorNotes)
            setReportsFile(item.doctorReportsMedia)
            setReportText(item.doctorReport)
            setPrescriptionFile(item.prescriptionMedia)
            setPrescriptionText(item.prescription)
        }
    },[item]) 
    return (
        <View style={{ backgroundColor: '#e3eeeb', flex: 1, }}>

            <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 26, marginVertical: 10, width: '100%', textAlign: 'center', color: 'black' }}>Assign Patient</Text>
            <View style={styles.container}>
                <View style={styles.childOne}>
                    {/* <Image style={{width:'100%',height:70,objectFit:'cover'}} source={{ uri: item.profileImage }} /> */}
                    <Image style={{ width: '100%', height: 80, objectFit: 'cover', borderRadius: 5 }} source={{ uri: 'https://i.pinimg.com/736x/8b/e9/70/8be970b311337d17d37b354b571565b9.jpg' }} />
                </View>
                <View style={styles.childTwo}>
                    <View style={styles.childTwoOne}>
                        <Text style={styles.headingText}>{item['patientId']?.email.split('@')?.[0] || item['patientId']?.username}</Text>
                        <Text style={styles.badge}>pending</Text>
                    </View>
                    <View style={styles.childTwoTwo}>
                        <Text style={styles.light}>Patient #</Text>
                        <Text style={styles.light}>Disease Category</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#116754', padding: 10, borderRadius: 25 }}>
                            <Icon name='location-dot' size={16} color={'white'} />
                        </View>
                        <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 13, color: 'black', paddingLeft: 5 }}>
                            Abcd location address
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: 'white', paddingTop: 10, justifyContent: 'space-around' }}>
                <InputCard heading='Prescription' type={'prescription'} handleDocumentPicker={handleDocumentPicker} textValue={prescriptionText} onChange={(text) => setPrescriptionText(text)} />
                <InputCard heading='Doctor Reports' type={'report'} handleDocumentPicker={handleDocumentPicker} textValue={reportsText} onChange={(text) => setReportText(text)} />
                <InputCard heading='Doctor Notes' type={'notes'} handleDocumentPicker={handleDocumentPicker} textValue={NotesText} onChange={(text) => setNotesText(text)} />
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, paddingTop: 10, justifyContent: 'space-around' }}>

                <View style={{ paddingHorizontal: 15, }}>
                    <Button text="Assign Nurse" Link={() => handleUpdateAppointment()} disabled={isLoading} />
                </View>

            </View>
        </View>
    )
}

export default ParticularPatientScreen

const InputCard = ({ heading, type, handleDocumentPicker, onChange, textValue }) => {
    return (
        <View >
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontFamily: Fonts.REGULAR, fontSize: 16, color: 'black', paddingLeft: 10, flex: 1, }}>{heading || ''}
                </Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.light}>
                        <TouchableOpacity>
                            <Icon name='microphone' size={13} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.childThreeThree} onPress={() => handleDocumentPicker(type)}>
                        <Text style={styles.childThreeThreeText}>
                            Attach File
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <TextInput multiline={true} placeholder='Type Something' textAlignVertical='top' value={textValue || ''} onChangeText={onChange} numberOfLines={6} style={{ backgroundColor: "#E7F0EE", borderRadius: 5 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    scroll: {
        height: '90%',
    },
    headingText: {
        fontSize: 16,
        color: '#116754',
        fontFamily: Fonts.MEDIUM,
        // paddingLeft:13
        paddingLeft: 5
    },
    main: {
        backgroundColor: '#E5EEEC',
        height: '100%',
    },
    childOne: {
        width: '25%',
        backgroundColor: '#e3eeeb',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#116754'

    },
    childTwo: {
        width: '75%',
        paddingLeft: 10
    },
    childTwoOne: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    badge: {
        borderRadius: 50,
        padding: 3,
        color: 'white',
        fontSize: 10,
        backgroundColor: '#116754',
        fontFamily: Fonts.REGULAR,
        paddingHorizontal: 10,
        marginRight: 10
    },
    light: {
        backgroundColor: '#E7F0EE',
        color: '#116754',
        padding: 5,
        borderRadius: 2,
        margin: 5,
        fontSize: 10,
        fontFamily: Fonts.MEDIUM,
        borderWidth: 1,
        borderColor: '#116754'

    },
    childTwoTwo: {
        display: 'flex',
        flexDirection: 'row',
        // paddingLeft:9
    },
    childThree: {
        display: 'flex',
    },
    childThreeThree: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#116754',
        margin: 5,
    },
    childThreeThreeText: {
        color: 'white',
        fontSize: 11,
        marginLeft: 3,
        fontFamily: Fonts.REGULAR,
        paddingLeft: 5
    },
});