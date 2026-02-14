import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <div>
       <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      {/* Show the user button when the user is signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>

    </div>
  )
}

export default App