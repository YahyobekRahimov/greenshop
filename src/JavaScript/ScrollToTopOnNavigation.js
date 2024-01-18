import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnNavigation() {
   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   return null;
}

export default ScrollToTopOnNavigation;
