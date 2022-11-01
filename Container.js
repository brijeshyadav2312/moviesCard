import {ChatLeftFill, HeartFill, ShareFill } from 'react-bootstrap-icons';
const Container = ({poster_name,poster_img,year,Director,duration,genre,description}) => {
  return (
    <div className="card">
        <div className="left">
            <div className="Description">
                <div className="About">
                    <img src={poster_img} alt="#"/>
                    <div>
                        <span className="name">{poster_name}</span>
                        <span className="date">
                            <span>{year},</span>
                            <span>{Director}</span>
                        </span>
                        <span className="genre">
                            <span className="duration">{duration}</span>&emsp;
                            <span>{genre}</span>
                        </span>
                    </div>
                </div>
                <div className="description">{description}</div>
            </div>
            <div className="share">
                <ShareFill color='#7a7a7a' size={20} cursor="pointer"/>
                <HeartFill color='#7a7a7a' size={20} cursor="pointer"/>
                <ChatLeftFill color='#7a7a7a' size={20} cursor="pointer"/>
            </div>
        </div>
        <div className="background" style={{backgroundImage:`url(${poster_img})`}}></div>
    </div>
  )
}

export default Container

