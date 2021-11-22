import React from 'react';
import Navbar from './navbar'
import Container from './container'

const App=()=>{
    return(
        <div>
            <Navbar/>
            <div className="ui grid">
            <div className="four wide column">
                <Container Name={'Nescafe'} img={'https://www.okdam.com/public/upload/product/extra/nescafe-gold-coffee-jar-50g-5fe8636a705a3.jpg'}/>
            </div>
            <div className="four wide column"></div>

                <Container Name={'CoronaBeer'} img={'https://produits.bienmanger.com/34491-0w600h600_Corona_Extra_Mexican_Blonde_Beer.jpg'}/>
            </div>
            
        </div>
    )
}
export default App;