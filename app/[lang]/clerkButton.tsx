import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function ClerkButton() {
  return (
    <div className="mr-5 pt-3" suppressHydrationWarning>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
