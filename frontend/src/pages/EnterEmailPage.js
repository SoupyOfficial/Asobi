import React from 'react';
import EnterEmail from '../components/EnterEmail';

const EnterEmailPage = () =>
{
    
    return(
      <>
        <div className="primaryBackground" style={{minHeight: "100vh", maxHeight:"100vh", minWidth:"100vw", maxWidth:"100vw"}}>        
          <EnterEmail/>
        </div>
      </>
    );
};

export default EnterEmailPage;