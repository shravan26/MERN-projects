import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 30px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;  
    width : 50%;
`;
const Filter = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
`;
const FilterTitle = styled.span`
    font-size : 20px;
    font-weight :200;
`;
const FilterColor = styled.div`
    width : 20px;
    height: 20px;
    border-radius : 50%;
    background-color : ${props=>props.color};
    margin : 0px 5px;
    cursor: pointer;
    
`;
const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px;
`;
const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    display: flex;
    justify-content : space-between;
    width : 50%;
    align-items : center;
`;

const AmountContainer = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    font-weight : 700;
`;

const Amount = styled.span`
    width : 30px;
    height: 30px;
    border-radius : 10px;
    border: 1px solid teal;
    display: flex; 
    justify-content: center;
    align-items : center;
    margin : 0px 5px;
`;

const Button = styled.button`
    padding : 15px;
    border : 2px solid teal;
    background-color : transparent;
    &:hover{
        background-color : #f8f4f4;
    }
    cursor: pointer;
`;

const Product = () => {
   
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam nulla consequ
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                                <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
