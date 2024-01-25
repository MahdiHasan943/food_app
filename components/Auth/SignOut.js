import { signOut } from 'next-auth/react';
import React from 'react';

const SignOut = ({ className }) => {
  return (
    <div>
      <button
        className={className}
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
