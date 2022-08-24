import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;   
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: orange;
        transform: scale(1.05);
        color:white;
        transition: all 0.5s ease;
        border-radius: 5px;
  }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem