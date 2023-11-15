
import { useSelector } from "react-redux"


const Header = () => {

    const state =useSelector((store) => store);
   
  return (
   <header>
    <div>
    <img src="/plane.png" alt="logo" />
    <h3>Uçus Radarı</h3>
    </div>
<p>
    {state.isLoading 
    ? "uçuşlar aranıyor..." 
     : !state.isError
     ? `${state.flights.length} uçuş bulundu`
     : 'sorun oluştu'
    }
</p>
   </header>
  )
}

export default Header