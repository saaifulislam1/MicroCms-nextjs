"use client";
import { useEffect, useState } from "react";
import { client } from "../../libs/client";

async function fetchData() {
  try {
    const res = client.get({
      endpoint: "tags",
    });
    return res;
  } catch (error) {
    console.error(error, "occured");
    return null;
  }
}
export default function Home() {
  const [writerData, setWriterData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      if (data) {
        setWriterData(data);
      }
    };
    getData();
  }, []);
  console.log(writerData);

  return (
    <div>
      <h1>Writer profile</h1>
    </div>
  );
}
