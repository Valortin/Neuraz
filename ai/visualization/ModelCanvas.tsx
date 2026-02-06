"use client";

import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const ModelCanvas: React.FC = () => {
  return (
    <Stage width={800} height={600}>
      <Layer>
        <Rect x={20} y={20} width={100} height={50} fill="purple" draggable />
        <Text text="Input Layer" x={30} y={30} fill="white" />
        
      </Layer>
    </Stage>
  );
};

export default ModelCanvas;

// Usage: In dashboard, add tab 'AI Builder' with <ModelCanvas />