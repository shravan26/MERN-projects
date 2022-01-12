import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height : 30px;
    background-color : teal;
    color: white;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 14px;
    font-weight : 500;
    ${mobile({width : '100%'})}
`;

const Announcements = () => {
    return (
        <Container>
            Super deal! Free shipping on orders over $50 
        </Container>
    )
}

export default Announcements
