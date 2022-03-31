import React from 'react';


function Settings() {
  return (
    <>

    <div className="container">                
         <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://raw.githubusercontent.com/rebeccacasii/picturerepo/8eae73a0f0ac6f81f487eb31f0c32cb2e0dd0203/Asobi%20(1).png" class="img-fluid rounded-start" alt="..."/>
    </div>
   
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Profile Settings &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;  <button type="button" class="btn btn-link">Back to Profile</button>
</h2>
        <p class="card-text">Edit Profile Information</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <ul class="list-group list-group-flush">

<li class="list-group-item">
  <div class="input-group mb-3">
  
  <input type="text" class="form-control" placeholder="Change Username" aria-label="Change Username" aria-describedby="button-addon2"/>
<button class="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>


</div>

</li>

<li class="list-group-item"><div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Change password" aria-label="Change password" aria-describedby="button-addon2"/>
<button class="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
</div></li>


<li class="list-group-item"><div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Edit Email" aria-label="Change Email" aria-describedby="button-addon2"/>
<button class="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
</div>
</li>

<li class="list-group-item"><div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Edit Number" aria-label="Change Number" aria-describedby="button-addon2"/>
<button class="btn btn-outline-secondary" type="button" id="button-addon2">Edit</button>
</div>
</li>

</ul>
<div class="card-body">
<button type="button" class="btn btn-link">Deactivate</button>

  </div>

      </div>
      
    </div>
  </div>
</div>
    </div>
    </>
    /*
    <div className="App">
      <header className="App-header">
        <button type="button" className="btn btn-primary">Primary</button>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default Settings;
