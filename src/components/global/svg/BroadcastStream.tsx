import React from 'react';
import { SVGProps } from "react";
import Svg, { G, Path } from "react-native-svg";

export function BroadcastStream(props: SVGProps<SVGSVGElement>) {
    return (
        <Svg 
            width={props.width} 
            height={props.height}  
            viewBox="0 0 14 14" 
        >
            <G 
                fill="none" 
                stroke="#222F3A" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            >
                <Path 
                    d="M13.5 9A6 6 0 0 1 5 .5ZM9.26 4.74L12 2"
                />
                <Path 
                    d="M3.96 7.57L.5 13.5H7L5.92 9.73"
                />
            </G>
        </Svg>
    )
}