"use client";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // opcional, pode ser emoji ou ícone SVG
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
