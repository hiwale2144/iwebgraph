import React, { useEffect, useState } from 'react';
import './home.css';
import graph from '../image/graph.jpg';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Home = () => {

    const [allData, setAllData]= useState();

    const getDataFromDatabase = async() => {
        const res = await fetch('/reqdata',{
            method: 'GET',
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            credentials: 'include'
        });
        const data = await res.json();
        if(data){
            console.log(data);
            setAllData(data);
        }
    }

    useEffect(()=>{
        getDataFromDatabase();
    },[])

    const [inpData, setInpData] = useState({
        username:'', phone:'', email:'', message:'' 
    });

    let name;
    let value
    const handleData = (e) => {
        name=e.target.name;
        value=e.target.value;
        setInpData({...inpData, [name]:value})
    }

    const sendData = async() => {
        const {username, phone, email, message} = inpData;
        const res = await fetch('/registration',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username, phone, email, message
            })
        })
        const data = await res.json();
        if(data.message === 'DatabaseRegSucc'){
            getDataFromDatabase();
            window.alert('registration successfull!')
        }
    }

    return(
        <>
        <div className="holder">
    <div class="main-cnt"> 
    <img className='graph-bg' src={graph}></img> 
        <div class="header">
            <div id='cnt'>
                <span id='tmp'>Ashish Bakliwal</span>
                <span>+91-7977393594</span>
            </div>
            <div id='cnt'>
                <span id='tmp'>Chandrakumar Bakliwal</span>
                <span>+91-7977393594</span>
            </div>            
        </div>

        <div class="comp-body">
            <div class="logo">
                <p class='dot'>.</p>
                <p class='logo-cnt'>WG</p>
            </div>
        </div>

        <div class="desc">
            <p id='cont1'><span id='sp1'>I WEB GRAPH</span><br/><span id='sp2'>WEB SOLUTION</span></p><br/>
        </div>

        <div class="footer-div">
            <div class='line'>
                <div class="sub-line">
                    <span>www.iwebgraph.com</span>
                </div>
            </div>
        </div>
    </div>
    </div>
            <div className="main-home-page">
                <div className="form">
                    <h2>CONTACT US! FOR MORE INFORMATION</h2>
                    <label htmlFor="inp-fld">name</label>
                    <input onChange={handleData} name='username' value={inpData.username} type="text" id='inp-fld' className="inp-fld" />
                    <label htmlFor="inp-fld">phone</label>
                    <input onChange={handleData} name='phone' value={inpData.phone} type="text" id='inp-fld' className="inp-fld" />
                    <label htmlFor="inp-fld">email</label>
                    <input onChange={handleData} name='email' value={inpData.email} type="text" id='inp-fld' className="inp-fld" />
                    <label htmlFor="inp-fld">message</label>
                    <textarea onChange={handleData} name='message' value={inpData.message} type="text" id='inp-fld' className="inp-fld" />
                    <button onClick={sendData}>Send</button>
                </div>

                    <h3 className='h3tag'>Connected Peoples</h3>
                <div className="dashboard">
                    <table>
                           <thead>
                               <tr>
                                 <th>name</th>
                                 <th>message</th>   
                                 <th>date</th>
                                 <th>response</th> 
                               </tr>
                           </thead>
                           <tbody className='table-body'>
                                {
                                    allData ? allData.map((dt,ind)=>(
                                        <>
                                            <tr>
                                                <td>{dt.username}</td>
                                                <td>{dt.message}</td>
                                                <td>{dt.phone}</td>
                                                <td>{dt.message}</td>
                                            </tr>
                                        </>
                                    )) :
                                    <>please wait....</>
                                }
                           </tbody>     
                    </table>
                </div>
            </div>

            <div className="footer">
                    <div className="icons">
                        <FacebookIcon className='icon icn1'/>
                        <InstagramIcon className='icon icn2'/>
                        <TwitterIcon className='icon icn3'/>
                        <WhatsAppIcon className='icon icn4'/>
                    </div>
                    <p>&#169;Copyright 2021<br/>iWebGraph<br/>block no. 02, sadafuli Apt, opp. Ganesh mandir, Rana nagar, aurangabad maharastra 431001
                    <br/><a href='https://g.co/kgs/ozR3Tq'>see on google map</a></p>
            </div>
        </>
    )
}

export default Home;