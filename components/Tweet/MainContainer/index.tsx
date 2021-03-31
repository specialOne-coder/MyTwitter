import React from 'react'
import { Image, View, Text } from 'react-native'
import { TweetType } from '../../../types';
import styles from './style';
import { Ionicons } from '@expo/vector-icons';


export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = ({ tweet }: MainContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.tweetHeaderContainer}>
                <View style={styles.tweetHeaderNames}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>@{tweet.user.username}</Text>
                    <Text style={styles.createdAt}>20s</Text>
                </View>
                <Ionicons name={'chevron-down'} size={18} color={'gray'} />
            </View>
            <View>
                <Text style={styles.content}>{tweet.content}</Text>
                {!!tweet.image && <Image source={{ uri: tweet.image }} />}
            </View>
        </View >
    );
}

export default MainContainer;