import React from 'react';
import { useNavigate } from 'react-router-dom';


const Magazine = ({data}) => {
    
    const navigate = useNavigate();

   
        const handleClick = () => {
            window.scrollTo(0, 0); // Scroll to the top of the page
            navigate(`/magazines/${data.id}`); // Navigate to the desired route
        };

       
   
    return (
        <div id="magazine" className="col-md-6 col-lg-3 text-center" onClick={handleClick}>
           
            <img src={data.image} alt="magazine" className="img-fluid rounded" />
           
        </div>
    );
};

export default Magazine;
