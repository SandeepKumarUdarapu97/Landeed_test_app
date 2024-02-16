import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
  Easing,
  Button,
  LayoutAnimation,
} from 'react-native';
import {getHeight, getWidth} from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomDropdown = ({
  items,
  onItemsSelect,
  label,
  search = false,
  AddItem = false,
  value
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [newItemText, setNewItemText] = useState('');
  const dropdownAnimation = useRef(new Animated.Value(0)).current;

  // Animations with help of AI

  useEffect(() => {
    if (isVisible) {
      Animated.timing(dropdownAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }).start();
    } else {
      Animated.timing(dropdownAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.in(Easing.cubic),
      }).start();
    }
  }, [isVisible, dropdownAnimation]);

  const toggleDropdown = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsVisible(!isVisible);
  };

  const selectItem = item => {
    onItemsSelect(item);
    setIsVisible(false);
  };

  const addItem = () => {
    if (newItemText && !items.includes(newItemText)) {
      onItemsSelect(newItemText);
      setNewItemText(''); 
      setIsVisible(false)
    }
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(filterText.toLowerCase()),
  );

  const dropdownHeight = dropdownAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250], 
    useNativeDriver: false,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>{value || label}</Text>
        {isVisible ? (
          <Icon name="chevron-up" size={getHeight(2.2)} color="white" />
        ) : (
          <Icon name="chevron-down" size={getHeight(2.2)} color="white" />
        )}
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.dropdown,
          {
            height: isVisible
              ? items.length * (search ? (AddItem ? 74 : 64) : 54)
              : 0,
            borderWidth: isVisible ? 1 : 0,
          },
        ]}>
        {isVisible && (
          <>
            {search && (
              <TextInput
                style={styles.textInput}
                placeholder="Type to filter..."
                placeholderTextColor="#999"
                value={filterText}
                onChangeText={setFilterText}
              />
            )}
            <FlatList
              data={filteredItems}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    selectItem(item);
                  }}
                  style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            {AddItem && (
              <View style={styles.addItemContainer}>
                <TextInput
                  style={styles.addItemInput}
                  placeholder="Add custom item..."
                  value={newItemText}
                  onChangeText={setNewItemText}
                />
                <TouchableOpacity
                  onPress={addItem}
                  style={{
                    backgroundColor: '#4F6D7A',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: getWidth(1),
                    opacity: newItemText.split('').length > 0 ? 1 : 0.5,
                  }}>
                  <Text
                    style={{
                      fontSize: getWidth(3.8),
                      padding: getWidth(2),
                      fontWeight: '700',
                      color: 'white',
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
                {/* <Button style={{alignItems:'center',justifyContent:'center'}} title="Submit" /> */}
              </View>
            )}
          </>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
  },
  dropdownButton: {
    flexDirection: 'row',
    padding: getHeight(2),
    backgroundColor: '#4F6D7A',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderColor: '#B5B5B5',
    borderRadius: 5,
    overflow: 'hidden',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    color: '#333333',
    borderTopWidth: 1,
    borderColor: '#B5B5B5',
  },
  item: {
    padding: getHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  itemText: {
    color: '#333333',
    fontWeight: '700',
  },
  addItemContainer: {
    flexDirection: 'row',
    padding: getHeight(1),
  },
  addItemInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    color: '#333',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    borderRadius: 5,
  },
});

export default CustomDropdown;
