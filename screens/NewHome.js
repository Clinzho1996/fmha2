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

const Home = () => {
  const [items, setItems] = useState({});
  const [scheduledNotifications, setScheduledNotifications] = useState([]);

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
        forceReload: true, // Force background fetch event even if it hasn't changed
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
      PushNotification.cancelAllLocalNotifications();
      PushNotification.deleteChannel('fmhadmsd-events');
      BackgroundFetch.stop();
    };
  }, []);

  const loadItems = day => {
    // Clear the scheduledNotifications array

    setTimeout(() => {
      const now = new Date();
      const timeToString = time => {
        // console.log('time:', time);
        const date = new Date(time);
        // console.log('date:', date);
        return date.toISOString().split('T')[0];
      };

      const updatedItems = {...items};
      setScheduledNotifications([]);

      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!updatedItems[strTime]) {
          updatedItems[strTime] = [];
        } else if (strTime === '2023-04-23') {
          // Custom event on December 15

          const notificationId = 'event_1';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);

            updatedItems[strTime].push({
              name: 'N/Power: N-Knowledge Expansion Graduation Ceremony in collaboration with TSPs in the geopolitical zones on the 23rd',
              height: 50,
            });

            const eventDate = new Date('2023-04-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'N/Power: N-Knowledge Expansion Graduation Ceremony in collaboration with TSPs in the geopolitical zones on the 23rd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-04-26') {
          // Custom event on December 15

          const notificationId = 'event_2';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th ',
              height: 50,
            });
            const eventDate = new Date('2023-04-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NEDC: Distribution of Palliatives and Relief materials to IDPs and People of North East on the 26th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-04-26') {
          // Custom event on December 15

          const notificationId = 'event_3';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'RC&SI: Launching of the second edition of the Service Charter for the Ministry and the clusters under the NSIP on the 26th',
              height: 50,
            });
            const eventDate = new Date('2023-04-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'RC&SI: Launching of the second edition of the Service Charter for the Ministry and the clusters under the NSIP on the 26th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-04-27') {
          // Custom event on December 15

          const notificationId = 'event_4';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Girls in ICT Day on the 27th ',
              height: 50,
            });
            const eventDate = new Date('2023-04-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'International Girls in ICT Day on the 27th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-01') {
          // Custom event on December 15

          const notificationId = 'event_5';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Workers / May Day on the 1st  @ the Eagle Square',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Workers / May Day on the 1st  @ the Eagle Square', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-01') {
          // Custom event on December 15

          const notificationId = 'event_6';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: NEDC Seminar on the 1st',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'NEDC: NEDC Seminar on the 1st', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-01') {
          // Custom event on December 15

          const notificationId = 'event_7';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'GEEP: GEEP 2.0 Road Show from the 1st – 9th in the Six (6) geopolitical zones   ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'GEEP: GEEP 2.0 Road Show from the 1st – 9th in the Six (6) geopolitical zones   ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-02') {
          // Custom event on December 15

          const notificationId = 'event_8';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'RC&SI: Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th',
              height: 50,
            });
            const eventDate = new Date('2023-05-02T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'RC&SI: Commencement of 2023 Humanitarian Innovation Challenge from 2nd - 12th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-04') {
          // Custom event on December 15

          const notificationId = 'event_9';

          // Check if the notification is already scheduled

          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NSCC: Launch of Healthy Ageing Walk For Life Program and Training Manual for Health Promotion on the 4th ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NSCC: Launch of Healthy Ageing Walk For Life Program and Training Manual for Health Promotion on the 4th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-04') {
          // Custom event on December 15

          const notificationId = 'event_10';

          // Check if the notification is already scheduled

          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: Handover of NEDC Mass Housing Units on the 4th @ Bauchi ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NEDC: Handover of NEDC Mass Housing Units on the 4th @ Bauchi ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-04') {
          // Custom event on December 15

          const notificationId = 'event_11';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'GEEP: Dashboard/GEEP Magazine from 4th – 9th @ Abuja.',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'GEEP: Dashboard/GEEP Magazine from 4th – 9th @ Abuja.', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-05') {
          // Custom event on December 15

          const notificationId = 'event_12';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'PRS: Development Plan Implementation Unit on the 5th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-05-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'PRS: Development Plan Implementation Unit on the 5th @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-10') {
          // Custom event on December 15

          const notificationId = 'event_13';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-13') {
          // Custom event on December 15

          const notificationId = 'event_14';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-13T10:50:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_15';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Internal Auditing Training @ Lagos and katsina',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Internal Auditing Training @ Lagos and katsina', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-23') {
          // Custom event on December 15

          const notificationId = 'event_16';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-03') {
          // Custom event on December 15

          const notificationId = 'event_17';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-03T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-10') {
          // Custom event on December 15

          const notificationId = 'event_18';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Inspection of National Rehabilitation centre in collaboration with the Special Needs Department @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Inspection of National Rehabilitation centre in collaboration with the Special Needs Department @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-25') {
          // Custom event on December 15

          const notificationId = 'event_19';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Internal Auditing Training @ Lagos and katsina',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Internal Auditing Training @ Lagos and katsina', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-04') {
          // Custom event on December 15

          const notificationId = 'event_20';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Inspection of Braille Press and Library Centres in collaboration with the Special Needs Department in the six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-22') {
          // Custom event on December 15

          const notificationId = 'event_21';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monitoring and Evaluation of projects and programmes in the six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-04') {
          // Custom event on December 15

          const notificationId = 'event_22';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'ICAN / ANAN Mandatory Continues Professional Development (MCPD) @ Bauchi and Lagos', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-24') {
          // Custom event on December 15

          const notificationId = 'event_23';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-06-24T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-07') {
          // Custom event on December 15

          const notificationId = 'event_24';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Union Week celebration',
              height: 50,
            });
            const eventDate = new Date('2023-06-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Union Week celebration', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-09') {
          // Custom event on December 15

          const notificationId = 'event_25';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Federal Civil Service Week ',
              height: 50,
            });
            const eventDate = new Date('2023-06-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Federal Civil Service Week', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_26';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Health Talk for staff of the Ministry',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Health Talk for staff of the Ministry', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-23') {
          // Custom event on December 15

          const notificationId = 'event_27';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations ',
              height: 50,
            });
            const eventDate = new Date('2023-06-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Senior Staff Promotion Examination for non-pool Officers on SGL. 06 – 13 in the Headquarters and Out-stations', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-04-01') {
          // Custom event on December 15

          const notificationId = 'event_28';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium ',
              height: 50,
            });
            const eventDate = new Date('2023-04-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-04-15') {
          // Custom event on December 15

          const notificationId = 'event_19';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Nationwide Verification exercise in the Headquarters and Out-station  ',
              height: 50,
            });
            const eventDate = new Date('2023-04-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Annual Nationwide Verification exercise in the Headquarters and Out-station ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-01') {
          // Custom event on December 15

          const notificationId = 'event_30';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-01') {
          // Custom event on December 15

          const notificationId = 'event_31';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Workers Day celebration in collaboration with the Union on the 1st @ the Eagle Square ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Workers Day celebration in collaboration with the Union on the 1st @ the Eagle Square ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-12') {
          // Custom event on December 15

          const notificationId = 'event_32';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Training Programmes for staff of the Ministry with the OHCSF ',
              height: 50,
            });
            const eventDate = new Date('2023-05-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Training Programmes for staff of the Ministry with the OHCSF', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-14') {
          // Custom event on December 15

          const notificationId = 'event_33';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Union Week celebration ',
              height: 50,
            });
            const eventDate = new Date('2023-06-14T15:34:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Union Week celebration', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_34';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Federal Civil Service Week',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Federal Civil Service Week', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-21') {
          // Custom event on December 15

          const notificationId = 'event_35';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Award and Recognition with OHCSF',
              height: 50,
            });
            const eventDate = new Date('2023-06-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Award and Recognition with OHCSF ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-29') {
          // Custom event on December 15

          const notificationId = 'event_36';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-07-29T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-12') {
          // Custom event on December 15

          const notificationId = 'event_37';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sports Seminar',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Sports Seminar', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-26') {
          // Custom event on December 15

          const notificationId = 'event_38';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-08-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-16') {
          // Custom event on December 15

          const notificationId = 'event_39';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Training Programme for the staff of the Ministry with the OHCSF',
              height: 50,
            });
            const eventDate = new Date('2023-08-16T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Training Programme for the staff of the Ministry with the OHCSF', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-13') {
          // Custom event on December 15

          const notificationId = 'event_40';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Junior Staff Promotion exercise for officers on SGL. 03 – 05 in the Headquarters and Out-stations',
              height: 50,
            });
            const eventDate = new Date('2023-06-13T10:30:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Junior Staff Promotion exercise for officers on SGL. 03 – 05 in the Headquarters and Out-stations', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-30') {
          // Custom event on December 15

          const notificationId = 'event_41';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-09-30T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-10') {
          // Custom event on December 15

          const notificationId = 'event_42';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Union Seminar',
              height: 50,
            });
            const eventDate = new Date('2023-09-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Union Seminar', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-18') {
          // Custom event on December 15

          const notificationId = 'event_43';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Health Talk',
              height: 50,
            });
            const eventDate = new Date('2023-09-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Health Talk', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-28') {
          // Custom event on December 15

          const notificationId = 'event_44';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-10-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-06') {
          // Custom event on December 15

          const notificationId = 'event_45';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP',
              height: 50,
            });
            const eventDate = new Date('2023-10-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-17') {
          // Custom event on December 15

          const notificationId = 'event_46';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Training Programme for the staff of the Ministry with the OHCSF  ',
              height: 50,
            });
            const eventDate = new Date('2023-10-17T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Training Programme for the staff of the Ministry with the OHCSF ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-25') {
          // Custom event on December 15

          const notificationId = 'event_47';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: ' Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-11-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-13') {
          // Custom event on December 15

          const notificationId = 'event_48';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the OAGF ',
              height: 50,
            });
            const eventDate = new Date('2023-11-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Promotion Examination for Officers on SGL. 06 – 13 under the pool of the BPP', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-01') {
          // Custom event on December 15

          const notificationId = 'event_49';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National Stadium',
              height: 50,
            });
            const eventDate = new Date('2023-12-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monthly Walking / Jogging exercise for MDAs every last Saturday @ the National StadiumP', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-15') {
          // Custom event on December 15

          const notificationId = 'event_50';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Federation of Public Service Games',
              height: 50,
            });
            const eventDate = new Date('2023-12-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Federation of Public Service Games', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-18') {
          // Custom event on December 15

          const notificationId = 'event_51';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Training programme for staff of the Ministry with OHCSF',
              height: 50,
            });
            const eventDate = new Date('2023-12-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Training programme for staff of the Ministry with OHCSF', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-19') {
          // Custom event on December 15

          const notificationId = 'event_52';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Health Talk',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Health Talk', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-13') {
          // Custom event on December 15

          const notificationId = 'event_53';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Awards and Recognition with OHCSF',
              height: 50,
            });
            const eventDate = new Date('2023-12-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Awards and Recognition with OHCSF', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-14') {
          // Custom event on December 15

          const notificationId = 'event_54';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Retreat',
              height: 50,
            });

            const eventDate = new Date('2023-08-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Annual Retreat', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-04') {
          // Custom event on December 15

          const notificationId = 'event_55';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Dashboard/GEEP Magazine from 4th – 9th @ Abuja. ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Dashboard/GEEP Magazine from 4th – 9th @ Abuja. ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-12') {
          // Custom event on December 15

          const notificationId = 'event_56';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'FarmerMoni Enumeration Supervision from 12th – 24th in the Six (6) geopolitical zones ',
              height: 50,
            });
            const eventDate = new Date('2023-06-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'FarmerMoni Enumeration Supervision from 12th – 24th in the Six (6) geopolitical zones ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-12') {
          // Custom event on December 15

          const notificationId = 'event_57';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices',
              height: 50,
            });
            const eventDate = new Date('2023-06-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-19') {
          // Custom event on December 15

          const notificationId = 'event_58';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja  ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-15') {
          // Custom event on December 15

          const notificationId = 'event_59';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Supervision of the Design on the proposed Administrative building and lecture Halls @ the Federal School of Social Works, Emene, Enugu State ',
              height: 50,
            });
            const eventDate = new Date('2023-08-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Supervision of the Design on the proposed Administrative building and lecture Halls @ the Federal School of Social Works, Emene, Enugu State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-11') {
          // Custom event on December 15

          const notificationId = 'event_60';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices',
              height: 50,
            });
            const eventDate = new Date('2023-09-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-18') {
          // Custom event on December 15

          const notificationId = 'event_61';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-09-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-14') {
          // Custom event on December 15

          const notificationId = 'event_62';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Supervision of the Design on the proposed Vocational & Life Skill (Humanitarian) Centres (NSIP Projects) located across the geopolitical zones ',
              height: 50,
            });

            const eventDate = new Date('2023-11-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Supervision of the Design on the proposed Vocational & Life Skill (Humanitarian) Centres (NSIP Projects) located across the geopolitical zones ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-20') {
          // Custom event on December 15

          const notificationId = 'event_63';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Supervision of the construction and equipping ICT Centers (NSIP Projects) located @ Gwadabawa (Sokoto), Toro(Bauchi) and Ebonyi States  ',
              height: 50,
            });
            const eventDate = new Date('2023-11-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Supervision of the construction and equipping ICT Centers (NSIP Projects) located @ Gwadabawa (Sokoto), Toro(Bauchi) and Ebonyi States  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-27') {
          // Custom event on December 15

          const notificationId = 'event_64';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Supervision of the establishment of Pilot Reception Centre for Emergencies Centres (NSIP Project) located at Kirfi (Katsina) and Bama (Borno) States',
              height: 50,
            });
            const eventDate = new Date('2023-11-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Supervision of the establishment of Pilot Reception Centre for Emergencies Centres (NSIP Project) located at Kirfi (Katsina) and Bama (Borno) States', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-11') {
          // Custom event on December 15

          const notificationId = 'event_65';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices ',
              height: 50,
            });
            const eventDate = new Date('2023-12-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly supervision and monitoring of all the Ministry’s projects in order to conform with specifications @ the Headquarters, States and Cluster offices', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-12') {
          // Custom event on December 15

          const notificationId = 'event_66';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-12-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Stock takings of items/ records in the Headquarters and across the warehouses in the 36 States and Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-05') {
          // Custom event on December 15

          const notificationId = 'event_67';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '2023 Budget Preparation @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-07-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: '2023 Budget Preparation @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-03') {
          // Custom event on December 15

          const notificationId = 'event_68';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Budget Monitoring and Evaluation in the Six (6) geo-political zones   ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-07-03T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Budget Monitoring and Evaluation in the Six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-13') {
          // Custom event on December 15

          const notificationId = 'event_69';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Budget Defense @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-07-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Budget Defense @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-15') {
          // Custom event on December 15

          const notificationId = 'event_70';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'IPSAS (International Public Sector Accounting  Standard Training and Workshop @ Kano',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'IPSAS (International Public Sector Accounting  Standard Training and Workshop @ Kano', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-18') {
          // Custom event on December 15

          const notificationId = 'event_71';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '2023 Budget Preparation @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: '2023 Budget Preparation @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-25') {
          // Custom event on December 15

          const notificationId = 'event_72';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Budget Defense @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-24T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Budget Defense @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-10') {
          // Custom event on December 15

          const notificationId = 'event_73';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Financial Modelling Training, reporting and revenue management',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Financial Modelling Training, reporting and revenue management', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-16') {
          // Custom event on December 15

          const notificationId = 'event_74';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'ICAN Conference/ANAN MCPE @ Abuja',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-16T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'ICAN Conference/ANAN MCPE @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-20') {
          // Custom event on December 15

          const notificationId = 'event_75';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'World Refugees Day on 20th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: ' World Refugees Day on 20th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-30') {
          // Custom event on December 15

          const notificationId = 'event_76';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'World Day against Human Trafficking on the 30th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-30T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'World Day against Human Trafficking on the 30th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-19') {
          // Custom event on December 15

          const notificationId = 'event_77';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Enrolment of Rural Economic Shock Response Cash Transfer (ESR-CT) Beneficiaries / Commencement of  ESR-CT and Regular cash transfer',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Enrolment of Rural Economic Shock Response Cash Transfer (ESR-CT) Beneficiaries / Commencement of  ESR-CT and Regular cash transfer', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-14') {
          // Custom event on December 15

          const notificationId = 'event_78';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Launch of the NCTO (CCT) Roadmap in collaboration with the World Bank',
              height: 50,
            });
            const eventDate = new Date('2023-07-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Launch of the NCTO (CCT) Roadmap in collaboration with the World Bank', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-04') {
          // Custom event on December 15

          const notificationId = 'event_79';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Innovation and Development Workshop',
              height: 50,
            });
            const eventDate = new Date('2023-08-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Innovation and Development Workshop', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-22') {
          // Custom event on December 15

          const notificationId = 'event_80';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Development partners group forum in collaboration with World Bank',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Development partners group forum in collaboration with World Bank', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-20') {
          // Custom event on December 15

          const notificationId = 'event_81';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'World Refugee Day Celebration on the 20th',
              height: 50,
            });
            const eventDate = new Date('2023-06-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'World Refugee Day Celebration on the 20th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-13') {
          // Custom event on December 15

          const notificationId = 'event_82';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
              height: 50,
            });
            const eventDate = new Date('2023-07-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-09') {
          // Custom event on December 15

          const notificationId = 'event_83';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide ',
              height: 50,
            });
            const eventDate = new Date('2023-08-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-19') {
          // Custom event on December 15

          const notificationId = 'event_84';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'World Humanitarian Day on the 19th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-04') {
          // Custom event on December 15

          const notificationId = 'event_85';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-20') {
          // Custom event on December 15

          const notificationId = 'event_86';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-10') {
          // Custom event on December 15

          const notificationId = 'event_87';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
              height: 50,
            });
            const eventDate = new Date('2023-10-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-19') {
          // Custom event on December 15

          const notificationId = 'event_88';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            const eventDate = new Date('2023-10-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-13') {
          // Custom event on December 15

          const notificationId = 'event_89';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day for Disaster Risk Reduction ',
              height: 50,
            });
            const eventDate = new Date('2023-10-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'International Day for Disaster Risk Reduction ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-07') {
          // Custom event on December 15

          const notificationId = 'event_90';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Medical and Health Outreach in identifies IDP locations Nationwide',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Medical and Health Outreach in identifies IDP locations Nationwide', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-09') {
          // Custom event on December 15

          const notificationId = 'event_91';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            const eventDate = new Date('2023-11-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-18') {
          // Custom event on December 15

          const notificationId = 'event_92';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'National IDPs Day Refugee Appeal Board',
              height: 50,
            });
            const eventDate = new Date('2023-11-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'National IDPs Day Refugee Appeal Board ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-28') {
          // Custom event on December 15

          const notificationId = 'event_93';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Community Sensitization Programme on WASH, Nutrition, SGBV, Education and Psychosocial Counselling',
              height: 50,
            });
            const eventDate = new Date('2023-11-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Community Sensitization Programme on WASH, Nutrition, SGBV, Education and Psychosocial Counselling', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-05') {
          // Custom event on December 15

          const notificationId = 'event_94';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos  ',
              height: 50,
            });
            const eventDate = new Date('2023-12-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sittings of the Eligibility Committee for Refugees (E.C) @ Abuja / Lagos ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-09') {
          // Custom event on December 15

          const notificationId = 'event_95';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Federation of Public Service Games',
              height: 50,
            });
            const eventDate = new Date('2023-12-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Federation of Public Service Games', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-18') {
          // Custom event on December 15

          const notificationId = 'event_96';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Migrants Day (National Migration Dialogue) on the 18th',
              height: 50,
            });
            const eventDate = new Date('2023-12-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Migrants Day (National Migration Dialogue) on the 18th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-13') {
          // Custom event on December 15

          const notificationId = 'event_97';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Albinism Day in collaboration with the Albinism Association of Nigeria on the 13th',
              height: 50,
            });
            const eventDate = new Date('2023-06-13T10:20:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Albinism Day in collaboration with the Albinism Association of Nigeria on the 13th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-19') {
          // Custom event on December 15

          const notificationId = 'event_98';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day for the Elimination of Sexual Violence in Conflict on the 19th ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Day for the Elimination of Sexual Violence in Conflict on the 19th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-23') {
          // Custom event on December 15

          const notificationId = 'event_99';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'National Summit on Accessibility and Launching of National Accessibility Regulation on the 23rd',
              height: 50,
            });
            const eventDate = new Date('2023-07-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'National Summit on Accessibility and Launching of National Accessibility Regulation on the 23rd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-19') {
          // Custom event on December 15

          const notificationId = 'event_100';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Week for the Deaf in collaboration with the Nigerian National Association of the Deaf from 19th – 25th ',
              height: 50,
            });
            const eventDate = new Date('2023-09-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Week for the Deaf in collaboration with the Nigerian National Association of the Deaf from 19th – 25th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-05') {
          // Custom event on December 15

          const notificationId = 'event_101';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'White Cane Day in collaboration with the National Association of the Blind on the 5th ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'White Cane Day in collaboration with the National Association of the Blind on the 5th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-25') {
          // Custom event on December 15

          const notificationId = 'event_102';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '16 Days of Activism from the 25th',
              height: 50,
            });
            const eventDate = new Date('2023-11-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: '16 Days of Activism from the 25th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-03') {
          // Custom event on December 15

          const notificationId = 'event_103';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day for Persons with Disabilities on the 3rd',
              height: 50,
            });
            const eventDate = new Date('2023-12-01=3T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Day for Persons with Disabilities on the 3rd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_104';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Elder Abuse Awareness Day on the 15th ',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Elder Abuse Awareness Day on the 15th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-22') {
          // Custom event on December 15

          const notificationId = 'event_105';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Launch Of National Support Network For Older Persons – Stop Discrimination Campaign on the 22nd ',
              height: 50,
            });
            const eventDate = new Date('2023-06-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Launch Of National Support Network For Older Persons – Stop Discrimination Campaign on the 22nd ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-01') {
          // Custom event on December 15

          const notificationId = 'event_106';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Launch of the National Multi-Indicator survey on Ageing – NSCC/NBS/UN DESA Fieldwork on the 1st',
              height: 50,
            });
            const eventDate = new Date('2023-07-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Launch of the National Multi-Indicator survey on Ageing – NSCC/NBS/UN DESA Fieldwork on the 1st', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-06') {
          // Custom event on December 15

          const notificationId = 'event_107';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'National Workshop on Ageing Policy, Planning and Implementation for State Directors of social Welfare from 6th - 7th ',
              height: 50,
            });
            const eventDate = new Date('2023-07-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'National Workshop on Ageing Policy, Planning and Implementation for State Directors of social Welfare from 6th - 7th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-01') {
          // Custom event on December 15

          const notificationId = 'event_108';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NSCC-UN DESA 4- Day Workshop on Drafting Policy Guidelines, Care Competency Certification and Regulatory Frameworks on establishment and administration of domiciliary care and other care facilities from 1st – 4th',
              height: 50,
            });
            const eventDate = new Date('2023-08-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NSCC-UN DESA 4- Day Workshop on Drafting Policy Guidelines, Care Competency Certification and Regulatory Frameworks on establishment and administration of domiciliary care and other care facilities from 1st – 4th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-10') {
          // Custom event on December 15

          const notificationId = 'event_109';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '2nd Edition of National Stakeholders Consultative Forum and Launch of Results Framework on the 10th',
              height: 50,
            });
            const eventDate = new Date('2023-08-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    '2nd Edition of National Stakeholders Consultative Forum and Launch of Results Framework on the 10th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-05') {
          // Custom event on December 15

          const notificationId = 'event_110';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Launch of AGE-Watch Index and Sector Ranking on Age/Disability Friendliness on the 5th ',
              height: 50,
            });
            const eventDate = new Date('2023-09-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Launch of AGE-Watch Index and Sector Ranking on Age/Disability Friendliness on the 5th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-05') {
          // Custom event on December 15

          const notificationId = 'event_111';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'UN General Assembly on the 5th',
              height: 50,
            });
            const eventDate = new Date('2023-09-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'UN General Assembly on the 5th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-01') {
          // Custom event on December 15

          const notificationId = 'event_112';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International day of Older Persons on the 1st ',
              height: 50,
            });
            const eventDate = new Date('2023-10-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'International day of Older Persons on the 1st ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-05') {
          // Custom event on December 15

          const notificationId = 'event_113';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'National Day of Older Persons on the 5th',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'National Day of Older Persons on the 5th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-13') {
          // Custom event on December 15

          const notificationId = 'event_114';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Hosting Of Grey and Vintage Fair - Promoting Market For Older Persons Livelihood Ventures  in partnership with SMEDAN on the 13th ',
              height: 50,
            });
            const eventDate = new Date('2023-11-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Hosting Of Grey and Vintage Fair - Promoting Market For Older Persons Livelihood Ventures  in partnership with SMEDAN on the 13th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-06') {
          // Custom event on December 15

          const notificationId = 'event_115';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '2nd Presidential Summit on Ageing and Awards on the 6th ',
              height: 50,
            });
            const eventDate = new Date('2023-12-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    '2nd Presidential Summit on Ageing and Awards on the 6th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-13') {
          // Custom event on December 15

          const notificationId = 'event_116';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Convocation of Service Providers forum ',
              height: 50,
            });
            const eventDate = new Date('2023-06-13T10:40:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Convocation of Service Providers forum', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-21') {
          // Custom event on December 15

          const notificationId = 'event_117';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Draft review of Relief Intervention Handbook @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-06-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Draft review of Relief Intervention Handbook @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-12') {
          // Custom event on December 15

          const notificationId = 'event_118';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Staff Training Programme @ Abuja',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Annual Staff Training Programme @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-22') {
          // Custom event on December 15

          const notificationId = 'event_119';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations @ Abuja',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization of Railway Operatives on safety and security management during Emergency Situations @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-15') {
          // Custom event on December 15

          const notificationId = 'event_120';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Flood Consultative Workshop @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-09-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Flood Consultative Workshop @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-09') {
          // Custom event on December 15

          const notificationId = 'event_121';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization of Railway Operatives on safety and security management during Emergency Situations ',
              height: 50,
            });
            const eventDate = new Date('2023-11-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization of Railway Operatives on safety and security management during Emergency Situations', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-19') {
          // Custom event on December 15

          const notificationId = 'event_122';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Technical Retreat/experience sharing for Zonal, Territorial and Operations Office Coordinators @ Abuja @ Abuja ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Technical Retreat/experience sharing for Zonal, Territorial and Operations Office Coordinators @ Abuja @ Abuja ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-19') {
          // Custom event on December 15

          const notificationId = 'event_123';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-06-28') {
          // Custom event on December 15

          const notificationId = 'event_124';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-07-04') {
          // Custom event on December 15

          const notificationId = 'event_125';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-07-12') {
          // Custom event on December 15

          const notificationId = 'event_126';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-07-20') {
          // Custom event on December 15

          const notificationId = 'event_127';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-07-27') {
          // Custom event on December 15

          const notificationId = 'event_128';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-08-19') {
          // Custom event on December 15

          const notificationId = 'event_129';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-08-22') {
          // Custom event on December 15

          const notificationId = 'event_130';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-08-28') {
          // Custom event on December 15

          const notificationId = 'event_131';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-08-31') {
          // Custom event on December 15

          const notificationId = 'event_132';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-09-04') {
          // Custom event on December 15

          const notificationId = 'event_133';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-09-20') {
          // Custom event on December 15

          const notificationId = 'event_134';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-10-05') {
          // Custom event on December 15

          const notificationId = 'event_135';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-10-18') {
          // Custom event on December 15

          const notificationId = 'event_136';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-10-31') {
          // Custom event on December 15

          const notificationId = 'event_137';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-11-02') {
          // Custom event on December 15

          const notificationId = 'event_138';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-11-07') {
          // Custom event on December 15

          const notificationId = 'event_139';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-11-20') {
          // Custom event on December 15

          const notificationId = 'event_140';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-11-29') {
          // Custom event on December 15

          const notificationId = 'event_141';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-12-10') {
          // Custom event on December 15

          const notificationId = 'event_142';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-12-14') {
          // Custom event on December 15

          const notificationId = 'event_143';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-12-19') {
          // Custom event on December 15

          const notificationId = 'event_144';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-09-23') {
          // Custom event on December 15

          const notificationId = 'event_145';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Nationwide End of N-Power Batch C2 Graduate Programme on the 23rd ',
              height: 50,
            });
            const eventDate = new Date('2023-09-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  importance: Importance.HIGH,
                  channelId: 'fmha_events',
                  message:
                    'Nationwide End of N-Power Batch C2 Graduate Programme on the 23rd ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-23') {
          // Custom event on December 15

          const notificationId = 'event_146';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Nationwide End of N-Power Batch C2 Graduate Programme on the 23rd ',
              height: 50,
            });
            const eventDate = new Date('2023-09-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  importance: Importance.HIGH,
                  channelId: 'fmha_events',
                  message:
                    'Nationwide End of N-Power Batch C2 Graduate Programme on the 23rd ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_147';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-17') {
          // Custom event on December 15

          const notificationId = 'event_148';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-06-17T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-19') {
          // Custom event on December 15

          const notificationId = 'event_149';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Management meetings with heads of agencies',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Management meetings with heads of agencies', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-21') {
          // Custom event on December 15

          const notificationId = 'event_150';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
            const eventDate = new Date('2023-06-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-24') {
          // Custom event on December 15

          const notificationId = 'event_151';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'MDAs Quarterly Performance Review',
              height: 50,
            });
            const eventDate = new Date('2023-06-24T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'MDAs Quarterly Performance Review', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-03') {
          // Custom event on December 15

          const notificationId = 'event_152';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Statutory Bi-lateral and Multi-lateral engagement – 3rd Quarter, 2023',
              height: 50,
            });
            const eventDate = new Date('2023-07-03T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Annual Statutory Bi-lateral and Multi-lateral engagement – 3rd Quarter, 2023', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-07') {
          // Custom event on December 15

          const notificationId = 'event_153';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
            const eventDate = new Date('2023-07-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production of memorandum of the Ministry and its Agencies – As the need arises', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-01') {
          // Custom event on December 15

          const notificationId = 'event_154';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'National Council on Humanitarian Affairs ',
              height: 50,
            });
            const eventDate = new Date('2023-08-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'National Council on Humanitarian Affairs', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-03') {
          // Custom event on December 15

          const notificationId = 'event_155';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-08-03T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-07') {
          // Custom event on December 15

          const notificationId = 'event_156';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Engagement with Stakeholders in the Development of short, medium, and long-term deliverables aligned with strategic pillars and thematic areas of the Roadmap ',
              height: 50,
            });
            const eventDate = new Date('2023-08-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Engagement with Stakeholders in the Development of short, medium, and long-term deliverables aligned with strategic pillars and thematic areas of the Roadmap', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-09') {
          // Custom event on December 15

          const notificationId = 'event_157';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register',
              height: 50,
            });
            const eventDate = new Date('2023-08-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Tracking of updates for the development and population of the Unified National Social Register', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-06') {
          // Custom event on December 15

          const notificationId = 'event_158';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Development Plan Implementation Unit on the 6th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-09-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Development Plan Implementation Unit on the 6th @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-10') {
          // Custom event on December 15

          const notificationId = 'event_159';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
            const eventDate = new Date('2023-09-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Advocacy and Coordination Visits to States without Humanitarian Ministry ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-17') {
          // Custom event on December 15

          const notificationId = 'event_160';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Bi-annual Policy and KPIs tracking and coordination meetings with the Ministry and Agencies ',
              height: 50,
            });
            const eventDate = new Date('2023-09-17T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Bi-annual Policy and KPIs tracking and coordination meetings with the Ministry and Agencies ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-19') {
          // Custom event on December 15

          const notificationId = 'event_161';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Conference of NGOs ',
              height: 50,
            });
            const eventDate = new Date('2023-09-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Annual Conference of NGOs', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-21') {
          // Custom event on December 15

          const notificationId = 'event_162';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)',
              height: 50,
            });
            const eventDate = new Date('2023-09-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-23') {
          // Custom event on December 15

          const notificationId = 'event_163';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Management meetings with heads of agencies    ',
              height: 50,
            });
            const eventDate = new Date('2023-09-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Management meetings with heads of agencies  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-25') {
          // Custom event on December 15

          const notificationId = 'event_164';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies ',
              height: 50,
            });
            const eventDate = new Date('2023-09-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-28') {
          // Custom event on December 15

          const notificationId = 'event_165';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'MDAs Quarterly Performance Review ',
              height: 50,
            });
            const eventDate = new Date('2023-09-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'MDAs Quarterly Performance Review', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-01') {
          // Custom event on December 15

          const notificationId = 'event_166';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Management Retreat',
              height: 50,
            });
            const eventDate = new Date('2023-10-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Management Retreat', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-05') {
          // Custom event on December 15

          const notificationId = 'event_167';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Coordination meeting and target setting for NGOs',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Annual Coordination meeting and target setting for NGOs', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-09') {
          // Custom event on December 15

          const notificationId = 'event_168';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Training and Workshops on Monitoring and Evaluation in collaboration with the Federal Ministry of Finance, Budget, and National Planning.',
              height: 50,
            });
            const eventDate = new Date('2023-10-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Training and Workshops on Monitoring and Evaluation in collaboration with the Federal Ministry of Finance, Budget, and National Planning.', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-13') {
          // Custom event on December 15

          const notificationId = 'event_169';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises ',
              height: 50,
            });
            const eventDate = new Date('2023-10-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production of memorandum of the Ministry and its Agencies – As the need arises', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-01') {
          // Custom event on December 15

          const notificationId = 'event_170';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Advocacy and Coordination Visits to States without Humanitarian Ministry ',
              height: 50,
            });
            const eventDate = new Date('2023-11-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Advocacy and Coordination Visits to States without Humanitarian Ministry', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-05') {
          // Custom event on December 15

          const notificationId = 'event_171';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Annual Sector Performance Assessment meeting',
              height: 50,
            });
            const eventDate = new Date('2023-11-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Annual Sector Performance Assessment meeting', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-08') {
          // Custom event on December 15

          const notificationId = 'event_172';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones',
              height: 50,
            });
            const eventDate = new Date('2023-11-08T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Baseline Studies on Policies, Programmes, and Projects of the Ministry in Six (6)  geopolitical zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-15') {
          // Custom event on December 15

          const notificationId = 'event_173';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sector Performance Planning Retreat',
              height: 50,
            });
            const eventDate = new Date('2023-11-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Sector Performance Planning Retreat', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-06') {
          // Custom event on December 15

          const notificationId = 'event_174';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Development Plan Implementation Unit on the 6th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-12-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Development Plan Implementation Unit on the 6th @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-08') {
          // Custom event on December 15

          const notificationId = 'event_175';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU)  ',
              height: 50,
            });
            const eventDate = new Date('2023-12-08T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Report of the Ministerial mandate to the Central Coordinating Delivery Unit (CCDU) ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-12') {
          // Custom event on December 15

          const notificationId = 'event_176';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Management meetings with heads of agencies ',
              height: 50,
            });
            const eventDate = new Date('2023-12-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Management meetings with heads of agencies ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-13') {
          // Custom event on December 15

          const notificationId = 'event_177';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies',
              height: 50,
            });
            const eventDate = new Date('2023-12-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Sector Monitoring of Projects for the Ministry and its Agencies', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-18') {
          // Custom event on December 15

          const notificationId = 'event_178';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Tracking of updates for the development and population of the Unified National Social Register',
              height: 50,
            });
            const eventDate = new Date('2023-12-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Tracking of updates for the development and population of the Unified National Social Register', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-20') {
          // Custom event on December 15

          const notificationId = 'event_179';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Production of memorandum of the Ministry and its Agencies – As the need arises',
              height: 50,
            });
            const eventDate = new Date('2023-12-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production of memorandum of the Ministry and its Agencies – As the need arises', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-25') {
          // Custom event on December 15

          const notificationId = 'event_180';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'MDAs Quarterly Performance Review',
              height: 50,
            });
            const eventDate = new Date('2023-12-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'MDAs Quarterly Performance Review', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_181';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'MTB meeting for consideration of contracts',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'MTB meeting for consideration of contracts', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-19') {
          // Custom event on December 15

          const notificationId = 'event_182';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Submission of the MTB Extracts for HM’s concurrence',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Submission of the MTB Extracts for HM’s concurrence', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-27') {
          // Custom event on December 15

          const notificationId = 'event_183';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Issuance of Contract Award Letters',
              height: 50,
            });
            const eventDate = new Date('2023-06-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Issuance of Contract Award Letters', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-03') {
          // Custom event on December 15

          const notificationId = 'event_184';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Capacity Building on Public Sector Service Excellence from 3rd - 7th',
              height: 50,
            });
            const eventDate = new Date('2023-07-03T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Capacity Building on Public Sector Service Excellence from 3rd - 7th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-10') {
          // Custom event on December 15

          const notificationId = 'event_185';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th',
              height: 50,
            });
            const eventDate = new Date('2023-07-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Compilation and Submission of FCSSIP25 2nd Quarter (2023) template from 10th - 12th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-08') {
          // Custom event on December 15

          const notificationId = 'event_186';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th',
              height: 50,
            });
            const eventDate = new Date('2023-08-08T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Establishment of stakeholders Service Delivery Consultative Forum on Reforms from 8th - 10th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-04') {
          // Custom event on December 15

          const notificationId = 'event_187';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Capacity Building on Improving Organizational Performance from 4th - 8th ',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Capacity Building on Improving Organizational Performance from 4th - 8th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-09') {
          // Custom event on December 15

          const notificationId = 'event_188';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Celebration of 2023 Customer Service Week from 9th - 13th',
              height: 50,
            });
            const eventDate = new Date('2023-10-09T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Celebration of 2023 Customer Service Week from 9th - 13th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-16') {
          // Custom event on December 15

          const notificationId = 'event_189';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Capacity Building on Customer Experience Management from 16th - 20th ',
              height: 50,
            });
            const eventDate = new Date('2023-10-16T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Capacity Building on Customer Experience Management from 16th - 20th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-23') {
          // Custom event on December 15

          const notificationId = 'event_190';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th',
              height: 50,
            });
            const eventDate = new Date('2023-10-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Compilation and Submission of FCSSIP25 3rd Quarter (2023) template from 23rd - 25th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-06') {
          // Custom event on December 15

          const notificationId = 'event_191';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th',
              height: 50,
            });
            const eventDate = new Date('2023-11-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Service-Wide Service Exchange Programme for Servicom Officers from 6th - 10th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-13') {
          // Custom event on December 15

          const notificationId = 'event_192';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th  ',
              height: 50,
            });
            const eventDate = new Date('2023-11-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monitoring of SERVICOM compliance in the Departments and Agencies under the Ministry from 13th - 17th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-04') {
          // Custom event on December 15

          const notificationId = 'event_193';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th  ',
              height: 50,
            });
            const eventDate = new Date('2023-12-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Stakeholders Service Delivery/ Consultative Forum on Reforms and the impact of NSIP on the beneficiaries from 4th - 8th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_194';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T',
              height: 50,
            });
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Baseline indicators of the SDGs with the latest information after the experience of Covid-19 in collaboration with the NBS in the 36 States of the Federation and the F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-22') {
          // Custom event on December 15

          const notificationId = 'event_195';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones',
              height: 50,
            });
            const eventDate = new Date('2023-06-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Monitoring of Capital Budget Performance in conjunction with the Budget Office of the Federation in the Six (6) geo-political zones ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-29') {
          // Custom event on December 15

          const notificationId = 'event_196';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            const eventDate = new Date('2023-06-29T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-18') {
          // Custom event on December 15

          const notificationId = 'event_197';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-07-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-05') {
          // Custom event on December 15

          const notificationId = 'event_198';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'United Nations General Assembly Ion the 5th n New York',
              height: 50,
            });
            const eventDate = new Date('2023-09-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'United Nations General Assembly Ion the 5th n New York', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-06') {
          // Custom event on December 15

          const notificationId = 'event_199';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones  ',
              height: 50,
            });
            const eventDate = new Date('2023-09-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    '14 Days 3rd Quarter Monitoring and Evaluation Visits to OSSAP-SDGs Project Sites across the Six (6) geo-political zones ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-18') {
          // Custom event on December 15

          const notificationId = 'event_200';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones',
              height: 50,
            });
            const eventDate = new Date('2023-09-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    '10 Days joint Monitoring of Special Intervention projects in collaboration with the Federal Ministry of Finance (Special Duties) in the Six (6) geo-political zones ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-21') {
          // Custom event on December 15

          const notificationId = 'event_201';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-09-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-26') {
          // Custom event on December 15

          const notificationId = 'event_202';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            const eventDate = new Date('2023-09-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-05') {
          // Custom event on December 15

          const notificationId = 'event_203';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Conference on Population and Development in collaboration with the UNFPA in New York',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Conference on Population and Development in collaboration with the UNFPA in New York', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-11') {
          // Custom event on December 15

          const notificationId = 'event_204';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location',
              height: 50,
            });
            const eventDate = new Date('2023-11-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization and awareness raising on sexual reproductive health, child protection and financial literacy in identified IDP location', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-15') {
          // Custom event on December 15

          const notificationId = 'event_205';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)',
              height: 50,
            });
            const eventDate = new Date('2023-11-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'United Nations Framework Convention on Climate Change (COP 28) in Dubai (UAE)', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-01') {
          // Custom event on December 15

          const notificationId = 'event_206';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones',
              height: 50,
            });
            const eventDate = new Date('2023-12-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    '14 Days 4th Quarter Monitoring and Evaluation Visits to Project Sites across the Six (6) geo-political zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-15') {
          // Custom event on December 15

          const notificationId = 'event_207';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Inter-Ministerial Committee on SDGs meeting @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-12-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Inter-Ministerial Committee on SDGs meeting @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-18') {
          // Custom event on December 15

          const notificationId = 'event_208';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization of Corp Members during Orientation in the NYSC Camps across the country',
              height: 50,
            });
            const eventDate = new Date('2023-12-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization of Corp Members during Orientation in the NYSC Camps across the country', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-22') {
          // Custom event on December 15

          const notificationId = 'event_209';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State',
              height: 50,
            });
            const eventDate = new Date('2023-12-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Retreat for Management and Senior Staff in collaboration with UNDP in Lagos / Akwa Ibom State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-15') {
          // Custom event on December 15

          const notificationId = 'event_210';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'World Elder Abuse Awareness Day on the 15th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-04') {
          // Custom event on December 15

          const notificationId = 'event_211';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-07-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Capacity Building of Casework Officers / Counsellors from 4th – 8th @ Keffi, Nasarawa State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-18') {
          // Custom event on December 15

          const notificationId = 'event_212';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-07-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    ' Provision of psychosocial support to identified victims lost to their families and reconciliation with their families from 18th – 22nd @ Adamawa / Gombe States', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-16') {
          // Custom event on December 15

          const notificationId = 'event_213';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Day of African Child on the 16th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-16T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Day of African Child on the 16th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-20') {
          // Custom event on December 15

          const notificationId = 'event_214';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization and Awareness Creation on Sanitation and Hygiene in all the IDP camps from 20th – 21st @ Edo State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-23') {
          // Custom event on December 15

          const notificationId = 'event_215';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Widows Day on the 23rd in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Widows Day on the 23rd in the 36 States and F.C.T ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-25') {
          // Custom event on December 15

          const notificationId = 'event_216';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Matriculation Ceremony or students of Federal School of Social Work on the 25th @ Emene, Enugu State ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-01') {
          // Custom event on December 15

          const notificationId = 'event_217';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Skill Acquisition programmes for Inmates in Nigeria Correctional Centres (Prisons) from 1st – 5th @ Kano State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-15') {
          // Custom event on December 15

          const notificationId = 'event_218';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Mapping out of Destitute from 15th – 19th @ Kano State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Mapping out of Destitute from 15th – 19th @ Kano State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-28') {
          // Custom event on December 15

          const notificationId = 'event_219';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Meeting of State Directors of Social Welfare and other stakeholders on define Social Protection Floors from 28th – 31st @ Yobe State  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-12') {
          // Custom event on December 15

          const notificationId = 'event_220';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Youth Day on the 12th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Youth Day on the 12th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-05') {
          // Custom event on December 15

          const notificationId = 'event_221';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Economic Empowerment / Psycho-Social Support for Women with Vesico Vaginal Fistula (VVF) from 5th – 9th @ Kano State  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-11') {
          // Custom event on December 15

          const notificationId = 'event_222';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Empowerment of 600 Women in the North-East for effective integration from 11th – 14th in the North-East Geo-Political Zone', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-13') {
          // Custom event on December 15

          const notificationId = 'event_223';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'UN General Assembly (UNGA) on the 13th @ New York',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'UN General Assembly (UNGA) on the 13th @ New York', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-14') {
          // Custom event on December 15

          const notificationId = 'event_224';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization and Awareness Creation on the effect of Drugs on  Youths, Women, Men and Children on the 14th @ Nasarawa and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-21') {
          // Custom event on December 15

          const notificationId = 'event_225';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day for Peace and Justice on the 21st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Day for Peace and Justice on the 21st in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-25') {
          // Custom event on December 15

          const notificationId = 'event_226';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Medical Outreach / Welfare services for IDPs, Women and Children on 25th @ F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-04') {
          // Custom event on December 15

          const notificationId = 'event_227';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-04T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Distribution of aids and appliances such as walking sticks, wheel chairs, crutches (elbow & armpit) e.t.c to older persons on the 4th in the 36 States and F.C.T ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-05') {
          // Custom event on December 15

          const notificationId = 'event_228';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Celebration of International Day of Older Persons on the 5th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-12') {
          // Custom event on December 15

          const notificationId = 'event_229';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Day against Drugs and Substance Abuse / illicit trafficking on the 12th @ F.C.T  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-16') {
          // Custom event on December 15

          const notificationId = 'event_230';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-16T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Assessment visits of Social Services delivery in States from 16th – 19th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-24') {
          // Custom event on December 15

          const notificationId = 'event_231';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-24T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Capacity Building on Income generating activities for families from 24th – 28th @ Nasarawa & F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-06') {
          // Custom event on December 15

          const notificationId = 'event_232';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Empowerment of 600 Youths in North-West for effective integration from 6th – 9th in the North-West Geo-Political Zones', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-13') {
          // Custom event on December 15

          const notificationId = 'event_233';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Conference of Directors, Social Development / Welfare in the Federation from 13th – 15th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-27') {
          // Custom event on December 15

          const notificationId = 'event_234';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Awareness creation on Nigeria (Social Work Regulatory Act 2022) from 27th – 30th in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-01') {
          // Custom event on December 15

          const notificationId = 'event_235';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'World Aids Day on the 1st in the 36 States and F.C.T',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'World Aids Day on the 1st in the 36 States and F.C.T', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-05') {
          // Custom event on December 15

          const notificationId = 'event_236';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Economic Empowerment programme for Older Persons and the IDPs from 5th – 9th @ Kano, Bauchi and Katsina States', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-12') {
          // Custom event on December 15

          const notificationId = 'event_237';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Economic Empowerment Programme for Juvenile Delinquents in Borstal Homes and approved schools from 12th – 16th @ Jigawa, Gombe and Adamawa States.', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-18') {
          // Custom event on December 15

          const notificationId = 'event_238';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Economic Empowerment Programme for Destitute and street youths from 18th – 23rd @ Katsina State.', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-25') {
          // Custom event on December 15

          const notificationId = 'event_239';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Week of the Deaf (Last Week) from 25th to 29th September',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Week of the Deaf (Last Week) from 25th to 29th September', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-26') {
          // Custom event on December 15

          const notificationId = 'event_240';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Week of the Deaf (Last Week) from 25th to 29th September',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Week of the Deaf (Last Week) from 25th to 29th September', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-27') {
          // Custom event on December 15

          const notificationId = 'event_241';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Week of the Deaf (Last Week) from 25th to 29th September',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-27T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Week of the Deaf (Last Week) from 25th to 29th September', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-28') {
          // Custom event on December 15

          const notificationId = 'event_242';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Week of the Deaf (Last Week) from 25th to 29th September',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-28T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Week of the Deaf (Last Week) from 25th to 29th September', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-29') {
          // Custom event on December 15

          const notificationId = 'event_243';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Week of the Deaf (Last Week) from 25th to 29th September',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-29T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Week of the Deaf (Last Week) from 25th to 29th September', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-26') {
          // Custom event on December 15

          const notificationId = 'event_246';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Rehabilitation Programme on Drugs and Substance abuse: Rehabilitation and Psychosocial Support on the 26th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Rehabilitation Programme on Drugs and Substance abuse: Rehabilitation and Psychosocial Support on the 26th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-30') {
          // Custom event on December 15

          const notificationId = 'event_247';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Creation of Charity and Endowment Fund',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-30T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Creation of Charity and Endowment Fund', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-21') {
          // Custom event on December 15

          const notificationId = 'event_248';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Sensitization Lecture on Kidnapping, Hostage taking and Security Drills @ the Nigerian Army Resource Centre',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-21T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Sensitization Lecture on Kidnapping, Hostage taking and Security Drills @ the Nigerian Army Resource Centre', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-15') {
          // Custom event on December 15

          const notificationId = 'event_249';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Awareness on Non-State Armed Groups (NSAGs) and the Exploitation of Juveniles in Conflict situations @ Borno State',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Awareness on Non-State Armed Groups (NSAGs) and the Exploitation of Juveniles in Conflict situations @ Borno State', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-19') {
          // Custom event on December 15

          const notificationId = 'event_250';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Special cooperate programmes on Women empowerment and peacebuilding in fragile Zones (IDPs and Returning Communities) @ BAY States',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Special cooperate programmes on Women empowerment and peacebuilding in fragile Zones (IDPs and Returning Communities) @ BAY States', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-13') {
          // Custom event on December 15

          const notificationId = 'event_251';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Survey of Victims of Terrorism (VoT)',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Survey of Victims of Terrorism (VoT)', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-11') {
          // Custom event on December 15

          const notificationId = 'event_252';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'State Actos (Federal, State & LGA’s) Coordination and liaison',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'State Actos (Federal, State & LGA’s) Coordination and liaison', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-19') {
          // Custom event on December 15

          const notificationId = 'event_253';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'World Humanitarian Day on the 19th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-19T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'World Humanitarian Day on the 19th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-30') {
          // Custom event on December 15

          const notificationId = 'event_254';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day for the Disappear on the 30th',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-08-30T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'International Day for the Disappear on the 30th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-05') {
          // Custom event on December 15

          const notificationId = 'event_255';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'United Nations General Assembly in New York',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-05T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'United Nations General Assembly in New York', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-09-12') {
          // Custom event on December 15

          const notificationId = 'event_256';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Executive Committee meeting of the United Nations High Commission on Refugees in New York ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-09-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Executive Committee meeting of the United Nations High Commission on Refugees in New York ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-10-13') {
          // Custom event on December 15

          const notificationId = 'event_257';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'International Day for Disaster Risk Reduction on the 13th ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-10-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'International Day for Disaster Risk Reduction on the 13th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-01') {
          // Custom event on December 15

          const notificationId = 'event_258';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'National Migration Dialogue',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-01T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'National Migration Dialogue', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-11-06') {
          // Custom event on December 15

          const notificationId = 'event_259';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'United Nations Climate Change 2023 (Cop 28)',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-11-06T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'United Nations Climate Change 2023 (Cop 28)', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-13') {
          // Custom event on December 15

          const notificationId = 'event_260';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-13T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-14') {
          // Custom event on December 15

          const notificationId = 'event_261';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva  ',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-05') {
          // Custom event on December 15

          const notificationId = 'event_262';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-06-05T17:06:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-12-15') {
          // Custom event on December 15

          const notificationId = 'event_263';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-12-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Global Review Forum of the Global Compact on Refugees from 13th – 15th @ Geneva', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-07-27') {
          // Custom event on December 15

          const notificationId = 'event_264';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-05-08') {
          // Custom event on December 15

          const notificationId = 'event_265';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-08T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NEDC: Ground-Breaking for Ngom-Zabarmari-Gongulong-Kajari Phase I &II on the 8th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-10') {
          // Custom event on December 15

          const notificationId = 'event_266';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NSCC: Launch of Report on Assessment of ICOPE GAPs in Primary Health Care System on the 10th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-10T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NSCC: Launch of Report on Assessment of ICOPE GAPs in Primary Health Care System on the 10th', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-08-28') {
          // Custom event on December 15

          const notificationId = 'event_267';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
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
                  id: notificationId,
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
          }
        } else if (strTime === '2023-05-15') {
          // Custom event on December 15

          const notificationId = 'event_268';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'RC&SI: Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ',
              height: 50,
            });
            const eventDate = new Date('2023-05-14T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'RC&SI: Opening Competition on memorization of FCSSIP25 and its enablers from 15th – 17th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-22') {
          // Custom event on December 15

          const notificationId = 'event_269';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'RC&SI: Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'RC&SI: Sensitization Workshop on Innovation, Anti – corruption & Transparency from 22nd – 26th ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-15') {
          // Custom event on December 15

          const notificationId = 'event_270';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NAPTIP: Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-05-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NAPTIP: Inaugural Joint Technical Working Group meeting to design the work plan for the implementation of the Nigeria-Gambia MoU to Prevent, Suppress and Punish Trafficking in Persons Especially Women and Children in collaboration with Gambia and International partners from 15th – 16th @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-22') {
          // Custom event on December 15

          const notificationId = 'event_271';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NEDC: Handover of Rapid Response Intervention (RRI) Projects in Borno on the 22nd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-23') {
          // Custom event on December 15

          const notificationId = 'event_272';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia',
              height: 50,
            });
            const eventDate = new Date('2023-05-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    '7th Global Platform for Disaster Risk Reduction from 23rd – 28th in Bali, Indonesia', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-05-23') {
          // Custom event on December 15

          const notificationId = 'event_273';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NCPWD: National Summit on Access to Justice for PWDs on 23rd',
              height: 50,
            });
            const eventDate = new Date('2023-05-23T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NCPWD: National Summit on Access to Justice for PWDs on 23rd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-02') {
          // Custom event on December 15

          const notificationId = 'event_274';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: Sensitization on drug abuse on the 2nd',
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
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'NEDC: Sensitization on drug abuse on the 2nd', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-05') {
          // Custom event on December 15

          const notificationId = 'event_275';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'NEDC: Handover of NEDC Mass Housing Units on the 5th @ Gombe  ',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T17:15:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'NEDC: Handover of NEDC Mass Housing Units on the 5th @ Gombe   ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else if (strTime === '2023-06-07') {
          // Custom event on December 15

          const notificationId = 'event_276';

          // Check if the notification is already scheduled
          if (!scheduledNotifications.includes(notificationId)) {
            scheduledNotifications.push(notificationId);
            updatedItems[strTime].push({
              name: 'PRS: Development Plan Implementation Unit on the 7th @ Abuja',
              height: 50,
            });
            const eventDate = new Date('2023-06-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  id: notificationId,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'PRS: Development Plan Implementation Unit on the 7th @ Abuja', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          }
        } else {
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            updatedItems[strTime].push({
              name: 'No Event on ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      setItems(updatedItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card style={{backgroundColor: '#fff'}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Icon name="square" size={20} color="#99dd7a" />
                <Text style={{width: 200, color: '#000'}}>{item.name}</Text>
              </View>
              <Avatar.Text label="F" style={{backgroundColor: '#99dd7a'}} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        scheduledNotifications={scheduledNotifications}
        setScheduledNotifications={setScheduledNotifications}
      />
    </View>
  );
};

export default Home;
