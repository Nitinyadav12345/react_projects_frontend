import React ,{useState,useEffect} from 'react'
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {updateDoc,doc,onSnapshot} from "firebase/firestore"
import { AiOutlineClose } from 'react-icons/ai';

const SavedShows = () => {

    const [movies , setMovies] = useState([]);

    const{user} = UserAuth();

    const slideleft =()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    
    const slideright =()=>{
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    useEffect(()=>{
        onSnapshot(doc(db, 'user', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedshows);
          });
        }, [user?.email]);
    
        const movieRef = doc(db, 'user', `${user?.email}`)
        const deleteShow = async (passedID) => {
            try {
              const result = movies.filter((item) => item.id !== passedID)
              await updateDoc(movieRef, {
                  savedshows: result
              })
            } catch (error) {
                console.log(error)
            }
        }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>
        My Shows
      </h2>
      <div className=' relative flex items-center group'>
        <MdChevronLeft onClick={slideleft} className=' bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
           <div id={'slider'} className=' w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative'>
              {
                movies?.map((item,id)=>(
                    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className=' w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.img}`} alt={item?.title} />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 text-white opacity-0 hover:opacity-100'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                        <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                    </div>
                </div>
                ))
              }
           </div>
           <MdChevronRight onClick={slideright} className=' bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
      </div>
    </>
  )
}

export default SavedShows
