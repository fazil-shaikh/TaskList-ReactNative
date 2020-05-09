import React, { useState } from 'react';
import { View, Text, TouchableHighlight,
    TouchableWithoutFeedback, Keyboard, FlatList, Modal
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import AddTaskForm from './addTaskForm';
import Swipeable from 'react-native-swipeable-row';
import uuid from 'uuid-random';

export default function Home({ route, navigation }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState([
        { key: uuid(), title: 'Call Mom', completed: false, dueDate: '04/10/2020', notes: 'dont forget' },
        { key: uuid(), title: 'Do the Laundry', completed: false, dueDate: '04/11/2020', notes: 'before next week' },
        { key: uuid(), title: 'Sprint Review', completed: true, dueDate: '04/12/2020', notes: 'this evening'},
    ]);

    // sorts the list by date first
    tasks.sort(function(a, b) { 
        // if the date is empty it goes above the rest
        if (a.dueDate == "" || b.dueDate == "") {
            return a.dueDate > b.dueDate;
        }
        return new Date(a.dueDate) - new Date(b.dueDate) 
    });

    // sorts the list by completed second
    tasks.sort(function(a, b) { return a.completed - b.completed; });

    // retrieves the data from the edited task and saves it in the list
    React.useEffect(() => {
        if (route.params?.editedTask) {
            setTasks(prevTasks => {
                return prevTasks.map(task =>
                  task.key === route.params.editedTask.key ? {
                      key: route.params.editedTask.key, 
                      title: route.params.editedTask.title,
                      completed: route.params.editedTask.completed,
                      dueDate: route.params.editedTask.dueDate,
                      notes: route.params.editedTask.notes
                    } : task,
                );
              });
        }
      }, [route.params?.editedTask]);

    // function to add a new task
    const addTask = (task) => {
        setTasks((currentTasks) => {
            return [...currentTasks, task];
        });
        setModalOpen(false);
    }

    // function to complete an existing task
    const markStatus = (item) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => task.key === item.key ? {
                  key: item.key,
                  title: item.title,
                  completed: !item.completed,
                  dueDate: item.dueDate,
                  notes: item.notes
                } : task,
            );
          });
    }

    // function to delete an existing task
    const deleteTask = (key) => {
        setTasks((prevTasks) => {
            return prevTasks.filter(task => task.key != key);
        });
    }

    // content displayed during right swipe
    const rightContent =
        <MaterialIcons
            name='delete'
            color='white'
            style={globalStyles.delete}
            size={50}
            />;

    // function to switch the card background when task is completed
    const colorStyles = (item) => {
       return item.completed ? 'grey' : 'white';
    };
    
    return (
        <View style={globalStyles.container}>
            <FlatList data={tasks} renderItem={({ item }) => (
                <Swipeable 
                    rightContent={rightContent}
                    onRightActionRelease={() => deleteTask(item.key)}
                    >
                    <TouchableHighlight underlayColor="lightgrey" onPress={() => navigation.navigate('EditTaskDetails', item)}>
                    <View style={[globalStyles.card, {backgroundColor: colorStyles(item)}]}>
                        <View style={globalStyles.cardContent}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{margin: -5, left: -5, paddingRight: 5}}>
                                    <RadioButton
                                        value={item.completed}
                                        status={item.completed ? 'checked' : 'unchecked'}
                                        onPress={() => markStatus(item) }
                                    />
                                </View>
                                <View style={{ flex: 1}}>
                                    <Text style={globalStyles.titleText}>{item.title}</Text>
                                </View>
                                <View style={{ flex: 1}}>
                                    <Text style={globalStyles.dueDateText}>{item.dueDate}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    </TouchableHighlight>
                </Swipeable>
            )} />
        
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.modalContent}>
                        <View style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}>      
                            <MaterialIcons
                                name='close'
                                size={30}
                                onPress={() => setModalOpen(false)}
                            />
                            <View style={globalStyles.headerView}>
                                <Text style={globalStyles.header}> New Task</Text>
                            </View>
                        </View>
                        <AddTaskForm addTask={addTask}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add-circle'
                size={70}
                color="#019"
                style={globalStyles.modalAdd}
                onPress={() => setModalOpen(true)}
            />
        </View>
    );
}