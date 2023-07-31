import React, { useState } from 'react';
import './bok.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const BookingPage = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [restaurant, setRes] = useState("");
  const [no_person, setGuests] = useState();
  const [food, setFood] = useState();
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [selectedFood, setSelectedFood] = useState('');


  
  const handleRestaurantChange = (e) => {
    setSelectedRestaurant(e.target.value);
    setRes(e.target.value);
  };

  const handleFoodChange = (e) => {
    setSelectedFood(e.target.value);
    setFood(e.target.value);
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      const data1 =
      {
        name:name,
        email:email,
        date:date,
        time:time,
        res:restaurant,
        no_person:no_person,
        food:food
    };
    
  }
  
  return (
    <>
    <div>
    <nav class="navigation1">
    <h1 style={{marginLeft:"3cm",fontSize:"45px",color:"white",fontFamily:"cursive"}}>RADISSION BLU</h1>
      <div className='navcon'>
    <Link to='/'>HOME</Link>
    <Link to='/res'>HOTEL</Link>
    <Link to='/Menudemo'>ROOMS</Link>
    <Link to='/bok'>Booking</Link>
   <Link to='/login'>Login</Link>
   </div>
    </nav>    
    <div className='bod9'>
    <form className="reservation-form">
      <div className='clr'>
      <div className="form-group">
        <label htmlFor="name">Name -&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/><br/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email -&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="date">Date -&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <br/>
      <div className="form-group">
        <label htmlFor="time">Time -&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="form-group" style={{marginLeft:"-0.7cm",marginTop:"0.5cm",display:"flex"}}>
        <label htmlFor="restaurant">
        <h4 style={{marginTop:"0.3cm"}}>Restaurant-</h4>
        </label>
        <select value={selectedRestaurant}
        onChange={handleRestaurantChange} style={{marginLeft:"0.2cm"}}className="custom-select" >
        <option value="option1">----choose the Restaurant----</option>
          <option value="SS Hyderabad Briyani-Coimbatore,India">SS Hyderabad Briyani-Coimbatore,India</option>
          <option value="Spicy BBQ-Chennai,India">Spicy BBQ-Chennai,India</option>
          <option value="Taj Restaurant - Mumbai,India">Taj Restaurant - Mumbai,India</option>
          <option value="Kotlin-Res - Kerela,India">Kotlin-Res - Kerela,India</option>
          <option value="Meridian - Goa,India">Meridian - Goa,India</option>
          <option value="Amirtha Restaurant - Andhra Pradesh,India">Amirtha Restaurant - Andhra Pradesh,India</option>
          <option value="Noma - Kolkata,India">Noma - Kolkata,India</option>
        </select>
      </div>
      <div className="form-group" style={{marginLeft:"-0.0cm",marginTop:"0.5cm",display:"flex"}}>
        <label htmlFor="restaurant">
        <h4 style={{marginTop:"0.3cm"}}>Dishes-</h4>
        </label>
        <select value={selectedFood}
        onChange={handleFoodChange} style={{marginLeft:"0.5cm"}}className="custom-select" >
        <option value="option2">----choose the Dishes----</option>
          <option value="Hamburger">Hamburger</option>
          <option value="Chicken Rice">Chicken Rice</option>
          <option value="briyani">briyani</option>
          <option value="Noodles">Noodles</option>
          <option value="Chilli Chicken">Chilli Chicken</option>
          <option value="icecream">Icecream</option>
          <option value="Milk Shake">Milg Skake</option>
        </select>
      </div>
      <div style={{display:"flex"}}>
      <div className="form-group">
    
        <label htmlFor="guests"><br/>Guests -&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
        type="number"
        id="no_person"
        value={no_person}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        min="1"
        max="100"
        required
        />
       
      </div>
      </div>
      <br/>
      <div className="form-group">
        <Link to="/Res"><button type="submit" onClick={handleSubmit}style={{cursor:"pointer"}}>Reserve</button></Link>
      </div>
      </div>
    </form>
    <br/><br/><br/><br/><br/><br/><br/>
    </div>
    
    </div>
    
    <div class="footer">
   
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">Buffet Service</a></p>
          <p><a href="#">Silver Service.</a></p>
          <p><a href="#">French Service</a></p>
          <p><a href="#">Gueridon Service</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="#"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/farazc60"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com/codewithfaraz"
              ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">Restaurant</a></p>
          <p><a href="#">Menu</a></p>
          <p><a href="#">Booking</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
          8/8-2,
                Daniel Street,
                New York,
                US. 
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+91-7840298391</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">farazc60@gmail.com</a></p>
        </div>
        <footer>
        <hr />
        © 2022 codewithFaraz.
        </footer>
        </div>
        </div>
       
        </>
  );
};
export default BookingPage;