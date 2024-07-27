import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const handleSubmit = () => {
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Phone = document.getElementById("phone").value;
    let Error = document.getElementById("error");
    let Text ="";

    if (Name.length < 3) {
      Text = "Name must be at least 3 characters long"
      Error.innerHTML = Text;
      return false;
    }
    
    else if ((typeof Email === 'string' ? Email.indexOf("@") === -1 : -1 ) && Email.length < 7){
      Text = "Email must be at least 7 characters long and contain @"
      Error.innerHTML = Text;
      return false;
    }
    
    else if(isNaN(Phone) || Phone.length !== 11){
      Text = "Phone number must be 11 digits long"
      Error.innerHTML = Text;
      return false;
    }
    
    else{
      alert('Form submitted successfully')
      return true;
    }

  }


  return (
    <>
      <Container className='validat' >

        <h1 className='text-center'>Contact Us</h1>
        <div id='error'></div>
        
        <form onSubmit={handleSubmit()} noValidate>

          <input type='text' placeholder='Username' id='name' />
          <br></br>
          <input type='email' placeholder='E-mail' id='email' />
          <br></br>
          <input type='Phone' placeholder='Phone' id='phone' />
          <br></br>
          <button className='btn' type='submit'>Send</button> 
        
        </form>
        
      </Container>
    </>
  );
}

export default App;
