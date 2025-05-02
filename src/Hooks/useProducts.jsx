import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

export const useProducts = () => {
    const { isLoading, isError, data: products = [], error } = useQuery({
        queryKey: ['AdventureProducts'],    // This is your query key
        queryFn: async () => {              // This is your query function
          const response = await axios.get('/products.json');
          return response.data;
        }
      });



      return{
      
    products
      }
    }
