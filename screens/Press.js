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

const Press = ({navigation}) => {
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
          if (strTime === '2023-04-26') {
            // Custom event on February
            items[strTime].push({
              name: 'Press Conference for the Honourable Minister',
              height: 50,
            });
            // Schedule local notification for April 15
            const eventDate = new Date('2023-04-26T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Press Conference for the Honourable Minister', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            const eventDate = new Date('2023-05-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Executive Media Chat between the Honourable Minister and Editors',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Executive Media Chat between the Honourable Minister and Editors', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-05-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Placement of advertisement and announcement in the media',
              height: 50,
            });
            const eventDate = new Date('2023-05-20T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Placement of advertisement and announcement in the media', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-05') {
            // Custom event on December 15
            items[strTime].push({
              name: ' testing notifIcation',
              height: 50,
            });
            const eventDate = new Date('2023-06-05T13:30:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: ' Please work i don tire', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            const eventDate = new Date('2023-06-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the Ministry’s Quarterly magazine',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Production of the Ministry’s Quarterly magazine', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents    ',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-06-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Training of the press/media team in social media application',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Training of the press/media team in social media application', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Press Conference for the Honourable Minister  ',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Press Conference for the Honourable Minister', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-10') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV  ',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV  ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Effective messaging techniques for the Ministry and Agencies for Hon. Minister, Perm. Secretary, Directors, Chief Executive Officers of Agencies and media officers of the Ministry and its Agencies',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Effective messaging techniques for the Ministry and Agencies for Hon. Minister, Perm. Secretary, Directors, Chief Executive Officers of Agencies and media officers of the Ministry and its Agencies', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-07-25') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Hon. Minister’s facility tour of IDP/Refugee Camps, Old People’s Home, Skill Acquisition Centres and Orphanages in the six (6) geo-political zones.',
              height: 50,
            });
            const eventDate = new Date('2023-07-25T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Hon. Minister’s facility tour of IDP/Refugee Camps, Old People’s Home, Skill Acquisition Centres and Orphanages in the six (6) geo-political zones.', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-08-11') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            const eventDate = new Date('2023-08-11T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-08-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Placement of advertisement and announcement in the media',
              height: 50,
            });
            const eventDate = new Date('2023-08-18T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Placement of advertisement and announcement in the media', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-09-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV ',
              height: 50,
            });
            const eventDate = new Date('2023-09-07T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-09-12') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the Ministry’s Quarterly magazine',
              height: 50,
            });
            const eventDate = new Date('2023-09-12T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Production of the Ministry’s Quarterly magazine', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-09-22') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents ',
              height: 50,
            });
            const eventDate = new Date('2023-09-22T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-10-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV  ',
              height: 50,
            });
            const eventDate = new Date('2023-10-15T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV   ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-10-19') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Placement of advertisement and announcement in the media ',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Placement of advertisement and announcement in the media ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-07') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Press Conference for the Honourable Minister ',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Press Conference for the Honourable Minister', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-17') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
              height: 50,
            });
            const eventDate = new Date('2023-11-17T09:00:00');
            if (eventDate > now) {
              const notificationDate = new Date(
                eventDate.getTime() - 24 * 60 * 60 * 1000,
              );
              if (!isNaN(notificationDate.getTime())) {
                PushNotification.localNotificationSchedule({
                  allowWhileIdle: true,
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-11-27') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Retreat for press/media team and humanitarian correspondents in Nasarawa State',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Retreat for press/media team and humanitarian correspondents in Nasarawa State ', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-08') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Annual / End of year Ministerial Press Briefing for 2023',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Annual / End of year Ministerial Press Briefing for 2023', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-15') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Production and airing of documentary on the activities of the Ministry on the electronic media on NTA and Channels TV', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-18') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Production of the Ministry’s Quarterly magazine',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message: 'Production of the Ministry’s Quarterly magazine', // Notification message
                  date: notificationDate, // Date and time of the notification
                });
              } else {
                console.log('Invalid notification date:', notificationDate);
              }
            }
          } else if (strTime === '2023-12-20') {
            // Custom event on December 15
            items[strTime].push({
              name: 'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents',
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
                  channelId: 'fmhadmsd-events',
                  channelName: 'FMHADMSD Events',
                  message:
                    'Quarterly Breakfast Forum between the Hon. Minister and the Humanitarian correspondents', // Notification message
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
              <Avatar.Text label="P" style={{backgroundColor: '#99dd7a'}} />
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

export default Press;
