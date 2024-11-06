import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Button from '@/components/ButtonSmall';

interface ProjectCardProps {
  projectName: string;
  projectIcon: ImageSourcePropType;
}

export default function ProjectCard({
  projectName,
  projectIcon,
}: ProjectCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projectName}</Text>
      <TouchableOpacity style={styles.card}>
        <View style={styles.content}>
          <Image source={projectIcon} style={styles.icon} />
          <View style={styles.buttonContainer}>
            <Button
              title="View Applicants"
              route="/register"
              filled={false}
              icon={require('../assets/images/email.png')}
            />
            <Button
              title="Project Schedule"
              route="/register"
              filled={false}
              icon={require('../assets/images/email.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  card: {
    height: 145,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: -10,
    left: 12,
    paddingHorizontal: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    backgroundColor: '#171F20',
    zIndex: 1,
  },
  icon: {
    width: '30%',
    height: '90%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonWrapper: {
    transform: [{ scale: 0.8 }], // Makes button smaller
    height: 50, // Constrain height
    width: '100%', // Take full width of container
  },
});
