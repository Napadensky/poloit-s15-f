import {useState,useEffect} from 'react';

export const useSquads =(url)=> {
    const [squad, setSquad]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState (null);

    useEffect(() => {
        const fetchData = async ()=> {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('repuesta incorrecta');
                   
                }
   
      const data = await response.json();
      setSquad(data);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    
  };
  fetchData();
},[url]);

  return { squad, loading, error };
                
            
        
};