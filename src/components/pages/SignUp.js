import { render } from '@testing-library/react';
import '../../App.css';


export default function SignUp() {
  localStorage.removeItem('user');
        localStorage.removeItem('pass');
        window.location.reload();
render();

  
}
