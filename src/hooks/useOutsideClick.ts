import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: React.MutableRefObject<null>) {
  useEffect(() => {
    console.log('hello world');
    /**
     * Alert if clicked on outside of element
     */
    // function handleClickOutside(event: MouseEvent) {
    //   if (ref.current && !ref.current.contains(event.target)) {
    //     alert('You clicked outside of me!');
    //   }
    // }
    // // Bind the event listener
    // document.addEventListener('mousedown', handleClickOutside);
    // return () => {
    //   // Unbind the event listener on clean up
    //   document.removeEventListener('mousedown', handleClickOutside);
    // };
  }, [ref]);
}
