import { useState } from "react";
import { wards } from "../data/wards";
import Card from "../components/Card";
import { getRiskColor, getRiskDotColor } from "../utils/riskHelpers";

const MapPage = () => {
  const [selectedWard, setSelectedWard] = useState(null);

  return (
    <Card>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">
        Ward-wise Water-logging Risk Map
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {wards.map((ward) => (
          <button
            key={ward.id}
            onClick={() => setSelectedWard(ward)}
            className={`p-4 rounded-lg border-2 ${getRiskColor(
              ward.risk
            )} transition`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-3 h-3 rounded-full ${getRiskDotColor(
                  ward.risk
                )}`}
              />
              <span className="font-semibold">{ward.name}</span>
            </div>
            <p className="text-sm">
              Risk: {ward.risk} <br />
              {ward.hotspots} hotspots
            </p>
          </button>
        ))}
      </div>

      {selectedWard && (
        <div className="mt-6 p-4 rounded-lg bg-slate-100 dark:bg-slate-700">
          <h3 className="font-semibold mb-1">{selectedWard.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Risk Level: {selectedWard.risk} <br />
            Hotspots: {selectedWard.hotspots}
          </p>
        </div>
      )}
    </Card>
  );
};

export default MapPage;
