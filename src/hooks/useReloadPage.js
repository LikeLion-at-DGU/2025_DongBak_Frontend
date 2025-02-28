import { useCallback } from "react";

export const useReloadPage = () => {
  return useCallback(() => {
    window.location.reload();
  }, []);
}

// useCallback 으로 계속 재생성되는 것을 방지.