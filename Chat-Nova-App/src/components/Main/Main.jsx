import React, { useContext } from 'react'
import'./Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {

  const {onSent,recentPrompt, showResult,loading, resultData, setInput,input}= useContext(Context);


  const handleCardClick = (prompt) => {
    onSent(prompt);
  };

  
    const handleClick = () => {
      window.location.reload();
    };

  


  return (
    <div className='main'>
        <div className="nav" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <p>Chat Nova</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

      {!showResult ? 
      <>
       <div className="greet">
              <p><span>Hello, Human.</span></p> 
                <p>How can I help you today?</p>
            </div>
       
        <div className="cards">
            <div className="card" onClick={() => handleCardClick('Suggest beautiful places to see on an upcoming trips')}>
                <p>Suggest beautiful places to see on an upcoming trips</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick('Briefly summarize this concept: urban planning')}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick('Brainstorm team bonding activities for our work retreat')}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card" onClick={() => handleCardClick('Improve the readability of the following code')}>
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
      </>
    :<div className='result'>
        <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
        </div>
        <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ?  
           <div className='loader'>
            <hr />
            <hr />
            <hr />

           </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p> }
        </div>


      </div> }      
           

        <div className="main-bottom">
           <div className="search-box">
               <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder='Enter prompt here' />   
               <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>{onSent()}} src={assets.send_icon} alt="" />
               </div>
           </div>
           <p className="bottom-info">
            ChatNova may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps
           </p>


        </div>        

    </div>
</div>


  )
}

export default Main