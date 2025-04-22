import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function CustomLayout(props) {
  const location = useLocation();
  useEffect(() => {
    const footerElements = document.getElementsByClassName('footer');
    if (location.pathname.startsWith('/openapi/node/v1alpha1')) {
      Array.from(footerElements).forEach((element) => {
        (element as HTMLElement).style.display = 'none';
      });
      document.body.removeAttribute('data-scalar-loaded') // Note: do this to force script to reload
    } else {
      Array.from(footerElements).forEach((element) => {
        (element as HTMLElement).style.display = 'block';
      });
    }
  }, [location.pathname]);
  return <Layout {...props} />;
}
