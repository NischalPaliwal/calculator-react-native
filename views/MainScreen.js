import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable, TouchableOpacity } from 'react-native'

export default function MainScreen() {
  const [value, setValue] = useState('0');
  const scrollViewRef = useRef();
  const handlePress = (pressed_value) => {
    console.log('pressed', pressed_value);
    if(pressed_value == 'AC') {
      setValue('0')
    }
    else if(pressed_value == '=') {
      try {
        if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == 'x' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
          setValue(`${eval(value.slice(0, -1))}`)
        }
        else {
          setValue(`${eval(value)}`)
        }
      } catch (err) {
        setValue('Format Error')
      }
    }
    else if(pressed_value == 'back') {
      setValue(value.slice(0, -1))
    }
    else {
      if(value == '0') {
        if(pressed_value == '+' || pressed_value == '-' || pressed_value == '*' || pressed_value == '/' || pressed_value == '.' || pressed_value == '%' || pressed_value == '.') {
          setValue(value + pressed_value)
        }
        else {setValue(pressed_value)}
      } 
      else if(isNaN(pressed_value)) {
        if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
          setValue(value.slice(0, -1) + pressed_value)
        }
        else {
          setValue(value + pressed_value)
        }
      }
      else if(value == 'Format Error') {
        setValue(pressed_value)
      }
      else {
        setValue(value + pressed_value)
      }
    }
  }
  return (
      <View style={styles.display}>
      <ScrollView style={styles.display_scroll}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        <Text style={styles.display_text}>
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
      </ScrollView>
      <View style={styles.display_keypad}>
        <View style={styles.display_keypad_row}>
          <TouchableOpacity onPress={() => handlePress('AC')}>
            <View style={styles.btn1_outer}>
              <Text style={{ fontSize: 24, color: '#000000' }}>
                AC
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('back')}>
            <View style={styles.btn1_outer}>
              <Text style={{ fontSize: 27, color: '#000000' }}>
              ⌫
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('%')}>
            <View style={styles.btn1_outer}>
              <Text style={{ fontSize: 24, color: '#000000' }}>
                %
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('/')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.display_button_text}>
                /
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.display_keypad_row}>
          <TouchableOpacity onPress={() => handlePress('7')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                7
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('8')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                8
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('9')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                9
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('*')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.display_button_text}>
              x
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.display_keypad_row}>
          <TouchableOpacity onPress={() => handlePress('4')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                4
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('5')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                5
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('6')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
               6
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('-')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.display_button_text}>
                -
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.display_keypad_row}>
          <TouchableOpacity onPress={() => handlePress('1')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('2')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
                2
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('3')}>
            <View style={styles.btn_num}>
              <Text style={styles.display_button_text}>
               3
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('+')}>
            <View style={styles.btn2_outer}>
              <Text style={styles.display_button_text}>
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.display_keypad_row}>
          <TouchableOpacity onPress={() => handlePress('0')}>
            <View style={styles.btn_num_long}>
              <Text style={styles.display_button_text}>
                0
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('.')}>
            <View style={styles.btn_num_long}>
              <Text style={styles.display_button_text}>
                .
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('=')}>
            <View style={styles.btn_num_long}>
              <Text style={styles.display_button_text}>
               =
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  display: {
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: '#060606',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  display_scroll: {
    elevation: 10,
    width: '95%',
    backgroundColor: '#060606',
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#FFFFFF'
  },
  display_text: {
    color: '#FFFFFF',
    fontSize: 45,
    textAlign: 'right'
  },
  display_keypad: {
    width: '100%',
    height: '65%',
    display: 'flex',
    flexDirection: 'column'
  },
  display_keypad_row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3.5
  },
  btn1_outer: {
    backgroundColor: '#a6a6a6',
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn2_outer: {
    backgroundColor: '#ffc107',
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_num: {
    backgroundColor: '#333333',
    height: 90,
    width: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_num_long: {
    backgroundColor: '#333333',
    height: 90,
    width: 120,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  display_button_text: {
    fontSize: 24,
    color: '#FFFFFF'
  }
})
