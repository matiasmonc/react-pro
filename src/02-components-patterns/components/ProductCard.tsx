import { ReactElement, createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct'
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={ `${styles.productCard} ${className}` } style={ style }>

            {/* <ProductImage img={ product.img } />

            <ProductTitle title={ product.title } />

            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}

            { children }

        </div>
    </Provider>
    
  )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons; 
