import React from 'react'

function Map() {
  return (
    <>
        <div className="map fix" style={{ background: "#f5f5f5" }}>
            <div className="container-flud">
                <div className="row">
                <div className="col-lg-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30754.87647385605!2d74.893053173338!3d15.518843786641252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf3374630048df%3A0xce8a50f437a61c46!2sIndian%20Institute%20Of%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1689413056982!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Map