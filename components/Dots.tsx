import React from 'react';
import { View } from 'react-native';

interface DotsProps {
    currentIndex: number;
    totalNo: number;
  }

export default function Dots({ currentIndex, totalNo }: DotsProps) {
  return (
    <View className='flex-row justify-center'>
      {Array.from({ length: totalNo }).map((_, index) => (
        <View
          key={index}
          className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'} mx-1 mt-4`}
        />
      ))}
    </View>
  );
};