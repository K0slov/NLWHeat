import React, { Component } from 'react'
import {  Image } from 'react-native'
import { styles } from './styles'
import avataImg from '../../assets/avatar.png' 
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../theme'

const Sizes = {
    small: {
        containerSize: 32,
        avatarSize: 28,
    },
    normal: {
        containerSize: 48,
        avatarSize: 42,
    }
}

type Props = {
    imageUri: string | undefined
    sizes?: 'small' | 'normal'
}

const AVATAR_DEFAULT = Image.resolveAssetSource(avataImg).uri 

export function UserPhoto({imageUri, sizes = 'normal'}: Props) {
    const {containerSize, avatarSize } = Sizes[sizes]
        return (
            <LinearGradient 
            colors={[COLORS.PINK, COLORS.YELLOW]}
            start={{ x: 0, y: 0.6}}
            end={{ x: 0.6, y: 1}}
            style={[
                styles.container,{
                    width: containerSize,
                    height: containerSize,
                    borderRadius: containerSize / 2
                }
                
            ]}
            >
            <Image source={{ uri: imageUri || AVATAR_DEFAULT}}
            style={[
                styles.avatar,{
                width: avatarSize,
                height: avatarSize,
                borderRadius: avatarSize / 2
            }]}
            />
            </LinearGradient>
        )
    }

