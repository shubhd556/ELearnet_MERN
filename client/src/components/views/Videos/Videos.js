import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ReactPlayer from 'react-player'
import '../Videos/NVideo.css'
// const [autoPlay, setAutoPlay] = useState(false);

function Videos(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            link:"https://youtu.be/p5DVeDWtA5U"
        },
        {
            name: "Random Name #2",
            description: "Inside Google Center",
            link:"https://youtu.be/XZmGGAbHqa0"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            link:"https://youtu.be/bs9pREQZB-E"
        }
    ]
    return (
        <Carousel autoPlay={false} >
            {
                items.map( (item, i) => <Item key={i} item={item} />
                 )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div>
        <div id="particle-container">
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
    <div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
	<div class="particle"></div>
</div>
            <div class= 'container'>
                <div class="container_content">
                    <div class="container_content_inner text-center">
                    <div class="title">
                    <h2>{props.item.name}</h2>
                    </div>
                    <div class="par">
                    <p>{props.item.description}</p>
                    </div>

                    </div>
                </div>
            <div class="container_outer_img">
            <div class="img-inner ">
            <ReactPlayer className="about-video mx-auto" style={{maxWidth:"100%",height:"50vh"}} url={props.item.link} />       </div>
     </div>
  </div>







        </div>

        
    )
}


export default Videos
