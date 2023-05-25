/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useState, useEffect} from 'react'
import axios from 'axios';
const BASE_URL = 'http://localhost:3001'


const LongNotification = ()=>{
    const [input,setInput] = useState('')
    const [notifications, setNotifications] = useState([]);
      
    useEffect(()=>{

            axios.get(`${BASE_URL}/long/notification`)
              .then(res => {
                console.log(res.data);
                setNotifications(prevData => [...prevData, res.data]);
              })
              .catch(error => {
                console.log('Error fetching notifications:', error);
              });
    },[notifications])  
    //   console.log(notifications);
      
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length < 3) {
            alert('Title must be at least 3 characters long');
            return;
          }
        axios.post(`${BASE_URL}/long/notification`, { title: input })
          .then(res => {
            setInput('');
            // setNotifications([...notifications, res.data])
          })
          .catch(err => console.log(err));
      }
    return (
        <>
      <div className="form-wrapper">
        <form id="form" className="validate" onSubmit={handleSubmit}>
          <div className="form-field">
            <label>notification</label><br/>
            <input value={input} onChange={(e) => {setInput(e.target.value)}} type="text" name="notification" id="notification" placeholder="notification" required />
          </div>
        </form>
      </div>
      <section>
        <div>
          <h2>notifications</h2><br/>
          <ul className="check-list">
            {notifications.map((noti) => {
              return <li key={noti._id}>{noti.title}</li>;
            })}
          </ul>
        </div>
      </section>
    </>
    )
}
export default LongNotification