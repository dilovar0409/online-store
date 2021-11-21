import styled from "styled-components"

const Container = styled.div`
    display: flex;
    padding: 100px 40px;
    @media screen and (max-width: 380px){
        flex-wrap: wrap;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

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
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
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

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Contact = () => {
    return (
        <Container>
            <Left>
                <Logo>MARKET</Logo>
                <Desc>
                    There are many variations passages of Lorem Ipsun available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <i class="fab fa-facebook-f"></i>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <i class="fab fa-instagram"></i>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <i class="fab fa-twitter"></i>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <i class="fab fa-telegram-plane"></i>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><i class="fas fa-map-marker-alt" style={{ marginRight: "15px" }}></i> Uzbekistan Toshkent viloyat Angren Shaxar 3/2 7-8</ContactItem>
                <ContactItem><i class="fas fa-id-card-alt" style={{ marginRight: "10px" }} ></i> +998 93 616 63 56</ContactItem>
                <ContactItem><i class="fas fa-envelope-open-text" style={{ marginRight: "15px" }}></i> dilovarbobokulov1997@icloud.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Contact;
