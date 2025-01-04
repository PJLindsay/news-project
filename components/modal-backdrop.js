"use client";

import { useRouter } from "next/navigation";

// we outsourced this so that we can keep the client component "needs" to as small as possible
export default function ModalBackdrop() {
  const router = useRouter();

  return <div className="modal-backdrop" onClick={router.back} />;
}
