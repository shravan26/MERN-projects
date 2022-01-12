import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection : 'column'})}
`;
const Logo = styled.h1`
    font-weight: 700;
    font-size: 30px;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #${(props) => props.color};
    margin: 0px 10px;
`;

const ContactItem = styled.div`
    display : flex;
    justify-content: flex-start;
    align-center: center;
    margin-bottom: 20px;
`;

const Payment = styled.img`

`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracker</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight : '10px'}}/> 622 Dixie Path, South Tobichester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight : '10px'}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight : '10px'}}/> contact@lama.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
