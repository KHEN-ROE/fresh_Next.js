import { price, name } from "./data"
import Greeting from "./Greeting"

export default function Cart() {
    let wish = ['tomatoes', 'pasta']
    let company = '현대';
    let color = 'blue';
    return (
        <div>
            <Btn color={color}/>
            <Banner company={company} />
            <h4 className="title">Cart</h4>
            <CartItem wish={wish} />
        </div>
    )
}

const Banner = ({ company }) => {

    return (
        <h5>{`${company}카드 결제 행사중`}</h5>
    )
}

function Btn({color}) {
    return (
        <>
            <button style={{background: `${color}`}}>버튼</button>
        </>
    )
}


const CartItem = ({ wish }) => {

    return (
        <>
            {
                wish.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                ))

            }
        </>
    )
}