import React from "react";
import { useState, useEffect } from "react";

const Interninfo = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const styles = {
    tableTitle: {
      paddingTop: "3%",
      paddingBottom: "3%",
      maxWidth: "1170px",
    },
    // section: {
    //   marginLeft:isDesktop? '40px':"0px", // Indentation for subtext
    // },
    tableTitleH3: {
      color: "rgb(255, 115, 80)",
      textAlign: "justify",
      fontSize: "24px",
      marginBottom: "20px", // Added bottom margin for spacing
    },
    desktop: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto",
    },
    text: {
      color: "black",
      textAlign: "justify",
      fontSize: "18px", // Adjusted font size for readability
    },
    subText: {
      marginLeft: isDesktop ? "20px" : "0px", // Indentation for subtext
      fontSize: "18px", // Smaller font size for subtext
      textAlign: "justify",
      color: "black",
    },
    sectionTitle: {
      color: "rgb(18, 88, 117)", // Adjusted color for section titles
      fontSize: "22px", // Increased font size for section titles
      marginTop: "20px", // Spacing before each section
      textAlign: "justify",
    },
    sub1: {
      marginLeft: isDesktop ? "30px" : "0px", // Indentation for subtext
      textAlign: "justify",
    },
    mobile: {
      padding: "5%",
      width: "100%",
    },
  };
  return (
    <div style={styles.desktop}>
      <div style={isDesktop ? styles.tableTitle : styles.mobile}>
        <h3 style={styles.tableTitleH3}>
          The Career Development Cell (CDC) at IIT Dharwad is responsible for
          facilitating the internship process for the students. The CDC acts as
          an interface between the industry and the students, and primarily
          enables the students to select the internship of their choice. The CDC
          also helps the companies in recruiting the best talent from the
          institute.
        </h3>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>
            1. Fill the Internship Notification Form
          </h4>
          <div style={styles.sub1}>
            <h5 style={styles.text}>
              Different modes of internships that IIT Dharwad offers are
              explained
              <a
                href="https://drive.google.com/file/d/1a8cRL4i3aeEWcCVRQIRAv-DrFybPl9N0/view"
                target="_blank"
                style={{ color: "rgb(255, 115, 80)" }}
              >
                {" "}
                here
              </a>
              .
            </h5>
            <h5 style={styles.text}>
              Interested companies will fill out the
              <a
                href="https://cdc.iitdh.ac.in/portal/inf"
                target="_blank"
                style={{ color: "rgb(255, 115, 80)" }}
              >
                {" "}
                Internship Notification Form
              </a>
              .
            </h5>
            <h5 style={styles.text}>
              The company has to provide the following mandatory data as per the
              forms. The key data required are:
            </h5>
            <h5 style={styles.subText}>a) Stipend.</h5>
            <h5 style={styles.subText}>
              b) The geographic location where the Intenship is being offered
            </h5>
            <h5 style={styles.subText}>
              c) A brief description of the job and responsibilities, required
              skill set and selection process.
            </h5>
          </div>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>2. Pre-assessment / Shortlist</h4>
          <div style={styles.sub1}>
            <h5 style={styles.text}>
              Resumes of the interested students are made available to the
              companies. The companies shortlist the students on the basis of
              their resumes.
            </h5>
          </div>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>3. Examination / Test</h4>
          <div style={styles.sub1}>
            <h5 style={styles.text}>
              Companies conduct various examinations in the form of written or
              online tests. The students are eligible for the further process on
              the basis of their performance in the examination.
            </h5>
          </div>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>4. Interview</h4>
          <div style={styles.sub1}>
            <h5 style={styles.text}>
              After the preliminary test/examination, the company will send us
              the list of the students shortlisted for the interview and the
              details about the schedule of interview. If needed the CDC will
              help in arranging for the interview in the campus.
            </h5>
          </div>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>5. Offer</h4>
          <div style={styles.sub1}>
            <h5 style={styles.text}>
              After the interview, the company will send out offer letters to
              the students selected, offering to join the internship.
            </h5>
          </div>
        </div>
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>6. Student Accept / Reject</h4>
          <div style={styles.sub1}>
            <h5 style={styles.text}>
              The final decision of whether to accept or reject the offer rests
              with the student, and the student has to inform about this
              decision within the stipulated time.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interninfo;
