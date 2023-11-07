import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { products } from '../products'

const ProductList = () => {
  return (
    <FlatList data={products} keyExtractor={(product) => product.id}
        renderItem={({item}) => <Text>{item.title}</Text>}
    />
  )
}

export default ProductList
