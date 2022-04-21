import { useState, useEffect, useRef } from 'react';

/**
 * Hook for determing if one or more media queries match the current document (screen size, etc).
 * Uses the window `matchMedia` API to listen for media query status changes.
 * Accepts a config object that contains one or more media query strings. Example:
 * {
 *  small: (max-width: 47.99em),
 *  large: (min-width: 48em)
 * }
 * Returns an object that contains the status of each media query in the config object. Example:
 * {
 *  small: { matches: true },
 *  large: { matches: false }
 * }
 */

export function useMediaQueries(config = {}) {
  const [mediaQueries, setMediaQueries] = useState(null);
  const mediaQueryLists = useRef(null);

  useEffect(() => {
    // Create MediaQueryList objects from the config object and store them in a ref
    mediaQueryLists.current = createMediaQueryLists(config);

    // Add change handlers to each MediaQueryList object
    Object.keys(mediaQueryLists.current).forEach(key =>
      mediaQueryLists.current[key].addEventListener(
        'change',
        handleMediaQueryListChange
      )
    );

    // Handler function for status changes to the MediaQueryList objects
    function handleMediaQueryListChange() {
      // Create a new mediaQueries object containing the updated status(es)
      const newMediaQueries = createMediaQueries(
        config,
        mediaQueryLists.current
      );
      setMediaQueries(newMediaQueries);
    }

    // Call handler right away so state gets updated with the initial media query statuses
    handleMediaQueryListChange();

    // Remove event listener on cleanup
    return () => {
      Object.keys(mediaQueryLists.current).forEach(key =>
        mediaQueryLists.current[key].removeEventListener(
          'change',
          handleMediaQueryListChange
        )
      );
    };
  }, []); // Empty array ensures that effect is only run on mount

  return mediaQueries;
}

/**
 * Returns an object with keys that correspond to the config object's keys
 * and values that are MediaQueryList objects initialized with the
 * media query values from the config object
 */
function createMediaQueryLists(config) {
  return Object.keys(config).reduce((mediaQueryLists, key) => {
    const mql = window.matchMedia(config[key]);

    mediaQueryLists[key] = mql;
    return mediaQueryLists;
  }, {});
}

/**
 * Returns an object with keys that correspond to the config object's keys
 * and values that contain the "matches" status of the corresponding
 * media query.
 */
function createMediaQueries(config, mediaQueryLists) {
  return Object.keys(config).reduce((mediaQueries, key) => {
    const mql = mediaQueryLists[key];

    mediaQueries[key] = {
      matches: mql.matches
    };
    return mediaQueries;
  }, {});
}
