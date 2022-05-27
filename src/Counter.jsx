import React,{useState,useEffect} from 'react';
import './App.css';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  const [count,setCount] = useState(0);
    useEffect(()=>{
         console.log('Mounting');
    },[count]);
  return (
    <div className="App">
        <header className="App-header">


        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Hello iam Couter Component : {count}</Card.Subtitle>
          <Card.Text>
          <Button variant="light" onClick={()=>setCount(count+1)}>Increment</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      </header>
    </div>
  )
}

export default Counter
