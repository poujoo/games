"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
export default function Page() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return <></>;
  } else {
    return (
      // <div className="w-full h-h-full flex">
      <div className="mt-5 lg:mt-20" suppressHydrationWarning>
        <SignIn />
      </div>
      // </div>
    );
  }
}
