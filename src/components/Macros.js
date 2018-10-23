import React from 'react';
import { Button } from 'react-bootstrap'

const Macros = () => {
    return (
        <div className="macros">
            <div id="pricing-table" class="clear">
                <div class="plan">
                    <h3>Protein</h3>
                        <p>200 grams / day</p> {/* Create dynamic Calulation */}
                    <Button bsStyle="primary">See More</Button>
                    <ul>
                        <li><b>12 oz</b> Chicken</li>
                        <li><b>3 large</b> Eggs</li>
                        <li><b>50 g</b> Protein Shake</li>
                    </ul>
                </div>
                <div class="plan">
                    <h3>Carbohydrates</h3>
                    <p>150 grams / day</p> {/* Create dynamic Calulation */}
                    <Button bsStyle="primary">See More</Button>
                    <ul>
                        <li><b>1 cup</b> Brown Rice</li>
                        <li><b>2 slices</b> Ezekiel Bread</li>
                        <li><b>1 large</b> Fruit</li>
                    </ul>
                </div>
                <div class="plan">
                    <h3>Fat</h3>
                    <p>90 grams / day</p> {/* Create dynamic Calulation */}
                    <Button bsStyle="primary">See More</Button>
                    <ul>
                        <li><b>1 handful</b> Cashews</li>
                        <li><b>2 tbsp</b> Olive Oil</li>
                        <li><b>5</b> Email Accounts</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Macros