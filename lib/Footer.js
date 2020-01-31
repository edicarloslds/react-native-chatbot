import styled from 'styled-components/native';

const Footer = styled.View`
  border-top-width: 1px;
  border-color: ${(props) => {
    if (props.disabled && !props.invalid) {
      return '#ddd';
    }
    return props.invalid ? '#E53935' : props.color;
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Footer;
