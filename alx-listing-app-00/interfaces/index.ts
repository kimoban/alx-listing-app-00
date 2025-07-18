<<<<<<< HEAD
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
export interface Hotel {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

=======
>>>>>>> 4e6d64a7a72f8bfda8a2adc4e5da6920ae89a5c7
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
<<<<<<< HEAD
export interface HeaderProps {
  title: string;
  subtitle?: string;
  logoUrl?: string;

}
=======

// Add more interfaces as needed
>>>>>>> 4e6d64a7a72f8bfda8a2adc4e5da6920ae89a5c7
