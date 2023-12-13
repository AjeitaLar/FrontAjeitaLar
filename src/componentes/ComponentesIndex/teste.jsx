// TidioScript.js

import { useEffect } from 'react';

const TidioScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/zqcwggqgc47o6h6joznjddvnzf9ynrc7.js';
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TidioScript;
