import styled from "styled-components";

interface opacityProp {
  opacity: number;
}

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.5s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Body = styled.body`
  margin-top: 80px;
`;



export const Logo = styled.img`
  width: 80vw;
  max-width: 500px;
`;

export const Input = styled.input`
  width: 100%;
`

export const Subtitle = styled.p<opacityProp>`
font-size: 10em;
width: 100%;
color: gray;
font-weight: bold;
opacity: ${({opacity}) => opacity};
background: #E6E7E1;
`

export const And = styled.p<opacityProp>`
font-size: 3em;
width: 100%;
color: gray;
font-weight: bold;
opacity: ${({opacity}) => opacity};
background: #E6E7E1;
text-align: center;
`
export const Instruction = styled.p`
font-size: 2em;
width: 100%;
color: gray;
font-weight: bold;
text-align: center;
`
export const Direct = styled.button`
background-color: #00909C;
color: white;
border-color: transparent;
font-weight: 600;
padding: 10px 20px;
border-radius: 5px;
max-width: 27em;
width: 100%;
text-decoration:none;
font-size: 1.2em;
margin-top: 20px;

&:hover,
&:active {
  background-color: #004976;
}
`
export const Pic = styled.img`
object-fit: contain;
width: 91vw;
max-width: 500px;
margin-top: 20px;
}
`