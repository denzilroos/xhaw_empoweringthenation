import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
  const calculateTotal = (): { subtotal: number; discount: number; total: number } => {
    // Subtotal calculation
    const subtotal = items.reduce((total, item) => {
      return item.selected ? total + item.price : total;
    }, 0);

    // Count selected items
    const selectedCount = items.filter((item) => item.selected).length;
    
    // Apply discount based on the number of selected items
    let discount = 0;
    if (selectedCount >= 5) {
      discount = subtotal * 1; // 30% discount for 4 or more items
    }
    if (selectedCount >= 4) {
      discount = subtotal * 0.15; // 30% discount for 4 or more items
    }
    if (selectedCount >= 3) {
      discount = subtotal * 0.1; // 20% discount for 3 or more items
    } else if (selectedCount === 2) {
      discount = subtotal * 0.05; // 10% discount for 2 items
    }

    // Final total
    const total = subtotal - discount;

    return { subtotal, discount, total };
  };

  // Handle checkbox toggle
  const toggleCheckbox = (id: string): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const { subtotal, discount, total } = calculateTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Items</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Checkbox
              value={item.selected}
              onValueChange={() => toggleCheckbox(item.id)}
              style={styles.checkbox}
            />
            <Text style={styles.itemText}>
              {item.name} - R{item.price}
            </Text>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Subtotal: R{subtotal.toFixed(2)}</Text>
        <Text style={styles.discountText}>Discount: -R{discount.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total: R{total.toFixed(2)}</Text>
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
});

export default App;
