"use client";
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

function header() {
  let isSignedIn = true;

  return (
    <div className="flex justify-between items-center px-4 py-2 md:px-8 xl:px-16 fixed w-full top-0 left-0 z-20 bg-white">
      <Image
        src="/Msosidroplightlogo.webp"
        alt="logo"
        width={150}
        height={150}
      />

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" placeholder="Search Caterer....." />
        <Search />
      </div>

      {isSignedIn ? (
        <div className="flex gap-5">
            <div className="rounded-full px-3 py-1.5 bg-secondary text-primary-foreground">
                G
            </div>
        </div>
      ) : (
        <div className="flex gap-5">
          <Button variant={"outline"}>Login</Button>
          <Button>Sign Up</Button>
        </div>
      )}
    </div>
  );
}

export default header;
