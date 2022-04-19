import React from 'react';
import Verify from '../components/Verify';

const VerifyPage = () =>
{
    
    return(
      <>
        <div className="primaryBackground" style={{minHeight: "100vh", maxHeight:"100vh", minWidth:"100vw", maxWidth:"100vw"}}>        
          <Verify/>
        </div>
      </>
    );
};

export default VerifyPage;