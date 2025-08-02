import React from 'react'
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react'
import { Product } from '../data/mockData'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
  className?: string
}

export default function ProductCard({ product, onSelect, className = '' }: ProductCardProps) {
  return (
    <div 
      className={`bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer group hover:shadow-lg ${className}`}
      onClick={() => onSelect(product)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center border border-blue-200">
              <div className="text-2xl">{product.features?.[0]?.icon || '📊'}</div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description || product.benefit}
        </p>

        {/* Key Features Preview */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-1 bg-gray-50 px-2 py-1 rounded-md text-xs text-gray-600"
                >
                  <span>{feature.icon}</span>
                  <span>{feature.title}</span>
                </div>
              ))}
              {product.features.length > 3 && (
                <div className="bg-blue-50 px-2 py-1 rounded-md text-xs text-blue-600 font-medium">
                  +{product.features.length - 3} more
                </div>
              )}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>1000+ customers</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4" />
            <span>ROI: 300%</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-gray-500">Starting from</span>
            <div className="font-semibold text-gray-900">
              {product.pricing || 'Contact for pricing'}
            </div>
          </div>
          <button className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors group-hover:bg-blue-700">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}