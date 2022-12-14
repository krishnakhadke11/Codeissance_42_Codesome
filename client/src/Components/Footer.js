import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  const  Mystyle={
        position:"absolute",
        left:0,
        bottom:0,
        right:0
    }
  return (
    <MDBFooter style={Mystyle} bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Urgence.com
        </a>
      </div>
    </MDBFooter>
  );
}