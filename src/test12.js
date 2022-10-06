import React ,{useState,useEffect} from 'react'
import userData from './dataFile.json';

function Card() {
  return (
      <div>
          {
            userData.map( (users,index) =>(
              <div key={index}>
                  {users.query.results.channel.units.distance}
                </div>
            ))
          }
      </div>
    )
}

export default Card
