"use client";
import React from "react";
import { FixedSizeList as List } from "react-window";

export default function Home() {
  const data: any = [];

  for (let i = 0; i < 50; i++) {
    data.push(`https://picsum.photos/800/10${i}`);
  }

  const Row: React.FC<any> = ({ index }) => (
    <img
      src={data[index]}
      alt="Random image"
      className="w-24 h-24 object-cover my-4"
    />
  );

  return (
    <main>
      <h1 className="text-center">Image Gallery</h1>
      <div className="max-w-2xl mx-auto">
        <List height={600} itemCount={data.length} itemSize={150} width={600}>
          {Row}
        </List>
      </div>
    </main>
  );
}
