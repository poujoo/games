"use client";
import { SignUp } from "@clerk/nextjs";
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
      <div className="mt-5 lg:mt-20" suppressHydrationWarning>
        <SignUp />
      </div>
    );
  }
}
