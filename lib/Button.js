import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${(props) => {
    if (props.disabled && !props.invalid) {
      return '#ddd';
    }
    return props.invalid ? '#E53935' : props.backgroundColor;
  }};
  height: 50px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
