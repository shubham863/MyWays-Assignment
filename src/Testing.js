import "./styles.css";
import userData from './dataFile.json';
import { CgArrowsExchangeV } from "react-icons/cg";
import { WiRaindrop, WiMoonAltWaxingCrescent3,  WiStrongWind , WiDaySunny} from "react-icons/wi";
import { VscFold } from "react-icons/vsc";
import { BsFillEyeFill, BsDropletFill } from "react-icons/bs";
import sc2 from './asset/sc2.png';
import sc3 from './asset/sc3.png';
import sc4 from './asset/sc4.png';
import sc5 from './asset/sc5.png';
import sc6 from './asset/icon1.png';
import moon from './asset/moon.png';


function Testing() {
  return (
    <div class="mainpage">
      {
            userData.map( (users,index) =>(
              <div key={index}>
                  <div class="head1">
        <div class="head1-h1">
          <h2>{users.query.results.channel.item.title}</h2>
        </div>
        <div class="degree-container">

        <div class="degree-center">
          <h1>{users.query.results.channel.item.condition.temp} {users.query.results.channel.units.temperature}</h1>
          <h2>{users.query.results.channel.item.condition.text}</h2>
          <h2>Day- {users.query.results.channel.item.forecast[2].high} : Night- {users.query.results.channel.item.forecast[2].low}</h2>
        </div>

        <div class="degree-image">
          <img src={moon} alt="image1"/>
        </div>
        </div>
    </div>
  </div>
            ))
            }
      

            
      {
            userData.map( (users,index) =>(
              <div key={index}>
                  <div class="head2">
      <h2>Today's Forecast for {users.query.results.channel.item.title}</h2>

<table class="head2table">
  <tr>
    <th>Morning</th>
    <th>Afternoon</th>
    <th>Evening</th>
    <th>Overnight</th>
    
  </tr>
  <tr>
    <td><h2 className="uni">{users.query.results.channel.item.forecast[0].high}</h2></td>
    <td><h2 className="uni">{users.query.results.channel.item.forecast[1].high}</h2></td>
    <td><h2 className="uni">{users.query.results.channel.item.forecast[2].high}</h2></td>
    <td><h2 className="uni">{users.query.results.channel.item.forecast[3].high}</h2></td>
  </tr>

  <tr class="imgsection">
    <td><img src={sc2}/></td>
    <td><img src={sc3}/></td>
    <td><img src={sc4}/></td>
    <td><img src={sc5}/></td>
  </tr>

  <tr>
    <td>{users.query.results.channel.item.forecast[0].high}%</td>
    <td>{users.query.results.channel.item.forecast[1].high}%</td>
    <td>{users.query.results.channel.item.forecast[2].high}%</td>
    <td>{users.query.results.channel.item.forecast[3].high}%</td>
  </tr>
</table>
<button class="button">Next Hour</button>

      </div>
                </div>
            ))
          }





{
            userData.map( (users,index) =>(
              <div key={index}>
                 <div class="head3">
    <div class="head3-h3">
          <h2>Weather today in New York city, NY, United states</h2>
        </div>
        <div class="degree-container">

        <div class="degree-center3">
          <h1>{users.query.results.channel.item.condition.temp} {users.query.results.channel.units.temperature}</h1>
          <h2>Feels like</h2>
          
        </div>
        <div class="degree-image3">
          <img src={sc6} />
          <div className="head3-arrow">
          High-{users.query.results.channel.item.forecast[1].high} | Low-{users.query.results.channel.item.forecast[1].low}
          </div>
          
        </div>
    
        </div>
        <hr/>
        <table class="head3table">
  <tr className="hover-tr">
    <th><CgArrowsExchangeV size={25}/></th>
    <th><form>
  <select name="High / Low" class="visibility">
  <option value="High">High /Low</option>
    <option value="High">High</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
  </select>
</form></th>


    <th>{users.query.results.channel.item.forecast[1].high} /  {users.query.results.channel.item.forecast[1].low}  </th>
    <th><WiStrongWind size={25}/></th>
    <th><form>
  <select name="wind" class="visibility">
  <option value="High">Wind</option>
    <option value="high">High Wind</option>
    <option value="low">Low Wind</option>
    <option value="medium">Medium Wind</option>
  </select>
</form></th>
  <th>{users.query.results.channel.wind.speed} {users.query.results.channel.units.speed}</th>
  </tr>

  <tr className="hover-tr">
  <th><WiRaindrop size={25}/></th>
    <th><form>
  <select name="humidity" class="visibility">
  <option value="Humid">Humidity</option>
    <option value="high">High Humidity</option>
    <option value="low">Low Humidity</option>
    <option value="medium">Medium Humidity</option>
  </select>
</form></th>
    <th>{users.query.results.channel.atmosphere.humidity} %</th>
    <th><BsDropletFill size={25}/></th>
    <th><form>
  <select name="dewpoint" class="visibility">
  <option value="High">Dew Point</option>
    <option value="high">High Dew Point</option>
    <option value="low">Low Dew Point</option>
  </select>
</form></th>
    <th>14 {users.query.results.channel.units.temperature}</th>
  </tr>

  <tr class="imgsection1 hover-tr">
  <th><VscFold size={25}/></th>
    <th><form>
  <select name="pressure" class="visibility">
  <option value="High">Pressure</option>
    <option value="high">High Pressure</option>
    <option value="low">Low Pressure</option>
    <option value="medium">Medium Pressure</option>
  </select>
</form></th>
    <th>{users.query.results.channel.atmosphere.pressure} {users.query.results.channel.units.pressure}</th>
    <th><WiDaySunny size={25}/></th>
    <th><form>
  <select name="uv" class="visibility">
  <option value="High">UV Index</option>
    <option value="high">High UV index</option>
    <option value="low">Low UV index</option>
  </select>
</form></th>
    <th>0 of 10</th>
  </tr>

  <tr className="hover-tr">
  <th><BsFillEyeFill size={25}/></th>
    <th><form>
  <select name="visibility" class="visibility">
  <option value="High">Visibility</option>
    <option value="high">High Visibility</option>
    <option value="low">Low Visibility</option>
  </select>
</form></th>
    <th>{users.query.results.channel.atmosphere.visibility}</th>
    <th><WiMoonAltWaxingCrescent3 size={25} /></th>
    <th><form>
  <select name="Phase" class="visibility">
  <option value="High">Moon Phase</option>
    <option value="high">Full Moon Phase</option>
    <option value="low">Half Moon Phase</option>
  </select>
</form></th>
    <th>Wanning</th>
  </tr>
  
  
</table>
      
</div>
                </div>
            ))
          }

      



    

    </div>
  );
}

export default Testing;