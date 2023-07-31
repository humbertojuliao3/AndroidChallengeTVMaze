import React from 'react'
import {TextInput, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {actions} from '../Store'
import {screens} from '../App'
import {styles} from './styles/SearchBoxStyle'
import { navigate, navigationRef} from "../Utils";
import { useDispatch, useSelector } from 'react-redux'

export default function SearchBox() {
  const dispatch = useDispatch()
  const isSearchActive = useSelector(state=> state.isSearchActive)
  const setIsSearchActive = (onoff) => dispatch(actions.setSearchHandler(onoff))
  const searchTerm = useSelector(state=> state.searchTerm)
  const setSearchTerm = (term)=> dispatch(actions.setSearchTerm(term))
  console.log(searchTerm)

  function handlesSearchPress() {
    if (!isSearchActive) {
      navigate(screens.Search, {})
    } else {
      setIsSearchActive(false)
      navigationRef.goBack()
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={[isSearchActive && styles.whiteBackGround, styles.subContainer]}>
        {isSearchActive && (
          <TextInput
            style={styles.input}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
        )}
        <Icon.Button
          style={styles.icon}
          name={isSearchActive ? 'close' : 'search'}
          size={30}
          color={isSearchActive ? 'gray' : 'white'}
          backgroundColor={isSearchActive ? 'white' : 'transparent'}
          onPress={handlesSearchPress}
        />
      </View>
    </View>
  )
}
