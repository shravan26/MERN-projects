import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const ProductPrice = styled.div`
    font-weight: 200;
    font-size: 30px;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
`;
const ProductAmount = styled.span`
    font-size: 24px;
    font-weight: 500;
    padding: 10px;
    margin: 5px;
    border: 1px solid teal;
    border-radius: 10px;
`;

const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`;

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 10px;
    text-align: center;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "600"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width : 100%;
    padding : 20px;
    font-weight: 600;
    background-color : black; 
    color : white;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> JESSE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 8979797440
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size:</b> 37.5
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 5578914940
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize>
                                        <b>Size:</b> L
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductAmount>2</ProductAmount>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping Cost
                            </SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Discounted Shipping Cost
                            </SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
