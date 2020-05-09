import React from 'react';
import { TouchableWithoutFeedback, View, Text, TextInput, Button, CheckBox, Keyboard, Alert } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker'

export default function EditTaskDetails({ route, navigation}) {
    const { key } = route.params;
    const { title } = route.params;
    const { completed } = route.params;
    const { notes } = route.params;
    const { dueDate } = route.params;

    // function to show the error underline for empty or blank title input
    const titleInputColor = (title) => {
      return title.trim() == "" ? 'red' : 'white';
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>  
          <Formik onPress={Keyboard.dismiss}
                  // intialize the values to populate fields on the edit screen
                  initialValues={{ key: key, title: title, completed: completed, notes: notes, dueDate: dueDate }}
                 
                  // function to submit saved tasks
                  onSubmit={(values) => {
                    // only submit if the title is not empty
                    if (values.title == "") {
                      Alert.alert(
                        "Empty Task Title",
                        "The task title cannot be empty. Please enter a valid title to proceed.");
                    }
                    else {
                      // console.log(values);
                      navigation.navigate('Home', { editedTask: values });
                    }
                  }}
              >
                  {({values, handleChange, setFieldValue, handleSubmit}) => (
                      <View>
                          <Text style={globalStyles.taskTitle}> Task Title</Text>
                          <TextInput
                              style={globalStyles.input}
                              placeholder='Task title'
                              multiline={false}
                              maxLength={50}
                              onChangeText={handleChange('title')}
                              value={values.title}
                              underlineColorAndroid={titleInputColor(values.title)}
                            />
                              <View style={{ flexDirection: 'row', borderBottomColor: 'lightgrey', borderBottomWidth: 1}}>      
                                <Text style={globalStyles.completed}> Completed</Text>
                                  <View style={{ padding: 7 }}>
                                    <CheckBox
                                      value={values.completed}
                                      onChange={() => setFieldValue('completed', !values.completed)}
                                      />
                                  </View>
                              </View>  

                          <Text style={globalStyles.dueDateTitle}> Due Date</Text>
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

                          <Text style={globalStyles.notes}> Notes</Text>
                          <TextInput
                              style={globalStyles.input}
                              multiline
                              numberOfLines={3}
                              maxLength={150}
                              placeholder='Review details'
                              onChangeText={handleChange('notes')}
                              value={values.notes}
                            />
                        <View style={{paddingTop: 10}}>
                           <Button
                              title="Save"
                              onPress={handleSubmit} 
                              color='#019'
                            />
                          </View> 
                      </View>
                  )}
              </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}