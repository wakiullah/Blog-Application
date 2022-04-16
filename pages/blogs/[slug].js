import React from "react";
import PostDetails from "@/components/Blogs/PostDetails";

export default function Details() {
  return (
    <div>
      <PostDetails />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "1" } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
      { params: { slug: "4" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      name: "post title",
    },
  };
}
