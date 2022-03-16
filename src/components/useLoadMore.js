import { useEffect, useRef } from "react";

function useLoadMore(scrollEndCallback) {
  const ref = useRef(null);

  useEffect(() => {
    const obj = ref.current;
    obj.addEventListener("scroll", function () {
      if (obj.scrollTop === obj.scrollHeight - obj.offsetHeight) {
        alert("Hello")
      }
    });

    return () => obj.removeEventListener("scroll", () => {});
  }, [scrollEndCallback]);
  console.log("hhh");
  return { ref };
}

export default useLoadMore;
