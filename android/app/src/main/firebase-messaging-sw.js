/* eslint-disable prettier/prettier */
import messaging from '@react-native-firebase/messaging';

// Handle background message
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Optional: Subscribe to topics
messaging().subscribeToTopic('topicName');
