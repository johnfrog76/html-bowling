import { FC, useState, useEffect } from 'react';

import { StyledWrapper, StyledInput, StyledInputWrap } from './sign-up.styles';

type Props = {
  handleSignup: (name: string) => void;
}

const SignUpComponent: FC<Props> = ({ handleSignup }) => {
  const [name, setName] = useState('');

  const onSignUp = () => {
    if (name.length > 0) {
      handleSignup(name);
    } else {
      handleSignup('player 1')
    }
    setName('');
  }
  const enterKye = (evt: any) => {
    if (evt?.key === "Enter") {
      onSignUp();
    }
  }


  return (
    <StyledWrapper>
      <StyledInputWrap>
        <StyledInput type="text" placeholder="Ex: Fred Flintstone" onKeyPress={(evt) => enterKye(evt)} onChange={(evt) => setName(evt.currentTarget.value)} value={name} />
      </StyledInputWrap>
      <button onClick={() => onSignUp()}>Go</button>
    </StyledWrapper>
  )
}

export default SignUpComponent;