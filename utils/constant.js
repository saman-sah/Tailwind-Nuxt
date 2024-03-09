import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from "../assets/images"

export const NAV_LINKS = [
  {
    to: '#home',
    label: 'Home'
  },
  {
    to: '#about-us',
    label: 'About Us'
  },
  {
    to: '#products',
    label: 'Products'
  },
  {
    to: '#contact-us',
    label: 'Contact Us'
  },
]

export const statistics = [
  {
    value: '1K+',
    label: 'Brands'
  },
  {
    value: '500K+',
    label: 'Shops'
  },
  {
    value: '250K+',
    label: 'Customers'
  },

]

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
]

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
]

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way."
  },
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
]

export const footerLinks = [
  {
      title: "Products",
      links: [
          { label: "Air Force 1", to: "/" },
          { label: "Air Max 1", to: "/" },
          { label: "Air Jordan 1", to: "/" },
          { label: "Air Force 2", to: "/" },
          { label: "Nike Waffle Racer", to: "/" },
          { label: "Nike Cortez", to: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { label: "About us", to: "/" },
          { label: "FAQs", to: "/" },
          { label: "How it works", to: "/" },
          { label: "Privacy policy", to: "/" },
          { label: "Payment policy", to: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { label: "customer@nike.com", to: "mailto:customer@nike.com" },
          { label: "+92554862354", to: "tel:+92554862354" },
      ],
  },
]

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
]