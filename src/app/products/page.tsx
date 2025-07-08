// src/app/products/page.tsx
import Image from "next/image";
import Link from "next/link";

// ProductCard 컴포넌트 (만약 별도 파일로 분리하지 않았다면 여기에 함께 정의)
// 이상적으로는 src/components/common/ProductCard.tsx 등으로 분리하는 것이 좋습니다.
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-48">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 text-sm">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </span>
            <span className="text-gray-500 text-xs ml-2">
              ({product.reviews} 리뷰)
            </span>
          </div>
          <p className="text-xl font-bold text-green-600">
            {product.price.toLocaleString()}원
          </p>
        </div>
      </Link>
    </div>
  );
};

// 상품 데이터 (이 데이터를 여기에 두거나, src/data/products.ts 등으로 분리할 수 있습니다)
const products: Product[] = [
  // ... 상품 데이터 배열
  {
    id: 1,
    name: "유기농 신선 배추",
    price: 5000,
    imageUrl: "/images/cabbage.jpg",
    category: "채소",
    rating: 5,
    reviews: 120,
  },
  {
    id: 2,
    name: "GAP 인증 사과 (5kg)",
    price: 25000,
    imageUrl: "/images/apple.jpg",
    category: "과일",
    rating: 4,
    reviews: 85,
  },
  {
    id: 3,
    name: "1등급 한우 등심",
    price: 70000,
    imageUrl: "/images/beef.jpg",
    category: "축산",
    rating: 5,
    reviews: 200,
  },
  {
    id: 4,
    name: "완도산 활 전복",
    price: 45000,
    imageUrl: "/images/abalone.jpg",
    category: "수산",
    rating: 4,
    reviews: 90,
  },
  {
    id: 5,
    name: "제주 햇감자 (10kg)",
    price: 18000,
    imageUrl: "/images/potato.jpg",
    category: "채소",
    rating: 4,
    reviews: 60,
  },
  {
    id: 6,
    name: "친환경 유정란 (30구)",
    price: 15000,
    imageUrl: "/images/egg.jpg",
    category: "축산",
    rating: 5,
    reviews: 150,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {" "}
      {/* layout.tsx에서 처리하지 않는 배경색은 여기에 */}
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">농산물 상품</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
