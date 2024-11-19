import React, { useState } from 'react';
import {StyleSheet,  Text,  View,  FlatList,  TextInput,  Button,  Alert,} from 'react-native';
import Checkbox from 'expo-checkbox';

// Define the type for an item
type Item = {
  id: string;
  name: string;
  price: number;
  selected: boolean;
};

const App: React.FC = () => {
  // Define the state using the Item type
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'First aid', price: 1500, selected: false },
    { id: '2', name: 'Sewing', price: 1500, selected: false },
    { id: '3', name: 'Landscaping', price: 1500, selected: false },
    { id: '4', name: 'Life skills', price: 750, selected: false },
    { id: '5', name: 'Child minding', price: 750, selected: false },
    { id: '6', name: 'Cooking', price: 750, selected: false },
    { id: '7', name: 'Garden maintenance', price: 750, selected: false },
  ]);

  // Calculate total price with discount
  const calculateTotal = (): { subtotal: number; discount: number; total: number; totalVat:number } => {
    // Subtotal calculation
    const subtotal = items.reduce((total, item) => {
      return item.selected ? total + item.price : total;
    }, 0);

    // Count selected items
    const selectedCount = items.filter((item) => item.selected).length;
    
    // Apply discount based on the number of selected items
    let discount = 0;

    if (selectedCount >= 4) {
      discount = subtotal * 0.15; // 15% discount for 4 or more items
    }
    if (selectedCount === 3) {
      discount = subtotal * 0.1; // 10% discount for 3 or more items
    } else if (selectedCount === 2) {
      discount = subtotal * 0.05; // 5% discount for 2 items
    }

    // Final total
    const total = subtotal - discount ;
    const totalVat =total + (total*0.15)
    return { subtotal, discount, total, totalVat };
  };

  // Handle checkbox toggle
  const toggleCheckbox = (id: string): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const { subtotal, discount, total, totalVat } = calculateTotal();

    // User Details State
    const [userDetails, setUserDetails] = useState({
      name: '',
      phone: '',
      email: '',
    });

      // Handle Form Submission
  const handleFormSubmit = () => {
    const { name, phone, email } = userDetails;

    // Basic validation
    if (!name || !phone || !email) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    Alert.alert(
      'Details Submitted',
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`
    );
  };

  return ( 
    <View style={styles.container}>
        <Text style={styles.title}>Select Course</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Checkbox
                value={item.selected}
                onValueChange={() => toggleCheckbox(item.id)}
                style={styles.checkbox} />
              <Text style={styles.itemText}>
                {item.name} - R{item.price}
              </Text>
            </View>
          )} />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Subtotal: R{subtotal.toFixed(2)}</Text>
          <Text style={styles.discountText}>Discount: -R{discount.toFixed(2)}</Text>
          <Text style={styles.totalText}>Total: R{total.toFixed(2)}</Text>
          <Text style={styles.totalText}>Total +VAT: R{totalVat.toFixed(2)}</Text>
        </View>

      <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Enter Your Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userDetails.name}
        onChangeText={(text) => setUserDetails({ ...userDetails, name: text })} />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={userDetails.phone}
        onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })} />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={userDetails.email}
        onChangeText={(text) => setUserDetails({ ...userDetails, email: text })} />
      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
      </View>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    marginLeft: 10,
  },
  checkbox: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  discountText: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
  formContainer: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
});

export default App;
