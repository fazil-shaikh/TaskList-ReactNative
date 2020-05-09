import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  card: {
    borderRadius: 0,
    elevation: 3,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 4,
},
cardContent: {
    marginHorizontal: 18,
    marginVertical: 18,
},
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign:'left',
  },
  dueDateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign:'right'
  },
  container: {
    flex: 1,
    padding: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  dateChoice: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 7,
    fontSize: 18,
    color: 'lightgray',
    borderRadius: 6,
  },
  taskTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#666',
  },
  completed: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 18,
  },
  datePicker: {
    width: 150,
    paddingLeft: 5,
  },
  dueDateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingLeft: 5,
    color: '#666',
  },
  notes: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingTop: 5,
    color: '#666',
  },
  delete: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'red',
},
done: {
  paddingTop: 5,
  paddingBottom: 5,
  marginTop: 5,
  marginBottom: 5,
  backgroundColor: 'lawngreen',
},
  modalAdd: {
    alignSelf: 'flex-end',
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    backgroundColor: '#019',
    padding: 10,
    borderRadius: 10,
},
modalClose: {
    marginTop: 20,
    marginBottom: 0,
},
modalContent: {
    flex: 1,
},
header: {
  justifyContent: 'center',
  fontSize: 24,
},
headerView: {
  position: 'absolute', 
  top: 0, left: 0, 
  right: 0, bottom: 0, 
  justifyContent: 'center', 
  alignItems: 'center'
}
});