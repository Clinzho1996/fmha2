/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import PushNotification, {Importance} from 'react-native-push-notification';
import BackgroundFetch from 'react-native-background-fetch';

import messaging from '@react-native-firebase/messaging';

const North = ({navigation}) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    // Configure notification channel
    PushNotification.createChannel({
      channelId: 'fmhadmsd-events',
      channelName: 'FMHADMSD Events',
      importance: 4, // Importance level: high (4) or default (3)
    });

    // Configure background fetch
    BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // Fetch interval in minutes (minimum 15 minutes)
        stopOnTerminate: false, // Continue background fetch when the app is terminated
        startOnBoot: true, // Start background fetch on device boot
        enableHeadless: true, // Enable background fetch to run in headless mode
        forceReload: false, // Force background fetch event even if it hasn't changed
      },
      async taskId => {
        // Implement your logic for background fetch here
        // Fetch the event data and schedule the notification

        loadItems(new Date()); // Load items for the current date
        BackgroundFetch.finish(taskId); // Call this when your background fetch task is completed
      },
      error => {
        console.log('BackgroundFetch failed to configure:', error);
      },
    );

    // Start the background fetch
    BackgroundFetch.start();

    return () => {
      // Clean up notification channel and background fetch
      PushNotification.deleteChannel('fmhadmsd-events');
      BackgroundFetch.stop();
    };
  }, []);

  const loadItems = day => {
    setTimeout(() => {
      const now = new Date();
      const timeToString = time => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      };
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          if (strTime === '2023-05-28') {
            // Custom event on February
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-05-28T14:49:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-01') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC Seminar on the 1st ',
              height: 50,
            });
            const eventDate = new Date('2023-05-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'NEDC Seminar on the 1st ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 4th @ Bauchi ',
              height: 50,
            });
            const eventDate = new Date('2023-05-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of NEDC Mass Housing Units on the 4th @ Bauchi ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th',
              height: 50,
            });
            const eventDate = new Date('2023-05-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd',
              height: 50,
            });
            const eventDate = new Date('2023-05-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st',
              height: 50,
            });
            const eventDate = new Date('2023-05-31T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization on drug abuse on the 2nd',
              height: 50,
            });
            const eventDate = new Date('2023-06-02T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Sensitization on drug abuse on the 2nd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 5th @ Gombe',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of NEDC Mass Housing Units on the 5th @ Gombe', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects on the 19th @ Bauchi State',
              height: 50,
            });
            const eventDate = new Date('2023-06-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of Rapid Response Intervention (RRI) Projects on the 19th @ Bauchi State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 28th ',
              height: 50,
            });
            const eventDate = new Date('2023-06-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 28th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 4th @ Gombe',
              height: 50,
            });
            const eventDate = new Date('2023-07-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of NEDC Mass Housing Units on the 4th @ Gombe', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Tree planting day (one house one tree) on the 12th ',
              height: 50,
            });
            const eventDate = new Date('2023-07-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Tree planting day (one house one tree) on the 12th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects on the 20th @ Adamawa',
              height: 50,
            });
            const eventDate = new Date('2023-07-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of Rapid Response Intervention (RRI) Projects on the 20th @ Adamawa', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 27th',
              height: 50,
            });
            const eventDate = new Date('2023-07-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 27th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-08-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
            const eventDate = new Date('2023-08-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'World Humanitarian Day on the 19th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-08-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Mega Schools in Biu and Dikwa, Borno State on the 22nd ',
              height: 50,
            });
            const eventDate = new Date('2023-08-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of Mega Schools in Biu and Dikwa, Borno State on the 22nd ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-08-28') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 28th ',
              height: 50,
            });
            const eventDate = new Date('2023-08-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 28th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-08-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st',
              height: 50,
            });
            const eventDate = new Date('2023-08-31T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-09-04') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of Rapid Response Intervention (RRI) Projects on the 4th @  Taraba State ',
              height: 50,
            });
            const eventDate = new Date('2023-09-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of Rapid Response Intervention (RRI) Projects on the 4th @  Taraba State ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-09-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 20th ',
              height: 50,
            });
            const eventDate = new Date('2023-09-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 20th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-10-05') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Sensitization on girl child on the 5th',
              height: 50,
            });
            const eventDate = new Date('2023-10-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Sensitization on girl child on the 5th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-10-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 18th',
              height: 50,
            });
            const eventDate = new Date('2023-10-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Rehabilitation and Reconstruction of Tertiary and Health Institutions on the 18th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-10-31') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st ',
              height: 50,
            });
            const eventDate = new Date('2023-10-31T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 31st ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-02') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Handover of NEDC Mass Housing Units on the 2nd @ Taraba ',
              height: 50,
            });
            const eventDate = new Date('2023-11-02T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Handover of NEDC Mass Housing Units on the 2nd @ Taraba', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC Seminar on the 7th',
              height: 50,
            });
            const eventDate = new Date('2023-11-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'NEDC Seminar on the 7th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC Games week on the 20th ',
              height: 50,
            });
            const eventDate = new Date('2023-11-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'NEDC Games week on the 20th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-29') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 29th',
              height: 50,
            });
            const eventDate = new Date('2023-11-29T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 29th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Education & Skills acquisition on people with disability (PWD) on the 10th',
              height: 50,
            });
            const eventDate = new Date('2023-12-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Education & Skills acquisition on people with disability (PWD) on the 10th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-14') {
            // Custom event on December 15
            items[strTime].push({
              name: 'NEDC end of year media parley on the 14th',
              height: 50,
            });
            const eventDate = new Date('2023-12-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'NEDC end of year media parley on the 14th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 19th',
              height: 50,
            });
            const eventDate = new Date('2023-12-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  importance: Importance.HIGH,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of Palliatives and Relief materials to IDPs and People of North East on the 19th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else {
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'No Event on ' + strTime + ' #' + j,
                height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card
          style={{
            backgroundColor: '#fff',
          }}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{width: 200, color: '#000'}}>{item.name}</Text>
              <Avatar.Text label="N" style={{backgroundColor: '#99dd7a'}} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 0,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          position: 'absolute',
          left: 20,
          zIndex: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{backgroundColor: '#828282', padding: 5, borderRadius: 10}}>
          <Icon name="arrow-back" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
      />
    </View>
  );
};

export default North;
