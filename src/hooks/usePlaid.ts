import { useState, useCallback } from 'react';
import axios from 'axios';
import { usePlaidLink } from 'react-plaid-link';
import { useToast } from '@/hooks/use-toast';

export function usePlaid() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSuccess = useCallback(async (public_token: string) => {
    try {
      await axios.post('/api/exchange_public_token', { public_token });
      toast({
        title: 'Success!',
        description: 'Your bank account has been successfully connected.',
      });
    } catch (error) {
      console.error('Error exchanging public token:', error);
      toast({
        title: 'Error',
        description: 'Failed to connect your bank account. Please try again.',
        variant: 'destructive',
      });
    }
  }, [toast]);

  const initializePlaid = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/create_link_token');
      const { link_token } = response.data;
      return link_token;
    } catch (error) {
      console.error('Error creating link token:', error);
      toast({
        title: 'Error',
        description: 'Failed to initialize Plaid. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    initializePlaid,
    onSuccess,
  };
}