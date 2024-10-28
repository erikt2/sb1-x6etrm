import { Button } from '@/components/ui/button';
import { usePlaidLink } from 'react-plaid-link';
import { usePlaid } from '@/hooks/usePlaid';
import { useState, useEffect } from 'react';

export function PlaidLink() {
  const [linkToken, setLinkToken] = useState(null);
  const { loading, initializePlaid, onSuccess } = usePlaid();

  useEffect(() => {
    const getToken = async () => {
      const token = await initializePlaid();
      setLinkToken(token);
    };
    getToken();
  }, [initializePlaid]);

  const { open } = usePlaidLink({
    token: linkToken,
    onSuccess,
  });

  return (
    <Button 
      onClick={() => open()} 
      disabled={loading || !linkToken}
    >
      {loading ? 'Loading...' : 'Connect Bank Account'}
    </Button>
  );
}