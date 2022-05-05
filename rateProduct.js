const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];
const addRate={
    id:'hedfcg',
    userId:'fg12cy',
    rate: 4
}

function addRating(addRate){
    if(addRate.id===products._id){
        const add=products.ratings;
        add.push({userId:addRate.userId,rate:addRate.rate})
        console.log("rating added")
        return add; 
    }
}
addRating()

// const add=products.ratings;
//     add.push({userID:addRate.id,rate: addRate.rate});
//     console.log(add)
//     return products;