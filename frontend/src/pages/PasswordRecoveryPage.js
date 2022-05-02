import React from 'react';
import PasswordRecovery from '../components/PasswordRecovery';

const PasswordRecoveryPage = () =>
{
    
    return(
      <>
        <div className="primaryBackground" style={{minHeight: "100vh", maxHeight:"100vh", minWidth:"100vw", maxWidth:"100vw"}}>        
          <PasswordRecovery/>
        </div>
      </>
    );
};

export default PasswordRecoveryPage;