/**
 * Custom Hook to get list of all Collections
 * @param {Object} firebase.collection - Collection function in firebase provides access to collection in db
 * @param {Object} collectionPath - Contains details about what to query, one of the items is collectionPath: Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @param {String} locationHash - History location hash value of current url
 * @returns {isLoading: boolean, isError: Object, data: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useCollections = ({ collectionPath, locationHash }, firebase) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      /* Make a firebase query to get details about 
            the collection or questions Such as name and description
            */
      const whereOptions = (locationHash) ? ['type', '==', locationHash.substring(1)] : ['id', '>', 0];
      const getCollections = firebase
        .collection(collectionPath)
        .where(...whereOptions)
        .orderBy('id')
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              const data = [];
              snapshot.forEach(doc =>
                data.push({ ...doc.data(), uid: doc.id }),
              );
              setData(data);
              setIsLoading(false);
            } else {
              setIsLoading(false);
            }
            /* Unsubscribe from firebase on unmount */
          },
          error => setIsError(error.message),
        );
      return () => {
        getCollections();
      };
    })();
  }, [collectionPath, locationHash, firebase]);

  return { isLoading, isError, data };
};

useCollections.propTypes = {
  collectionProps: PropTypes.shape({
    type: PropTypes.arrayOf(['html', 'js', 'reactStyle', 'reactJsx'])
      .isRequired,
    collectionPath: PropTypes.string.isRequired,
    whereProps: PropTypes.arrayOf(['html', 'js', 'reactStyle', 'reactJsx'])
      .isRequired,
    locationHash: PropTypes.string
  }),
};
export default useCollections;
