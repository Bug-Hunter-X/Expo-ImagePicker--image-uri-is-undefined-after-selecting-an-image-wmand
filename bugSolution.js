The solution involves robust error handling and checking for the existence of the URI before attempting to access it.  Asynchronously handling image selection and using a state variable to track selection also helps. Here's how:
```javascript
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={styles.image} />
      )}
      {selectedImage && selectedImage.uri === undefined && (<Text>Image URI not available.</Text>)}
    </View>
  );
};
```