import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product';

export default function Product() {
  // const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,98</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          pariatur nam aspernatur ab iusto cum placeat omnis at totam officiis
          culpa distinctio non, ipsam quaerat maxime vero. Earum, rerum
          provident.
        </p>

        <button type="submit">Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
