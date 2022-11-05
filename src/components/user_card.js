import React from 'react'
import  profile  from './images/profile.png'
const User_card = () => {
  return (
    <div className='sthreetwo'>
      <div className='card'>
            <div>
            <img src={ profile } alt='html' className='proimg' />

            </div>
            <div className='cardtitle'>
            <h3>Ram Kashyap <img src='https://www.pngitem.com/pimgs/m/302-3024199_instagram-verified-symbol-png-instagram-verified-logo-png.png' alt='tick' width={'28px'} height={'25px'} /></h3>
            </div>
            <div className='cardsubtitle'>
            <p> Senior Developer, Canada</p></div>
      </div>
      <div>
      <h3 style={{ 'textAlign': 'start' }}>Skills</h3>

        <div className='usercardskills'><button className='usercardbtn'>HTML</button></div>
      <div className='usercardskills'><button className='usercardbtn'>CSS</button></div>
      <div className='usercardskills'><button className='usercardbtn'>JS</button></div>
      <div className='usercardskills'><button className='usercardbtn'>ReactJS</button></div>
      <div className='usercardskills'><button className='usercardbtn'>AngularJS</button></div>
      <div className='usercardskills'><button className='usercardbtn'>NodeJS</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Python</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Flask</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Django</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Redux</button></div>
      <div className='usercardskills'><button className='usercardbtn'>MongoDB</button></div>
      <div className='usercardskills'><button className='usercardbtn'>MySQL</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Docker</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Heroku</button></div>
      <div className='usercardskills'><button className='usercardbtn'>Git</button></div>
      <div className='usercardskills'><button className='usercardbtn'>GraphQL</button></div>


      </div>
    </div>
  )
}

export default User_card
