import { useEffect, useState } from "react";
import Auth from "./components/Auth";
import { db } from "./config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [receivedOscar, setReceivedOscar] = useState(false);
  const moviesCollectionRef = collection(db, "movies");
  /*colection will take two parameter 
   -> acess to firestore database
   ->name of that database/collection
  */

  useEffect(() => {
    getMovieList();
  }, [moviesCollectionRef]);
  /**
   * for real tiem update we should depended collection movieColectioref because if data changed inside firestore only this will know
   */
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
      setMovieList(filterData);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /*addDoc will take two parameter 
        -> reference to the database
        ->data we want to send
      */
      await addDoc(moviesCollectionRef, {
        title: title,
        releaseDate: releaseDate,
        receivedOscar: receivedOscar,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Auth />
      <div>
        {movieList.map((movie) => {
          return <p key={movie.releaseDate}>{movie.title}</p>;
        })}
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="border-2"
            type="text"
            value={title}
            placeholder="Enter movie name"
          />
          <br />
          <input
            onChange={(e) => setReleaseDate(Number(e.target.value))}
            className="border-2"
            type="number"
            placeholder="release date"
            value={releaseDate}
          />
          <br />
          <input
            type="checkbox"
            id="oscar"
            checked={receivedOscar}
            onChange={() => setReceivedOscar(!receivedOscar)}
          />
          <label htmlFor="oscar">received Oscar</label>
          <br />
          <button className="px-2 py-1 bg-green-200" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
