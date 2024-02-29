
"use client";
import React from "react";
import Lottie from "lottie-react";
import coding_animation from '../../../public/assets/coding.json'

const style = {
  height: 300,
  width: 300,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default function LottieAnimate() {
  return (
    <div>
        <Lottie animationData={coding_animation} loop={true} autoplay={true} style={style}/>
    </div>
  );
}
