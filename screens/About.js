/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Avatar} from 'react-native-paper';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const About = () => {
  return (
    <View>
      <ScrollView style={{marginBottom: 80}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 30,
          }}>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: 24,
              color: '#000',
            }}>
            About FMHA
          </Text>
          <Image
            source={require('../resources/user.png')}
            style={{width: 50, height: 50, borderRadius: 10}}
          />
        </View>
        <View style={{paddingHorizontal: 20, marginBottom: 10}}>
          <Card
            style={{
              backgroundColor: '#fff',
            }}>
            <Card.Content>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#000',
                }}>
                The Federal Ministry of Humanitarian Affairs, Disaster
                Management and Social Development was established on Wednesday
                August 21st, 2019 by an Executive pronouncement by the President
                and Commander in Chief of the Armed Forces of Nigeria, H.E.,
                Muhammadu Buhari GCFR at the inauguration of Ministers for the
                Federal Republic of Nigeria. {'\n'} {'\n'}Our Objective is to
                develop and align all the relevant policies that can guide the
                effective coordination of all stakeholders (and especially the
                core focus areas of the Ministry) towards creating a
                long-lasting value system and strengthening of the institution.
              </Text>
            </Card.Content>
          </Card>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: 24,
              color: '#000',
              marginTop: 10,
            }}>
            Our Mandate
          </Text>
          <Card
            style={{
              backgroundColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Card.Content>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#000',
                }}>
                To develop humanitarian policies and provide effective
                coordination of National and International humanitarian
                interventions; ensure strategic disaster mitigation,
                preparedness and response; and manage the formulation and
                implementation of fair focused social inclusion and protection
                programmes in Nigeria.
              </Text>
            </Card.Content>
          </Card>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: 24,
              color: '#000',
              marginTop: 10,
            }}>
            Our Vision
          </Text>
          <Card
            style={{
              backgroundColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Card.Content>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#000',
                }}>
                To have social protection systems that are proactive, humane,
                inclusive and sustainable for the improvement and general
                welfare of the people.
              </Text>
            </Card.Content>
          </Card>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: 24,
              color: '#000',
              marginTop: 10,
            }}>
            Our Mission
          </Text>
          <Card
            style={{
              backgroundColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Card.Content>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#000',
                }}>
                To coordinate, strengthen and promote social systems in Nigeria
                by integrating best practices, mechanisms & solutions through
                effective utilization of data, research, and planning.
              </Text>
            </Card.Content>
          </Card>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: 24,
              color: '#000',
              marginTop: 10,
            }}>
            Our Core Values
          </Text>
          <Card
            style={{
              backgroundColor: '#fff',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Card.Content>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#000',
                }}>
                <Icon name="checkbox" color="#99dd7a" size={15} />
                Humane <Icon name="checkbox" color="#99dd7a" size={15} />
                Impartial & Neutral{' '}
                <Icon name="checkbox" color="#99dd7a" size={15} />
                Responsive & Reliable{' '}
                <Icon name="checkbox" color="#99dd7a" size={15} />
                Empathy & Dignity{' '}
                <Icon name="checkbox" color="#99dd7a" size={15} />
                Integrity & Discipline{' '}
                <Icon name="checkbox" color="#99dd7a" size={15} />
                Transparency & Accountability{' '}
                <Icon name="checkbox" color="#99dd7a" size={15} />
                Collaboration <Icon name="checkbox" color="#99dd7a" size={15} />
                Independent <Icon name="checkbox" color="#99dd7a" size={15} />
                Team Work & Professionalism
              </Text>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
