import { useState, useCallback } from "react";

export function useCopyToClipboard(
  timeout = 2000
): [copy: (text: string) => boolean, isCopied: boolean] {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      if (!navigator?.clipboard) {
        console.warn("Clipboard API not supported");
        return false;
      }

      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), timeout);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
          setIsCopied(false);
        });

      return true;
    },
    [timeout]
  );

  return [copy, isCopied];
}
