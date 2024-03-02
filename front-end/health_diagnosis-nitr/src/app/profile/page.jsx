'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
useEffect(function() {   
    console.log(user);
},[user])
  return (
      user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}
