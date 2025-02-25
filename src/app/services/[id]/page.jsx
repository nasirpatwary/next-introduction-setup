import React from 'react';

const ServicesDetailPage = ({ params }) => {
    const id = params?.id
    const data = [
        {
            "_id": "642c155b2c4774f05c36eeaa",
            "name": "Haddock",
            "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
            "category": "salad",
            "price": 14.7
        },
        {
            "_id": "642c155b2c4774f05c36eeb9",
            "name": "Haddock",
            "recipe": "Chargrilled fresh tuna steak (served medium rare) on classic Niçoise salad with French beans.",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-1-370x247.jpg",
            "category": "drinks",
            "price": 14.7
        },
        {
            "_id": "642c155b2c4774f05c36ee7c",
            "name": "Escalope de Veau",
            "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
            "category": "popular",
            "price": 14.5
        },
        {
            "_id": "642c155b2c4774f05c36ee88",
            "name": "Escalope de Veau",
            "recipe": "Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg",
            "category": "dessert",
            "price": 12.5
        },
        {
            "_id": "642c155b2c4774f05c36ee7a",
            "name": "Roast Duck Breast",
            "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
            "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
            "category": "popular",
            "price": 14.5
        },
    ]
    const singleService = data.find((d) => d._id === id)
    if(singleService){
        return (
            <div>
                <h1>ServiceDetailPage</h1>
                <p>ID: {id}</p>
                <p>{singleService.name}</p>
                <img src={singleService.image} alt="" />
                <p>{singleService.recipe}</p>
            </div>
        );
    }else{
        return (
            <>    
            <p>Not Found Page</p>
            </>
        )
    }
};

export default ServicesDetailPage;