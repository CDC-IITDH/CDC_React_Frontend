import React from 'react';
import { useState, useEffect } from 'react';
const styles = {
  tableTitle: {
    marginRight: 'auto',
    marginTop: '10px',
    marginLeft: 'auto',
    maxWidth: '600px',
    padding: '5px',
    width: '100%',
  },
  tableTitleH3: {
    color: 'rgb(255, 115, 80)',
    textAlign:"justify",
    fontSize: '30px',
  },
  tableFill: {
    background: 'white',
    borderRadius: '3px',
    borderCollapse: 'collapse',
    height: '320px',
    margin: 'auto',
    maxWidth: '600px',
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
    textAlign: 'left',
    textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
    verticalAlign: 'middle',
  },
  thFirst: {
    borderTopLeftRadius: '3px',
  },
  thLast: {
    borderTopRightRadius: '3px',
    borderRight: 'none',
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
  trFirst: {
    borderTop: 'none',
  },
  trLast: {
    borderBottom: 'none',
  },
  trOdd: {
    background: '#EBEBEB',
  },
  trOddHover: {
    background: '#4E5066',
  },
  td: {
    background: '#FFFFFF',
    color:"black",
    padding: '20px',
    textAlign: 'left',
    verticalAlign: 'middle',
    fontSize: '18px',
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
  mobile:{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    maxWidth: '800px', // Adjust the maximum width as needed
    margin: 'auto',
    padding: '20px',
  },
  desktop:{
    display:"flex",
    marginTop: '10px',
  },
  text:{
    color:"black",
    textAlign:"justify",
    
  }
  
};

const DataTable = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    // Create new objects for modified styles
    const updatedStyles = { ...styles };
    const updatedTableTitle = { ...styles.tableTitle };
  

    return (
      <div style={isDesktop ? styles.desktop:styles.mobile}>
        <div style={styles.tableTitle}>
          <h3 style={styles.tableTitleH3}>Placements at IIT Dharwad are being facilitated by CDC through a tier-based system determined based on the Gross Pay offered by the company as shown in the table .</h3>
          <h4>Fill the Job Notification Form</h4>
          <h5 style={styles.text}>Interested companies will fill out the Job Notification Form. Before filling the form kindly refer to the placement brochure.</h5>
          <h5 style={styles.text}>The company has to provide the following mandatory data as per the forms. The key data required are:</h5>
          <h5 style={styles.text}>a. The CTC & Gross pay offered.</h5>
          <h5 style={styles.text}>b.The geographic location where the job is being offered.</h5>
          <h5 style={styles.text}>c. A brief description of the job and responsibilities, required skill set and selection process.</h5>
        </div>
        <table style={styles.tableFill}>
          <thead>
            <tr>
              <th style={{ ...styles.th, ...styles.textLeft }}>TEIR</th>
              <th style={{ ...styles.th, ...styles.textLeft }}>GROSS PAY</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ ...styles.tr, ...styles.trHover }}>
              <td style={{ ...styles.td, ...styles.textLeft }}>Teir-1</td>
              <td style={{ ...styles.td, ...styles.textLeft }}>≥18 LPA</td>
            </tr>
            <tr style={{ ...styles.tr, ...styles.trHover }}>
              <td style={{ ...styles.td, ...styles.textLeft }}>Teir-2</td>
              <td style={{ ...styles.td, ...styles.textLeft }}>≥15 LPA but 18 LPA</td>
            </tr>
            <tr style={{ ...styles.tr, ...styles.trHover }}>
              <td style={{ ...styles.td, ...styles.textLeft }}>Teir-3</td>
              <td style={{ ...styles.td, ...styles.textLeft }}>≥12 LPA but 15 LPA</td>
            </tr>
            <tr style={{ ...styles.tr, ...styles.trHover }}>
              <td style={{ ...styles.td, ...styles.textLeft }}>Teir-4</td>
              <td style={{ ...styles.td, ...styles.textLeft }}>≥9 LPA but 12 LPA</td>
            </tr>
            <tr style={{ ...styles.tr, ...styles.trHover }}>
              <td style={{ ...styles.td, ...styles.textLeft }}>Teir-5</td>
              <td style={{ ...styles.td, ...styles.textLeft }}>≥6 LPA but 9 LPA</td>
            </tr>
            <tr style={{ ...styles.tr, ...styles.trHover }}>
              <td style={{ ...styles.td, ...styles.textLeft }}>Teir-6</td>
              <td style={{ ...styles.td, ...styles.textLeft }}>≥6 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default DataTable;
