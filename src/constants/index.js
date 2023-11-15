

export const options = {
    

   
      method: 'GET',
      url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
      params: {
        bl_lat: '36.917824',
        bl_lng: '25.728019',
        tr_lat: '42.724406',
        tr_lng: '45.898916',
        limit: '300'
      },
      headers: {
        'X-RapidAPI-Key': '5914ca3586mshd0138071e7f0dc0p1aab19jsn7b05f9ad4ba7',
        'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
      
      }
      
};
export const options2 = {
 
 
  headers: {
    'X-RapidAPI-Key': '5914ca3586mshd0138071e7f0dc0p1aab19jsn7b05f9ad4ba7',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};
