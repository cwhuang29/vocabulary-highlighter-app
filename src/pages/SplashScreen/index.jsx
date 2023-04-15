import React from 'react';

import { Heading, HStack, Spinner, View } from 'native-base';

const SplashScreen = () => (
  <View flex={1} bgColor='vhlight.600' justifyContent='center' alignItems='center'>
    <HStack space={3} alignItems='center'>
      <Spinner color='vhlight.darkGray' size='sm' accessibilityLabel='Loading' />
      <Heading color='vhlight.darkGray' fontSize='md'>
        Loading
      </Heading>
    </HStack>
  </View>
);

export default SplashScreen;
