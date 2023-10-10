
export default function LinkStyle() {
    
    let products = ['tomatoes','pasta','coconut'];
    
    return (
        <div>
            {
                products.map((item, index) => (
                    <div key={index}>
                        <img src={`/food${index}.png`} />
                        <h4>{item} $40</h4>
                    </div>
                ))
            }
        </div>
    )
}