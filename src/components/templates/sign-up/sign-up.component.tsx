import {FC, useState, useEffect } from 'react';

import {StyledWrapper, StyledInput } from './sign-up.styles';

type Props = {
  handleSignup: (name: string) => void;
}

const SignUpComponent:FC<Props> = ({handleSignup}) => {
  const [name, setName] = useState('');
  
  const onSignUp = () => {
    if (name.length > 0) {
      handleSignup(name);
    } else {
      handleSignup('player 1')
    }
    setName('');
  } 
  
  return (
    <StyledWrapper>
      <div>
        <StyledInput type="text" placeholder="Ex: Fred" onChange={(evt) => setName(evt.currentTarget.value)} value={name} />
      </div>
      <button onClick={() => onSignUp()}>Go</button>
    </StyledWrapper>
  )
}

export default SignUpComponent;