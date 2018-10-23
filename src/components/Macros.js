import React from 'react';

const Macros = () => {
    return (
        // <div className="table">
        //     <div id="pricing-table" className="clear">
        //         <div className="plan">
        //             <h3>Protein</h3>
        //                 <p>200 grams / day</p> {/* Create dynamic Calulations */}
        //             <Button bsStyle="primary">More Info</Button>
        //             <ul>
        //                 <li><b>12 oz</b> Chicken</li>
        //                 <li><b>3 large</b> Eggs</li>
        //                 <li><b>50 g</b> Protein Shake</li>
        //             </ul>
        //         </div>
        //         <div className="plan">
        //             <h3>Carbohydrates</h3>
        //             <p>150 grams / day</p> {/* Create dynamic Calulations */}
        //             <Button bsStyle="primary">More Info</Button>
        //             <ul>
        //                 <li><b>1 cup</b> Brown Rice</li>
        //                 <li><b>2 slices</b> Ezekiel Bread</li>
        //                 <li><b>1 large</b> Fruit</li>
        //             </ul>
        //         </div>
        //         <div className="plan">
        //             <h3>Fat</h3>
        //             <p>90 grams / day</p> {/* Create dynamic Calulations */}
        //             <Button bsStyle="primary">More Info</Button>
        //             <ul>
        //                 <li><b>1 handful</b> Cashews</li>
        //                 <li><b>2 tbsp</b> Olive Oil</li>
        //                 <li><b>2 tbsp</b> Peanut Butter</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>



        <div className="macros-table" id="tracker">
            <table className="table-fill">
                <thead>
                    <tr>
                        <th>Protein</th>
                        <th>Carbohydrates</th>
                        <th>Fat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>200 grams / day</td>
                        <td>150 grams / day</td>
                        <td>90 grams / day</td>
                    </tr>
                    <tr>
                        <td><b>12 oz</b> Chicken</td>
                        <td><b>1 cup</b> Brown Rice</td>
                        <td><b>1 handful</b> Cashews</td>
                    </tr>
                    <tr>
                        <td><b>3 large</b> Eggs</td>
                        <td><b>2 slices</b> Ezekiel Bread</td>
                        <td><b>2 tbsp</b> Olive Oil</td>
                    </tr>
                    <tr>
                        <td><b>50 g</b> Protein Shake</td>
                        <td><b>1 large</b> Fruit</td>
                        <td><b>2 tbsp</b> Peanut Butter</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            {/* Create Component for */}
        </div>

    )
}



export default Macros