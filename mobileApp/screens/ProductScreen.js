import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import products from '../data/products.json'; // ✔ SHTOJE KËTË

export default function ProductScreen(props) {

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>

                        <Image
                            source={item.image}
                            style={styles.itemImage}
                        />

                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCategory}>{item.category}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>

                        <Text style={styles.itemStock}>
                            {item.stock === 'yes' ? 'In Stock' : 'Out of Stock'}
                        </Text>

                        <Text style={styles.itemPrice}>${item.price}</Text>

                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15,
        padding: 12,
        elevation: 3,
    },
    itemImage: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemCategory: {
        fontSize: 13,
        color: '#888',
    },
    itemDescription: {
        fontSize: 14,
        color: '#444',
    },
    itemStock: {
        fontSize: 13,
        color: 'green',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: 10,
    },
});