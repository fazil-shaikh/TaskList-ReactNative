import React from 'react';
import { Button, TextInput, View, Alert, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker'
import uuid from 'uuid-random';

export default function AddTaskForm( {addTask} ) {

    // function to show the error underline for empty or blank title input
    const titleInputColor = (title) => {
        return title.trim() == "" ? 'red' : 'white';
    }

    return ( 
        <View style={globalStyles.container}>
            <Formik
                // intialize the values for the add screen
                initialValues={{key: uuid(), title: '', notes: '', completed: false, dueDate:''}}

                 // function to submit new tasks
                onSubmit={(values, actions) => {
                    if (values.title.trim() == "") {
                        Alert.alert(
                          "Empty Task Title",
                          "The task title cannot be empty. Please enter a valid title to proceed.");
                      }
                      else {
                        // console.log(values);
                        actions.resetForm();
                        addTask(values);
                      }
                }}
            >
                {({values, handleChange, setFieldValue, handleSubmit}) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Task title'
                            multiline={false}
                            maxLength={50}
                            onChangeText={handleChange('title')}
                            value={values.title}
                            mode='outlined'
                            underlineColorAndroid={titleInputColor(values.title)}
                        />

                        <View style={{ flexDirection: 'row', paddingTop: 5}}>
                            <Text style={globalStyles.dateChoice}> Due Date:</Text>
                                <DatePicker
                                    style={globalStyles.datePicker}
                                    mode="date"
                                    placeholder="Select Date"
                                    date={values.dueDate}
                                    format="MM/DD/YYYY"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    onDateChange={(date) => setFieldValue('dueDate', date)}
                                    />
                            </View>

                            <View style={{paddingTop: 5}}>
                                <TextInput
                                    style={globalStyles.input}
                                    multiline
                                    numberOfLines={3}
                                    maxLength={150}
                                    placeholder='Notes'
                                    onChangeText={handleChange('notes')}
                                    value={values.notes}
                                />
                            </View>
                        
                        <View style={{paddingTop: 7}}>
                           <Button
                              title="Submit"
                              onPress={handleSubmit} 
                              color='#019'
                            />
                        </View>

                    </View>
                )}
            </Formik>
        </View>

    );
}