import React, { useState, useEffect } from 'react';

const Placementinfo = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    titleH3: {
      color: 'rgb(255, 115, 80)',
      textAlign: 'justify',
      fontSize: '24px',
      marginBottom: '20px',
    },
    layout: {
      display: isDesktop ? 'flex' : 'grid',
      flexDirection: 'column',
      gap: isDesktop ? '0px' : '10px',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1170px',
      margin: '0 auto',
      padding: isDesktop ? '0' : '3%',
      paddingTop: '0',
    },
    text: {
      color: 'rgb(18, 88, 117)',
      textAlign: 'justify',
      fontSize: '24px',
    },
    subText: {
      marginLeft: isDesktop ? '0px' : '0px',
      fontSize: '18px',
      color: 'black',
    },
    subText2: {
      marginLeft: isDesktop ? '40px' : '0px',
      fontSize: '20px',
      color: 'black',
    },
    tableFill: {
      background: 'white',
      borderRadius: '3px',
      borderCollapse: 'collapse',
      height: '320px',
      margin: 'auto',
      maxWidth: '500px',
      padding: '5px',
      width: '100%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
      animation: 'float 5s infinite',
      marginBottom: '18px',
    },
    th: {
      color: 'white',
      background: 'rgb(255, 115, 80)',
      borderRight: '1px solid #343a45',
      fontSize: '23px',
      padding: '24px',
      textAlign: 'center',
      textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
      verticalAlign: 'middle',
    },
    tr: {
      borderTop: '1px solid #C1C3D1',
      borderBottom: '1px solid #C1C3D1',
      color: '#666B85',
      fontSize: '16px',
      fontWeight: 'normal',
      textShadow: '0 1px 1px rgba(256, 256, 256, 0.1)',
    },
    trHover: {
      background: '#4E5066',
      color: '#FFFFFF',
      borderTop: '1px solid #22262e',
    },
    td: {
      background: '#FFFFFF',
      color: 'black',
      padding: '20px',
      textAlign: 'center',
      verticalAlign: 'middle',
      fontSize: '18px',
      fontFamily: 'Jost',
      textShadow: '-1px -1px 1px rgba(0, 0, 0, 0.1)',
      borderRight: '1px solid #C1C3D1',
    },
    tdLast: {
      borderRight: '0px',
    },
    textLeft: {
      textAlign: 'left',
    },
    textCenter: {
      textAlign: 'center',
    },
    textRight: {
      textAlign: 'right',
    },
    desktop:{
      display:"flex",
      marginTop: '10px',
      gap: '40px',
      maxWidth:"1170px",
      margin:"auto",
    },
    mobile:{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      maxWidth: '1200px', // Adjust the maximum width as needed
      margin: 'auto',
      padding:"5%",
      paddingTop:"0%",
    },
  };

  return (
    <div style={styles.layout}>
      <div>
        <h3 style={styles.titleH3}>
          Placements at IIT Dharwad are being facilitated by CDC through a tier-based system determined based on the Gross Pay offered by the company as shown in the table below.
        </h3>
      </div>
<div style={isDesktop ? styles.desktop:styles.mobile}>
      <div>
        <h3 style={styles.text}>Fill the Job Notification Form</h3>
        <h5 style={styles.subText}>
          Interested companies will fill out the Job Notification Form. 
        </h5>
        
        <h5 style={styles.subText}>
        Before filling the form kindly refer to the placement brochure.
        </h5>
        <h5 style={styles.subText}>
          The company has to provide the following mandatory data as per the forms. The key data required are:
        </h5>
        <div style={styles.subText2}>
          <h5>a) The CTC & Gross pay offered.</h5>
          <h5>b) The geographic location where the job is being offered.</h5>
          <h5>c) A brief description of the job and responsibilities, required skill set and selection process.</h5>
        </div>
        
      </div>

      <table style={styles.tableFill}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.textCenter }}>TIER</th>
            <th style={{ ...styles.th, ...styles.textCenter }}>GROSS PAY</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ ...styles.tr, ...styles.trHover }}>
            <td style={styles.td}>Tier-1</td>
            <td style={styles.td}>≥18 LPA</td>
          </tr>
          <tr style={{ ...styles.tr, ...styles.trHover }}>
            <td style={styles.td}>Tier-2</td>
            <td style={styles.td}>≥15 LPA but &lt; 18 LPA</td>
          </tr>
          <tr style={{ ...styles.tr, ...styles.trHover }}>
            <td style={styles.td}>Tier-3</td>
            <td style={styles.td}>≥12 LPA but &lt; 15 LPA</td>
          </tr>
          <tr style={{ ...styles.tr, ...styles.trHover }}>
            <td style={styles.td}>Tier-4</td>
            <td style={styles.td}>≥9 LPA but &lt;  12 LPA</td>
          </tr>
          <tr style={{ ...styles.tr, ...styles.trHover }}>
            <td style={styles.td}>Tier-5</td>
            <td style={styles.td}>≥6 LPA but &lt; 9 LPA</td>
          </tr>
          <tr style={{ ...styles.tr, ...styles.trHover }}>
            <td style={styles.td}>Tier-6</td>
            <td style={styles.td}>≥4 LPA but &lt; 6 LPA</td>
          </tr>
          {/* ... add more rows as needed */}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Placementinfo;
