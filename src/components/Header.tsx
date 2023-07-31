import React from 'react'
import {View} from 'react-native'
import SearchBox from './SearchBox'
import {styles} from './styles/HeaderStyle'

export default function Header() {
  return (
    <View style={styles.container}>
      <SearchBox />
    </View>
  )
}
