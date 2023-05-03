import React from 'react'

const MovieCard = (props) => {
  
  const{Year, Poster, Type, Title} = props.data;

  return (
    <div>
    <div className='movie'>
    <div>  
            <p>{Year}</p>
        </div>
     <div>
     <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
         
     </div>
   
     <div>
     <span>{Type}</span>
     <h3>{Title}</h3>
     <p>{Year}</p>
     </div>
  <div>
  <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      
  </div>

  <div>
  <span>{Type}</span>
  <h3>{Title}</h3>
     </div>
    </div>
    </div>
  )
}

export default MovieCard
