'use client';

import { useEffect, useState } from 'react';

// Replace `any` with a proper type (adjust based on your actual API response)
interface StorageResponse {
  ok: boolean;
  // add other fields you expect
}

export default function StorageClient() {
  const [data, setData] = useState<StorageResponse | null>(null);

  useEffect(() => {
    fetch('/api/storage')
      .then(r => r.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading…</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}