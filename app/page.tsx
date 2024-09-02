"use client";
import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";

export default function Home() {
  const [value, setValue] = useState();
  const [valueImages, setValueImages] = useState();
  const data: any = [];

  for (let i = 0; i < 50; i++) {
    data.push(`https://picsum.photos/800/10${i}`);
  }

  const searchImage = () => {
    const perPage = 50;
    const accessKey = `${process.env.LINK_KEY}`;

    // Construct the URL with query parameters
    const url = new URL(`${process.env.LINK_API}`);
    url.searchParams.append("query", value);
    url.searchParams.append("per_page", perPage);

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })
      .then((response) => response.json()) // Parse JSON response
      .then((data) => {
        console.log(data);
        setValueImages(data.result);
        console.log(valueImages);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  const Row: React.FC<any> = ({ index }) => (
    <img
      src={data[index]}
      alt="Random image"
      className="w-24 h-24 object-cover my-4"
    />
  );

  return (
    <main>
      <input
        type="text"
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
        value={value}
        className="text-black/70"
      />
      <button
        onClick={() => {
          searchImage();
        }}
      >
        Search
      </button>
      <div className="max-w-2xl mx-auto">
        <List height={600} itemCount={data.length} itemSize={150} width={600}>
          {Row}
        </List>
      </div>
    </main>
  );
}
