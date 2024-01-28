import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from "../../../assets/img/gallery/Gallery-1.jpg";
import image2 from "../../../assets/img/gallery/Gallery-2.jpg";
import image3 from "../../../assets/img/gallery/Gallery-3.jpg";
import image4 from "../../../assets/img/gallery/Gallery-4.jpg";
import image5 from "../../../assets/img/gallery/Gallery-5.jpg";
import image6 from "../../../assets/img/gallery/Gallery-6.jpg";
import image7 from "../../../assets/img/gallery/Gallery-7.jpg";
import image8 from "../../../assets/img/gallery/Gallery-8.jpg";
import image9 from "../../../assets/img/gallery/Gallery-9.jpg";
import image10 from "../../../assets/img/gallery/Gallery-10.jpg";
import image11 from "../../../assets/img/gallery/Gallery-11.jpg";
import image12 from "../../../assets/img/gallery/Gallery-12.jpg";
import image13 from "../../../assets/img/gallery/Gallery-13.jpg";
import image14 from "../../../assets/img/gallery/Gallery-14.jpg";
import image15 from "../../../assets/img/gallery/Gallery-15.jpg";
import image16 from "../../../assets/img/gallery/Gallery-16.jpg";
import image17 from "../../../assets/img/gallery/Gallery-17.jpg";
import image18 from "../../../assets/img/gallery/Gallery-18.jpg";
import image19 from "../../../assets/img/gallery/Gallery-19.jpg";
import image20 from "../../../assets/img/gallery/Gallery-20.jpg";
import image21 from "../../../assets/img/gallery/Gallery-21.jpg";
import image22 from "../../../assets/img/gallery/Gallery-22.jpg";
import image23 from "../../../assets/img/gallery/Gallery-23.jpg";
import image24 from "../../../assets/img/gallery/Gallery-24.jpg";
import image25 from "../../../assets/img/gallery/Gallery-25.jpg";
import image26 from "../../../assets/img/gallery/Gallery-26.jpg";
import image27 from "../../../assets/img/gallery/Gallery-27.jpg";
import image28 from "../../../assets/img/gallery/Gallery-28.jpg";
import image29 from "../../../assets/img/gallery/Gallery-29.jpg";
import image30 from "../../../assets/img/gallery/Gallery-30.jpg";
import image31 from "../../../assets/img/gallery/Gallery-31.jpg";
import image32 from "../../../assets/img/gallery/Gallery-32.jpg";
import image33 from "../../../assets/img/gallery/Gallery-33.jpg";
import image34 from "../../../assets/img/gallery/Gallery-34.jpg";
import image35 from "../../../assets/img/gallery/Gallery-35.jpg";
function First() {

    const Data = [
        { img: image31, category: "Marketing" },
        { img: image32, category: "Marketing" },
        { img: image33, category: "Marketing" },
        { img: image35, category: "Marketing" },        
        { img: image24, category: "Marketing" },
        { img: image28, category: "Marketing" },
        { img: image29, category: "Marketing" },
        { img: image34, category: "Marketing" },
        { img: image8, category: "Marketing" },
        { img: image12, category: "Marketing" },
        { img: image15, category: "Marketing" },
        { img: image17, category: "Marketing" },
        { img: image18, category: "Marketing" },
        { img: image21, category: "Marketing" },
      
        { img: image1, category: "Financial" },
        { img: image2, category: "Financial" },
        { img: image3, category: "Analyzing" },
        { img: image4, category: "Insurance" },
        { img: image5, category: "Family" },
        { img: image6, category: "Business" },
        { img: image7, category: "Financial" },
       
        { img: image9, category: "Marketing" },
        { img: image10, category: "Marketing" },
        { img: image11, category: "Marketing" },
      
        { img: image13, category: "Marketing" },
        { img: image14, category: "Marketing" },
      
        { img: image16, category: "Marketing" },
       
        { img: image19, category: "Marketing" },
        { img: image20, category: "Marketing" },
      
        { img: image22, category: "Marketing" },
        { img: image23, category: "Marketing" },
    
        { img: image26, category: "Marketing" },
        { img: image27, category: "Marketing" },      

       
       
    ];
    
      const [current, setcurrent] = useState(Data);

      const Filter = (category) =>{
          const arr = [];
          if(category === "View All"){
          setcurrent(Data)
          }
          else{
          Data.map((item)=> {
              if(item.category === category){
              arr.push(item);
              }
          })
          setcurrent(arr);
          }
      };

  return (
    <>
        <section id="work" className="pt-150 pb-105">
            <div className="container">
                <div className="portfolio ">
                <div className="row align-items-end">
                    {/* <div className="col-lg-12">
                    <div className="my-masonry text-center mb-50 wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s" >
                        <div className="button-group filter-button-group ">
                        <button className="active" data-filter="*" onClick={()=> Filter("View All")} > View All </button>
                        <button data-filter=".financial" onClick={()=> Filter("Financial")} >Financial</button>
                        <button data-filter=".banking" onClick={()=> Filter("Analyzing")} >Analyzing</button>
                        <button data-filter=".insurance" onClick={()=> Filter("Marketing")} >Marketing </button>
                        <button data-filter=".family" onClick={()=> Filter("Business")} >Business</button>
                        </div>
                    </div>
                    </div> */}
                </div>
                <div className="grid col3 row wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s" >
                    {current.map( (item, Index)=> ( 
                        <div className="grid-item financial col-4" key={Index}>
                            {/* <Link to="/single-projects"> */}
                                {/* <figure className="gallery-image"> */}
                                    <img style={{
                                        width: '100%',    // Ensure the image takes the full width of its container
                            height: '300px',  // Set a fixed height
                            objectFit: 'cover' // This makes the image cover the area, zooming in/out as needed
                                        }} src={item.img} alt="img" className="img" />
                                {/* </figure> */}
                            {/* </Link> */}
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First