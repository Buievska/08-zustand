"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | NoteHub",
  description: "Sorry, the page you're looking for doesn't exist.",
  openGraph: {
    title: "Page not found | NoteHub",
    description: "Sorry, the page youre looking for doesn't exist.",
    url: "https://08-zustand-jet.vercel.app/not-found",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push("/"));
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for doesnt exist, you will be return to
        a Home page.
      </p>
    </div>
  );
};

export default NotFound;
