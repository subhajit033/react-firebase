import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { db } from "./config/firebase-config";
import { getDocs, collection } from "firebase/firestore";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  /*colection will take two parameter 
   -> acess to firestore database
   ->name of that database/collection
  */

  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = async () => {
    //Read the data from database
    // set the movie list
    try {
      /*get Docs will give us the all the document fron that named database
        -> here it will give us all the docs from database/collection named movies
      */
      const fetchedData = await getDocs(moviesCollectionRef);
      const filterData = fetchedData.docs.map((doc) => {
        //doc.data() has all the properties we needed and it is a object
        return { ...doc.data(), id: doc.id };
      });
      console.log(filterData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Auth />
      <div>
        <form>
          <input
            className="border-2"
            type="text"
            placeholder="Enter movie name"
          />
          <br />
          <input
            className="border-2"
            type="number"
            placeholder="release date"
          />
          <br />
          <input type="checkbox" id="oscar" />
          <label htmlFor="oscar">received Oscar</label>
        </form>
      </div>
    </>
  );
};

export default App;
