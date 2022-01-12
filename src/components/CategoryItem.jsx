import styled from "styled-components"
import { mobile } from "../responsive";
const Container = styled.div`
    flex : 1;
    margin: 3px;
    height : 70vh;
    position : relative;
    ${mobile({margin : '3px 0px'})}
`;

const Image = styled.img`
    width : 100%;
    height: 100%;
    object-fit : cover;
    ${mobile({height : '30vh'})}
`;

const Info = styled.div`
    position : absolute;
    top : 0;
    left: 0;
    width : 100%;
    height : 100%;
    display: flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`;

const Title = styled.h1`
    color : white;
    font-weight : 600;
    margin-bottom : 20px;
`;

const Button = styled.button`
    background-color : white;
    color: gray;
    font-weight : 600;
    border: none;
    padding :10px; 
    cursor: pointer;
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
