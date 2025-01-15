import express from 'express';
const PORT = 4000;

const app = express();


app.get('/api/products', (req, res) => {

  const products = [
    {
        id : 1,
        name : 'Laptop',
        price : 1000,
        image : 'https://m.media-amazon.com/images/I/71DozMyPCBL.jpg',
    },
    {
        id: 2,
        name : 'Macbook',
        price: 2000,
        image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsaudewala.in%2Fcollections%2Flaptops%2Fapple&psig=AOvVaw1VbKiozE4VgEJowM734aqH&ust=1737046661993000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjU-52Z-IoDFQAAAAAdAAAAABAK'
    },
    {
        id : '3',
        name : 'Iphone',
        price : 3000,
        image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2024%2F09%2Fapple-debuts-iphone-16-pro-and-iphone-16-pro-max%2F&psig=AOvVaw2nk2RnHxJmUumE8XjWFC0u&ust=1737046838523000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDjhPGZ-IoDFQAAAAAdAAAAABAE'
    }
  ]

  if(req.query.search){
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProducts);
    return;
  }


  setTimeout(() => {
    res.send(products);
  },3000);


})


app.listen(PORT,() =>{
    console.log("Server is running on port 4000");
})