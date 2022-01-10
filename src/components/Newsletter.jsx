import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height : 70vh;
    width : 100%;
    background-color : #fcf5f5;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction : column;
`;
const Title = styled.h1`
    font-size : 70px;
    margin-bottom : 10px;
`;
const Desc = styled.div`
    font-size : 24px;
    font-weight : 300;
    margin-bottom : 10px;
`;
const InputContainer = styled.div`
    width : 50%;
    height : 40px;
    display:  flex;
    justify-content: space-between;
    background-color : white;
    border : 1px solid lightgray;
`;
const Input = styled.input`
    border : none;
    flex: 8;
    font-size : 20px;
    padding-left : 20px;
    &:focus{
        outline : none;
    }
`;
const Button = styled.button`
    flex : 1;
    border: none;
    background-color : teal;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Enter Email"/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
