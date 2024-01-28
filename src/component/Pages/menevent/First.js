import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import events from '../../../data/events.json';

function First() {
  const itemsPerPage = 6; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const images = require.context("../../../assets/img/events/", true);

  const sortedEvents = events.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const currentDate = new Date();

    if (dateA > currentDate && dateB > currentDate) {
      return dateA - dateB; // Sort upcoming events in ascending order
    } else if (dateA <= currentDate && dateB <= currentDate) {
      return dateB - dateA; // Sort completed events in descending order
    } else {
      // Upcoming events come first, followed by completed events
      return dateA > currentDate ? -1 : 1;
    }
  });

  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            {currentEvents.map((event) => {
              const [day, month, year] = event.date.split(" ");
            return(
              <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                key={event.id}
              >
                <div className="event-item mb-30 hover-zoomin">
                  <div className="thumb">
                    <Link to={`/single-event/${event.id}`}>
                        <img src={images(event.image)} alt="contact-bg-an-11" style={{minHeight:"233px", maxHeight: "300px"}} />                    
                    </Link>
                  </div>
                  <div className="event-content">
                    <div className="date" style={{fontSize:"10px"}}>
                    <strong>{day}</strong> {month} {year}
                    </div>
                    <h3>
                      <Link to={`/single-event/${event.id}`}>{event.title}</Link>
                    </h3>
                    <p>{event.description.split(' ').slice(0, 11).join(' ')}</p>
                    <div className="time">
                      {event.time} <i className="fal fa-long-arrow-right" />{' '}
                      <strong>{event.venue}</strong>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
          <div className="row">
            <div className="col-12">
            <div className="pagination-wrap mt-20 text-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <Link to="#" onClick={() => paginate(currentPage - 1)}>
                  <i className="fas fa-angle-double-left" />
                </Link>
              </li>
              {Array.from({ length: Math.ceil(sortedEvents.length / itemsPerPage) }).map(
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    <Link to="#" onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </Link>
                  </li>
                )
              )}
              <li className={`page-item ${currentPage === Math.ceil(sortedEvents.length / itemsPerPage) ? 'disabled' : ''}`}>
                <Link to="#" onClick={() => paginate(currentPage + 1)}>
                  <i className="fas fa-angle-double-right" />
                </Link>
              </li>
            </ul>
          </nav>
          </div>

            </div>
            <div />
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
