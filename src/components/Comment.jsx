import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

function Comment() {
  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/J6uN_K307Hqu9pQh5x9QigigTckcFUzOTdiZrvaWZfL1DcGqLdXWYRGqDyPi3yTsbL4qbSem=s88-c-k-c0x00ffffff-no-rj-mo" />
      <Details>
        <Name>
          Berry Slam <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ipsa!
          Soluta ipsam accusantium eaque, architecto fugit, a quod ex hic
          cupiditate inventore esse sed vero quibusdam tempore quae labore
          voluptas.
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
