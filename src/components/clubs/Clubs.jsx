import React from 'react'
import './clubs.css'
import { Pagination, Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';
import HackaBull from '../../assets/hackabull.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    id:1,
    title:'USF SCP',
    position:"Member, 2020-2021",
    image:"https://media-exp1.licdn.com/dms/image/C4D0BAQE-8JJzumxbsg/company-logo_200_200/0/1615164906583?e=2147483647&v=beta&t=K6shtA3ooyYDQrjzhxYdwAUeckmY06tbZRPaMO6BI08"
  },
  {
    id:2,
    title:'USF SHPE',
    position:"Member, 2020-2021",
    image:"https://pbs.twimg.com/profile_images/1221841832599941121/OEoPC8Jh_400x400.jpg"
  },
  {
    id:3,
    title:'MSA USF',
    position:"Jummah Coordinator, August 2022- Present",
    image:"https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.6435-9/34660003_1828210337217198_249448513685946368_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VHpldz1BykoAX_20GZI&_nc_ht=scontent.ftpa1-1.fna&oh=00_AT-EeZpd_DVdHrDVF9irziFFiTiIR94358XxfgDAYrPenQ&oe=634B36DA"
  },
  {
    id:4,
    title:'ShellHacks',
    position:"August 9-11,2022",
    image:"https://pbs.twimg.com/media/FbLDwIaUcAMAil8?format=jpg&name=4096x4096"
  },
  {
    id:5,
    title:'Hackabull USF',
    position:"March 23,2022",
    image: HackaBull
  },
  {
    id:5,
    title:'ICPC 2022 Regionals',
    position:"March 8,2022",
    image: "data:image/png;base64,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"
  },


]

const Clubs = () => {
  return (
    <section id="clubs">
     <h5>What I've been doing</h5>
     <h2>Clubs and Activities</h2>

     <Swiper className="container clubs__container"
    modules={[Pagination, Autoplay]} spaceBetween={40}
    slidesPerView={1}
    pagination={{clickable:true}}
    autoplay={{delay: 1500}}

    >
        {
            data.map((d) => {
                return (
                    <SwiperSlide key ={d.id} className="club">
          
          <div className="club__content">
            <h4>{d.title}</h4>
            <p>{d.position}</p>
          </div>
            <div className="club__image">
              <img src={d.image} alt="" className='img'/>
            </div>
          
        </SwiperSlide>
          
                )})
          
        }

     </Swiper>
    </section>
  )
}

export default Clubs