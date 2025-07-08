// src/components/layout/Header.tsx
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react"; // lucide-react 설치했다면 그대로 사용

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-green-700">
          서비스명
        </Link>
        <nav className="ml-8 hidden md:block">
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link href="/products" className="hover:text-green-600">
                상품
              </Link>
            </li>
            <li>
              <Link href="/community" className="hover:text-green-600">
                커뮤니티
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600">
                회사소개
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ShoppingCart className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <User className="w-5 h-5 text-gray-600" />
        </button>
        <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
