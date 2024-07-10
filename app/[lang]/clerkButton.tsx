import { FC } from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

const ClerkButton: FC = function () {
    return(
        <div className="mr-5 pt-3" suppressHydrationWarning>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    )
}

export default ClerkButton;