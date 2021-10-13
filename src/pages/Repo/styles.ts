import styled from "styled-components";

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

export const Body = styled.div`
  margin-top: 80px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const ContentHeader = styled.div`
  margin-left: 84px;
`;

export const ContentTitle = styled.div`
  font-size: 36px;
  color: #3d3d4d;
  font-weight: bold;
`;

export const ContentSubTitle = styled.div`
  font-size: 18px;
  color: #737380;
`;

export const ContentList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 40px;
`;

export const ContentListItem = styled.li`
  & + li {
    margin-left: 80px;
  }
`;

export const ListTitle = styled.strong`
  display: block;
  font-size: 36px;
  color: #3d3d4d;
`;

export const ListContent = styled.span`
  display: block;
  margin-top: 4px;
  color: #737380;
`;

export const Issues = styled.section`
margin-top: 80px;

`;

export const IssueLink = styled.a`
background: white;
border-radius: 5px;
width: 100%;
padding: 24px;
display: flex;
text-decoration: none;
align-items: center;
transition: transform 0.2s;

&:hover{
  transform: translateX(6px);
}

& + a {
  margin-top: 16px;
}

`;

export const IssuesTitle = styled.strong`
font-size: 20px;
color: #3d3d4d;
`;

export const IssueWrapper = styled.div`
margin-top: 0 16px;
flex: 1;
`;

export const IconWrapper = styled.div`
svg{
  margin-left: auto;
  color: #cbcbd6;
}
`;

export const IssuesContent = styled.p`
font-size: 18px;
color: #a8a8b3;
`;
