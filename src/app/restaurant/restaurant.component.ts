import { Component } from '@angular/core';
import { IRestaurant } from './interfaces';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  restaurants:IRestaurant[] = [
    {
      "name": "The Rusty Spoon",
      "cuisineType": "American",
      "rate": 4.5,
      "distance": "2 miles",
      "priceRange": "$$"
    },
    {
      "name": "La Trattoria",
      "cuisineType": "Italian",
      "rate": 4.2,
      "distance": "1.5 miles",
      "priceRange": "$$$"
    },
    {
      "name": "Sushi Delight",
      "cuisineType": "Japanese",
      "rate": 4.8,
      "distance": "3 miles",
      "priceRange": "$$"
    },
    {
      "name": "Le Petit Paris",
      "cuisineType": "French",
      "rate": 4.7,
      "distance": "1 mile",
      "priceRange": "$$$"
    },
    {
      "name": "El Taquito",
      "cuisineType": "Mexican",
      "rate": 4.4,
      "distance": "2.5 miles",
      "priceRange": "$"
    },
    {
      "name": "Golden Wok",
      "cuisineType": "Chinese",
      "rate": 4.0,
      "distance": "2 miles",
      "priceRange": "$$"
    },
    {
      "name": "Taj Mahal",
      "cuisineType": "Indian",
      "rate": 4.6,
      "distance": "3.5 miles",
      "priceRange": "$$$"
    },
    {
      "name": "BBQ Heaven",
      "cuisineType": "Barbecue",
      "rate": 4.3,
      "distance": "4 miles",
      "priceRange": "$$"
    },
    {
      "name": "Pasta Palace",
      "cuisineType": "Italian",
      "rate": 4.1,
      "distance": "2 miles",
      "priceRange": "$$"
    },
    {
      "name": "Veggie Delight",
      "cuisineType": "Vegetarian",
      "rate": 4.9,
      "distance": "1 mile",
      "priceRange": "$$"
    },
    {
      "name": "Burger Barn",
      "cuisineType": "American",
      "rate": 4.0,
      "distance": "2.5 miles",
      "priceRange": "$"
    },
    {
      "name": "Tokyo Nights",
      "cuisineType": "Japanese",
      "rate": 4.7,
      "distance": "3 miles",
      "priceRange": "$$$"
    },
    {
      "name": "Casa de Tapas",
      "cuisineType": "Spanish",
      "rate": 4.5,
      "distance": "1.5 miles",
      "priceRange": "$$$"
    },
    {
      "name": "Mama Mia",
      "cuisineType": "Italian",
      "rate": 4.2,
      "distance": "2 miles",
      "priceRange": "$$"
    },
    {
      "name": "Thai Orchid",
      "cuisineType": "Thai",
      "rate": 4.8,
      "distance": "3 miles",
      "priceRange": "$$"
    },
    {
      "name": "Kebab Kingdom",
      "cuisineType": "Middle Eastern",
      "rate": 4.4,
      "distance": "2 miles",
      "priceRange": "$"
    },
    {
      "name": "Sabor Latino",
      "cuisineType": "Latin American",
      "rate": 4.6,
      "distance": "1 mile",
      "priceRange": "$$"
    },
    {
      "name": "Pizza Planet",
      "cuisineType": "Pizza",
      "rate": 4.3,
      "distance": "2.5 miles",
      "priceRange": "$"
    },
    {
      "name": "Cafe Parisien",
      "cuisineType": "French",
      "rate": 4.7,
      "distance": "1.5 miles",
      "priceRange": "$$$"
    },
    {
      "name": "Seafood Cove",
      "cuisineType": "Seafood",
      "rate": 4.5,
      "distance": "4 miles",
      "priceRange": "$$$"
    }
  ]
 
}
