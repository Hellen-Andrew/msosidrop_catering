"use client"

import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CatererCard from './catererCard';

interface ListItem {
  id: string;
  name: string;
}

function Caterers() {

  const items: ListItem[] = [
    { id: '1', name: 'Elegant Restaurant' },
    { id: '2', name: 'Ubwabwa Inc.' },
    { id: '3', name: 'Wali Inc.' },
    { id: '4', name: 'Elegant Restaurant' },
    { id: '5', name: 'Ubwabwa Inc.' },
    { id: '6', name: 'Wali Inc.' },
    { id: '7', name: 'Ubwabwa Inc.' },
    { id: '8', name: 'Wali Inc.' },
    { id: '9', name: 'Ubwabwa Inc.' },
    { id: '10', name: 'Wali Inc.' },
    { id: '11', name: 'Ubwabwa Inc.' },
    { id: '12', name: 'Wali Inc.' },
    
  ];

    const params = useSearchParams();
    const [category,setCategory] = useState<string | null>(null); // Providing type annotation here

    useEffect(() => {
        params && setCategory(params.get('category'))
    },[params])


  return (
    <div className='my-8 px-2'>
      <h2 className='font-bold text-2xl mb-6'>Popular Caterers</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-3'>
        {
          items.map((items)=>(
            <CatererCard key={items.id}  />
          ))
        }
          
      </div>
    </div>
  )
}

export default Caterers