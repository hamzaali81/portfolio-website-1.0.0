'use client';
import Image from "next/image"
import { useEffect, useState } from "react";

// 218fc4158259c72e947f08897c949d287b91f24b66a41daba7f4de2a15bb81495

export default function Blog() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]); 
    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hamzaahmed_46108/")
          .then(res => res.json())
          .then(
            (data) => {
                console.log(data);
              setIsLoaded(true);
              setBlogs(data.items);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    return (
        <main className="w-100 h-100">
        <h1>Blog</h1>
        
        </main>
    );
  }