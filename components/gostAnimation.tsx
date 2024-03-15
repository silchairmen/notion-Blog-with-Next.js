"use client"

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../public/goastAnimate.json'


export default function GostAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 250, height: 300 }}
    />
  )
}