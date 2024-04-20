import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';
import { app } from '../../firebaseConfig';
import { useUser } from '@clerk/clerk-expo';
import LatestItemList from '../Components/HomeScreen/LatestItemList';
import { useNavigation } from '@react-navigation/native';

export default function MyProducts() {
  const db = getFirestore(app);
  const { user } = useUser();
  const [productList, setProductList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserPost = async () => {
      if (!user) return;

      const q = query(collection(db, 'UserPost'), where('userEmail', '==', user?.primaryEmailAddress?.emailAddress));
      const snapshot = await getDocs(q);
      const tempProductList = [];
      snapshot.forEach(doc => {
        tempProductList.push(doc.data());
      });
      setProductList(tempProductList);
    };

    const unsubscribeFocus = navigation.addListener('focus', fetchUserPost);

    fetchUserPost(); // Fetch initially when component mounts

    return unsubscribeFocus;
  }, [navigation, user]);

  return (
    <View>
      {/* Ensure key prop is unique */}
      <LatestItemList latestItemList={productList} />
    </View>
  );
}
