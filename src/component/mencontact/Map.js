import React from 'react'

function Map() {
  return (
    <>
        <div className="map fix" style={{ background: "#fff" }}>
            <div className="container-flud">
                <div className="row" style={{ justifyContent: 'center', alignContent: "center" }}>
                <div className="col-lg-12" style={{maxWidth: "1400px", padding: "20px"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30757.839616513735!2d74.93464591396238!3d15.49895125079674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf32db0fffffff%3A0x41e1ca5b252a94d!2sIndian%20Institute%20of%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1705944734475!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Map