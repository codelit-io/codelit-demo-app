# Firebase

- Cloud backend for everything our frontend app needs. All this functionality exists in Firebase class in `firebase.js`

## Authentication

- Email login and sign up
- Google, Facebook, Github, Phone sign up
- Email verification and email templates

### Code Snippets

- Using `authUser` in your components
- `AuthUserContext` Context API

```
import { AuthUserContext } from "../Session";

<AuthUserContext.Consumer>
    {authUser => (
    <>
        {authUser && (
            <!-- Your Code -->
        )}
    </>
    )}
</AuthUserContext.Consumer>
```

## Database

- Firebase Firestore is a noSql real-time database
- DB queries can be generated directly from React and updates to UI happens in real time

### Database object structure

- The database has two important topics, collections and docs
- `collections` are a list of documents
- `doc` is a document inside a collection
- Querying data is done using a path of `collection/doc`
- Example user data can be fetched using path `users/USER_ID`

### Code Snippets

- Make queries from your component in `useEffect`
- Invoke firebase class with the helper method you need 

```
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      /* Make a firebase query to get details about 
            the collection or questions Such as name and description */
      const getCollectionDetails = await firebase
        .collection("collections")
        .where("id", "==", collectionName)
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              let data = [];
              snapshot.forEach(doc =>
                data.push({ ...doc.data(), uid: doc.id })
              );
              setData(data[0]);
              setIsLoading(false);
            } else {
              setData([]);
              setIsLoading(false);
            }
            /* Unsubscribe from firebase on unmount */
          },
          error => setIsError(error.message)
        );

      return () => getCollectionDetails();
    })();
    // Props provided to this useEffect
  }, [firebase, collectionName]);
```

- Better yet, create shared firebase queries by creating custom React Hooks or HOC wit them
- Using custom hooks

```
<!-- useCollections is a custom hook that calls firebase and returns a list of questions  -->
const questions = useCollections(collectionPath, firebase);
```

## Cloud Functions

- Simple node functions built in our codebase and deployed to firebase
- Used to provide backend functionality for our frontend
- Can fetch data from Firestore or make HTTP requests
