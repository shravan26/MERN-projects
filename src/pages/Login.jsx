import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
            center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    font-size: 20px;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    border: none;
    margin: 10px 0px;
    cursor : pointer;
    &:disabled {
        color : green,
        cursor : not-allowed;
    }
`;
const Link = styled.a`
    margin : 5px 0px;
    text-decoration : underline;
    cursor : pointer;
`;
const Error = styled.p`
    color : red;
    font-size : 14px;
`;
const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {isFetching,error} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        login(dispatch,{username, password});
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button disabled={isFetching} onClick={handleSubmit}>LOGIN</Button>
                    {error && <Error>Something went wrong ...</Error>}
                    <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT?</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
