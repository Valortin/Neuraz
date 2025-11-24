// components/StorageClient.tsx   (client component)
'use client';

import { useEffect, useState } from 'react';

export default function StorageClient() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Call your API route that uses the server component
    fetch('/api/storage')
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading…</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}