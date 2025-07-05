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

// Add more interfaces as needed
