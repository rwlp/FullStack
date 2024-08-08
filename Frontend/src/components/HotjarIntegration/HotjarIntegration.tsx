import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hotjar from '@hotjar/browser';

const HotjarIntegration = () => {
  const location = useLocation();

  useEffect(() => {
    Hotjar.stateChange(location.pathname + location.search);
  }, [location]);

  return null;
};

export default HotjarIntegration;
