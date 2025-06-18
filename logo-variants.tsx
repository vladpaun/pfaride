"use client"

export default function LogoVariants() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Variante Logo PFA Ride</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Varianta 1 - Font Bold Modern */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 1 - Bold Modern</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Bold */}
              <text x="20" y="75" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" fill="#2196F3">
                PFA
              </text>

              {/* RIDE Text - Bold */}
              <text x="85" y="75" fontSize="28" fontWeight="900" fontFamily="Arial Black, sans-serif" fill="#2c3e50">
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 2 - Font Elegant Serif */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 2 - Elegant Serif</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Serif */}
              <text x="20" y="75" fontSize="26" fontWeight="600" fontFamily="Georgia, serif" fill="#2196F3">
                PFA
              </text>

              {/* RIDE Text - Serif */}
              <text x="85" y="75" fontSize="26" fontWeight="600" fontFamily="Georgia, serif" fill="#2c3e50">
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 3 - Font Tehnic/Industrial */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 3 - Tehnic</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Monospace */}
              <text x="20" y="75" fontSize="24" fontWeight="700" fontFamily="Courier New, monospace" fill="#2196F3">
                PFA
              </text>

              {/* RIDE Text - Monospace */}
              <text x="85" y="75" fontSize="24" fontWeight="700" fontFamily="Courier New, monospace" fill="#2c3e50">
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 4 - Font Condensed */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 4 - Condensed</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Condensed */}
              <text
                x="20"
                y="75"
                fontSize="28"
                fontWeight="800"
                fontFamily="Arial Narrow, sans-serif"
                fill="#2196F3"
                style={{ letterSpacing: "-1px" }}
              >
                PFA
              </text>

              {/* RIDE Text - Condensed */}
              <text
                x="80"
                y="75"
                fontSize="28"
                fontWeight="800"
                fontFamily="Arial Narrow, sans-serif"
                fill="#2c3e50"
                style={{ letterSpacing: "-1px" }}
              >
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 5 - Font Rotunjit/Friendly */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 5 - Rotunjit</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Rounded */}
              <text x="20" y="75" fontSize="26" fontWeight="700" fontFamily="Verdana, sans-serif" fill="#2196F3">
                PFA
              </text>

              {/* RIDE Text - Rounded */}
              <text x="85" y="75" fontSize="26" fontWeight="700" fontFamily="Verdana, sans-serif" fill="#2c3e50">
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 6 - Font Minimalist */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 6 - Minimalist</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Light */}
              <text x="20" y="75" fontSize="26" fontWeight="300" fontFamily="Helvetica Neue, sans-serif" fill="#2196F3">
                PFA
              </text>

              {/* RIDE Text - Light */}
              <text x="85" y="75" fontSize="26" fontWeight="300" fontFamily="Helvetica Neue, sans-serif" fill="#2c3e50">
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 7 - Font cu Contrast */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 7 - Contrast</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Light */}
              <text x="20" y="75" fontSize="26" fontWeight="200" fontFamily="Helvetica, sans-serif" fill="#2196F3">
                PFA
              </text>

              {/* RIDE Text - Bold */}
              <text x="85" y="75" fontSize="26" fontWeight="900" fontFamily="Helvetica, sans-serif" fill="#2c3e50">
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 8 - Font Italic/Dynamic */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 8 - Dynamic</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Italic */}
              <text
                x="20"
                y="75"
                fontSize="26"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                fill="#2196F3"
                style={{ fontStyle: "italic" }}
              >
                PFA
              </text>

              {/* RIDE Text - Italic */}
              <text
                x="85"
                y="75"
                fontSize="26"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                fill="#2c3e50"
                style={{ fontStyle: "italic" }}
              >
                RIDE
              </text>
            </svg>
          </div>

          {/* Varianta 9 - Font cu Spațiere */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center text-gray-700">Varianta 9 - Spațiat</h3>
            <svg width="200" height="120" viewBox="0 0 200 120" className="mx-auto">
              {/* Car silhouette */}
              <path
                d="M20 25 Q50 15 100 15 Q150 15 180 25 Q170 35 140 35 Q100 35 60 35 Q30 35 20 25 Z"
                fill="#2c3e50"
                stroke="none"
              />

              {/* PFA Text - Spaced */}
              <text
                x="15"
                y="75"
                fontSize="24"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                fill="#2196F3"
                style={{ letterSpacing: "3px" }}
              >
                PFA
              </text>

              {/* RIDE Text - Spaced */}
              <text
                x="90"
                y="75"
                fontSize="24"
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                fill="#2c3e50"
                style={{ letterSpacing: "3px" }}
              >
                RIDE
              </text>
            </svg>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Care dintre aceste variante îți place cel mai mult? Pot să fac și alte ajustări sau combinații!
          </p>
        </div>
      </div>
    </div>
  )
}
