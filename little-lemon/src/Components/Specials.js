import greekSalad from './Assets/greek-salad.jpg';
import Bruchetta from './Assets/bruchetta.jpg';
import LemonDessert from './Assets/lemon-dessert.jpg';

export const SPECIALS = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.90',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic androsemary croutons.',
    image: greekSalad,
  },

  {
    id: 2,
    title: 'Bruchetta',
    price: '$12.90',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: Bruchetta,
  },

  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$12.90',
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessert,
  },
];