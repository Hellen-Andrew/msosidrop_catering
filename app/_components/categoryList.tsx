import React, { useEffect, useState } from "react";
import imagePaths from "../_utils/imagePaths";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ListItem {
  id: string;
  name: string;
}

function CategoryList() {
  const params = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const categoryParam = params.get("category");
    if (categoryParam !== null) {
      setSelectedCategory(categoryParam); // Ensure setSelectedCategory receives a string value
    }
  }, [params]);

  const items: ListItem[] = [
    { id: "1", name: "All" },
    { id: "2", name: "Burger" },
    { id: "3", name: "Chicken" },
    { id: "4", name: "Kiepe" },
    { id: "5", name: "Pizza" },
    { id: "6", name: "Vegeterian" },
    { id: "7", name: "Chinese" },
    { id: "8", name: "Japanese" },
    { id: "9", name: "Mexican" },
    { id: "10", name: "Italian" },
    { id: "11", name: "Arabic" },
    { id: "12", name: "Seafood" },
    { id: "13", name: "Cakes" },
    { id: "14", name: "Pastries" },
    { id: "15", name: "Desserts" },
    { id: "16", name: "Ice Cream" },
  ];

  return (
    <div className="py-2 sticky top-[64.5px] bg-white z-10 ">
      <div className="flex gap-4 overflow-auto scrollbar-hide">
        {items.map((item) => (
          <Link
            href={"?category=" + item.name}
            key={item.id}
            className={`flex flex-col items-center gap-1 border p-2  rounded-xl min-w-24 hover:border-secondary cursor-pointer group
        ${selectedCategory == item.name && "border-secondary text-secondary"}
      `}
          >
            <Image
              src={imagePaths[item.id]}
              alt={item.name}
              width={35}
              height={35}
            />
            <h3 className="text-sm font-medium">{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
