import { useState } from 'react';

export default function useOnFetch() {
  const [result, setResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  let onFetch = async (fetchingFn) => {
    setIsLoading(true);

    const data = await fetchingFn();

    if (data.success === true) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  return { onFetch, result, isSuccess, isLoading };
}
