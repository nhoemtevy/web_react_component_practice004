
'use client';

import { Card } from 'flowbite-react';

export default function ProductComponent() {
  return (
    <Card className="max-w-sm" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNPb0NwDFQ4HTZcobCpCHDxZygZdAYQ8pkA&usqp=CAU" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
