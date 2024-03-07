
'use client';

import { Card } from 'flowbite-react';

export default function ProductComponent() {
  return (
    <Card className="max-w-sm bg-blue-50" imgSrc="https://png.pngtree.com/thumb_back/fh260/background/20230901/pngtree-photo-of-products-for-hair-care-image_13116163.jpg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
        Hair Product Pictures
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Find the perfect hair product stock photos for your creative projects. Whether you need visuals for your website, social media, or marketing materials, we have you covered with our royalty-free hair product pictures and background images.</p>
    </Card>
  );
}
