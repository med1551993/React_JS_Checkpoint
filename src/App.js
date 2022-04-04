
import { Button, Form } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Form>
        <h2>Create a new account</h2>
   <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter your name</Form.Label>
    <Form.Control type="email" placeholder="Enter your name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Text className="text-danger">
    password should contain at least 8 characters!
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    Already a member? <a href="#" class="link-primary">Sign in</a>
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Sign up
  </Button>
</Form>
      </header>
    </div>
  );
}

export default App;
