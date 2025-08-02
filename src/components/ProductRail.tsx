import { mockData, Product } from '../data/mockData';

interface ProductRailProps {
  query: string;
}

export function ProductRail({ query }: ProductRailProps) {
  const filterProducts = (products: Product[], query: string): Product[] => {
    if (!query) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowerQuery) ||
      product.benefit.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredProducts = filterProducts(mockData.products, query);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : mockData.products;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Products & Solutions</h2>
        <button className="text-[#0066CC] hover:text-blue-700 font-medium text-sm">
          View all products →
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayProducts.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                {/* Placeholder for product thumbnail */}
                <div className="w-8 h-8 bg-[#0066CC] rounded"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {product.name}
                </h3>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {product.benefit}
            </p>
            
            <button className="w-full bg-[#0066CC] text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors">
              {product.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}