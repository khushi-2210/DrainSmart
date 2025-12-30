import Card from "../components/Card";

const AboutPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
          About DrainSmart
        </h2>
        <p className="text-gray-600 dark:text-slate-300">
          Methodology, data sources, and system overview
        </p>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
          Project Overview
        </h3>
        <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
          DrainSmart is a civic-tech platform designed to predict and visualize
          urban water-logging risks in Delhi using GIS and data-driven analytics.
        </p>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
          Data Sources
        </h3>
        <ul className="list-disc pl-6 text-gray-600 dark:text-slate-300">
          <li>India Meteorological Department (IMD)</li>
          <li>Municipal Corporation of Delhi</li>
          <li>Survey of India</li>
          <li>Census of India</li>
        </ul>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
          Risk Scoring Methodology
        </h3>
        <ul className="list-disc pl-6 text-gray-600 dark:text-slate-300">
          <li>Historical flooding frequency (30%)</li>
          <li>Drainage infrastructure capacity (25%)</li>
          <li>Rainfall intensity prediction (25%)</li>
          <li>Population density & land use (20%)</li>
        </ul>
      </Card>
    </div>
  );
};

export default AboutPage;

