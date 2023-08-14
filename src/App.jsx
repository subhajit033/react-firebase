import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { db } from "./config/firebase-config";
import { getDocs, collection } from "firebase/firestore";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  /*colection will take two parameter 
   -> acess to firestore database
   ->name of that database
  */

  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = async () => {
    //Read the data from database
    // set the movie list
    try {
      const fetchedData = await getDocs(moviesCollectionRef);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Auth />
    </>
  );
};

export default App;
